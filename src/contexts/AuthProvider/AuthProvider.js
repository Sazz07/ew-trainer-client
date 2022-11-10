import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const gooleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create user with email and password

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    };

    // Google SignIn

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, gooleProvider);
    }

    // logout

    const logout = () => {
        return signOut(auth);
    }

    // Update User profile

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // On Auth state Changed

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }

    },[]);


    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        login,
        signInWithGoogle,
        updateUserProfile,
        logout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;