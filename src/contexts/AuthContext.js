import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useContext, useState } from "react";
import "../firebase";

const AuthContext = React.createContext();

export function useAuth() {       //this 'useAuth' is self-made custom hook
    return useContext(AuthContext);
}

export function AuthProvider(children) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    //signup function

    async function signup(email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword();
    }

    return (
        <AuthContext.Provider value={value}>
             {!loading && children}
        </AuthContext.Provider>
    );
}