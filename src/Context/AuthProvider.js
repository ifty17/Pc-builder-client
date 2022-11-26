import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };

    const logOut = () =>{
        return signOut(auth);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }



    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("user observing");
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);



    const authInfo = {
      createUser,
      loginUser,
      logOut,
      user,
      googleSignIn,
      loading,
      setLoading,
      updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;