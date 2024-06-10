import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSnackbar } from "notistack";

import app, { firebase } from "../../configurations/firebase";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [role, setRole] = useState(null);
  const [profile, setProfile] = useState(null);
  const [activity, setActivity] = useState(true)

  const history = useHistory();

  const location = useLocation()

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
   
  }, []);

  const signIn = async (email, password) => {
    
  };

  const updateUser = (userObj, setOpen) => {
   
  };

  const updateUserCredentials = (newPassword, setOpen) => {
    
  };

  const signUp = async (userObj) => {
    
  };

  const addUser = async (userObj) => {
    
  };

  const getUser = async (new_user) => {
    
  };

  const signOut = () => {
   
  };

  useEffect(() => {
    window.addEventListener("offline", () =>
      enqueueSnackbar("Network disconnected", { variant: "error" })
    );
    window.addEventListener("blur", () => {
      setActivity(false)
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
