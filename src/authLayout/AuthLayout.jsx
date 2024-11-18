import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase.config/firebase.config';

export const AuthContext = createContext(null)

const AuthLayout = ({children}) => {
    const name='rifat';
    const [user,setUser]=useState(null)
    const handelRegistWemail=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const handelLoginWemail = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const handleSingOut = ()=>{
        return signOut(auth);
    }


    
    const userInfo = {
        name,user,setUser,handelRegistWemail,handelLoginWemail,handleSingOut
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         
          setUser(currentUser);
          console.log(" Current user:", currentUser); 
        });
        return () => {
          unsubscribe();
        };
      }, []);



    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthLayout;