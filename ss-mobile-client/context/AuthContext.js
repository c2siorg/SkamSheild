import React, { useEffect, useState } from "react";

import {
  firebaseApp,
  auth,
  firestore,
  functions,
  googleProvider,
} from "@/configurations/firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
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

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [role, setRole] = useState(null);
  const [profile, setProfile] = useState(null);
  const [activity, setActivity] = useState(true);

  useEffect(() => {
    setAuthLoading(true);
    setInitializing(true);
    // signOut()
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
        let userDetails = await getUser(currentUser);
        console.log(userDetails);
        let roleTemp = userDetails.isAdmin ? 0 : 1;
        setRole(roleTemp);
        setProfile(userDetails);
        setAuthLoading(false);
      } else {
        setUser(null);
      }
      setInitializing(false);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const signInWithEmail = async (email, password) => {
    try {
      setAuthLoading(true);
      setInitializing(true);
      await signInWithEmailAndPassword(auth, email, password);
      history(location.pathname !== "/" ? location.pathname : "/main/courses");
      setInitializing(false);
      setAuthLoading(false);
    } catch (e) {
      setInitializing(false);
      setAuthLoading(false);
      console.log(e.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setAuthLoading(true);
      setInitializing(true);
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("User Info:", user);
      console.log("Access Token:", token);
      setAuthToken(token);
      setInitializing(false);
      setAuthLoading(false);
      return { user, token };
    } catch (error) {
      setInitializing(false);
      setAuthLoading(false);
      console.error("Error signing in with Google", error);
      throw error; // Re-throw the error to be handled by the calling function
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
      const response = await getDoc(doc(firestore, "users", new_user.uid));
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
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authToken,
        role,
        profile,
        initializing,
        authLoading,
        signInWithEmail,
        signInWithGoogle,
        signOut,
        signUp,
        updateUser,
        updateUserCredentials,
        getUserByUname,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
