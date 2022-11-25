import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth'
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }





    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("user observing");
        setUser(currentUser);
        // setLoading(false);
      });
      return () => unsubscribe();
    }, []);



    const authInfo = {createUser};

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;