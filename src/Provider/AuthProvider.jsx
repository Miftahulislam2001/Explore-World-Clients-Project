import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";
export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register with Email And Password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);

  };

  // LogIn with Email and password
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LogOut Function
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  // display last Login User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Sign in with Google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success("sign in successful with google")
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Sign in with GitHub
  const gitHubProvider = new GithubAuthProvider();
  const signInWithGitHub = () => {
      signInWithPopup(auth, gitHubProvider)
          .then((result) => {
              console.log(result.user);
          })
          .catch((error) => {
              console.log(error.message);
          });
  };
  
  const updateProfileData = (user, name) => {
    updateProfile(user, {
        displayName: name,
       
    });

  };



  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    signInWithGoogle,
    signInWithGitHub,
    updateProfileData,

  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
