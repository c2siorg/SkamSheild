import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  firebaseApp,
  auth,
  firestore,
  functions,
} from "../../configurations/firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  query,
  where,
  getDocs,
  Timestamp,
  collection,
} from "firebase/firestore";
import { httpsCallable } from "firebase/functions";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [role, setRole] = useState(null);
  const [profile, setProfile] = useState(null);
  const [activity, setActivity] = useState(true);

  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setAuthLoading(true);
    setInitializing(true);
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
        let userDetails = await getUser(currentUser);
        console.log(userDetails);
        let roleTemp = userDetails.isAdmin
          ? 0
          : userDetails.roles && userDetails.roles.includes("client")
          ? 1
          : 2;
        setRole(roleTemp);
        setProfile(userDetails);
        setAuthLoading(false);

        if (roleTemp === 0 || roleTemp === 1) {
          history(
            location.pathname !== "/" ? location.pathname : "/main/reviews"
          );
        }
      } else {
        setUser(null);
      }
      setInitializing(false);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, [auth, history, location.pathname]);

  const updateUserAuthByAdmin = (uid, userObj) => {
    const updateUser = httpsCallable(functions, "api/updateUser");
    updateUser({ uid, userObj })
      .then((result) => {
        console.log("Successfully updated user", result.data.uid);
      })
      .catch((e) => {
        console.log("Error updating user:", e);
      });
  };

  const deleteUserAuthByAdmin = (uid) => {
    const deleteUser = httpsCallable(functions, "api/deleteUser");
    deleteUser({ uid })
      .then((result) => {
        console.log("Successfully deleted user", result.data.uid);
      })
      .catch((e) => {
        console.log("Error deleting user:", e);
      });
  };

  const createUserByAdmin = async (userObj) => {
    setAuthLoading(true);
    try {
      const createUser = httpsCallable(functions, "api/createUser");
      let response = await createUser(userObj);
      console.log("Successfully created user", response.data);
      setAuthLoading(false);
      return response.data;
    } catch (e) {
      console.log("Error creating user:", e);
      setAuthLoading(false);
      return null;
    }
  };

  const signIn = async (email, password) => {
    try {
      setAuthLoading(true);
      setInitializing(true);
      // await signInWithEmailAndPassword(auth, email, password);
      history(location.pathname !== "/" ? location.pathname : "/main/reviews");
      setInitializing(false);
      setAuthLoading(false);
    } catch (e) {
      setInitializing(false);
      setAuthLoading(false);
      console.log(e.message);
    }
  };

  const updateUser = async (userObj, setOpen) => {
    setAuthLoading(true);
    if (userObj.dob) {
      userObj.dob = Timestamp.fromDate(userObj.dob);
    }
    try {
      await updateDoc(doc(firestore, "users", user.uid), userObj);
      setOpen(false);
      setAuthLoading(false);
      const userDetails = await getUser(user);
      setProfile(userDetails);
    } catch (e) {
      setAuthLoading(false);
    }
  };

  const updateUserCredentials = async (newPassword, setOpen) => {
    setAuthLoading(true);
    try {
      await user.updatePassword(newPassword);
      signOut();
      setOpen(false);
    } catch (e) {
      console.log("Error updating password:", e);
    }
  };

  const signUp = async (userObj) => {
    try {
      setInitializing(true);
      let { username, password } = userObj;
      let response = await createUserWithEmailAndPassword(
        auth,
        username,
        password
      );
      userObj["dob"] = Timestamp.fromDate(userObj.dob);
      await addUser({ id: response.user.uid, ...userObj });
      await getUser(response.user);
      setRole(userObj.role);
      setProfile(userObj);
      setInitializing(false);
    } catch (e) {
      setInitializing(false);
    }
  };

  const addUser = async (userObj) => {
    delete userObj.password;
    try {
      await setDoc(doc(firestore, "users", userObj.id), userObj);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getUser = async (new_user) => {
    try {
      console.log(new_user.uid);
      const response = await getDoc(
        doc(firestore, "users", "G8EFVniLhCLPsVAQJHoLE1QJWy0p	")
      );
      console.log(response.data());
      return response.data();
    } catch (e) {
      console.log(e.message);
    }
  };

  const getUserByUname = async (uname) => {
    try {
      const q = query(
        collection(firestore, "users"),
        where("username", "==", uname)
      );
      const response = await getDocs(q);
      const users = [];
      response.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });

      return users[0];
    } catch (e) {
      console.log(e.message);
    }
  };

  const signOut = () => {
    console.log("signout");
    firebaseSignOut(auth)
      .then(() => {
        setUser(null);
        history("/");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    window.addEventListener("offline", () => {});
    window.addEventListener("blur", () => {
      setActivity(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        profile,
        initializing,
        authLoading,
        signIn,
        signOut,
        signUp,
        updateUser,
        updateUserCredentials,
        getUserByUname,
        updateUserAuthByAdmin,
        createUserByAdmin,
        deleteUserAuthByAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
