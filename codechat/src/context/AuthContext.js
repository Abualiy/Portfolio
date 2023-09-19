// Import statements
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

// Create the AuthContext
export const AuthContext = createContext();

// AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
    // State to hold the current user
    const [currentUser, setCurrentUser] = useState({});

    // Effect to listen for changes in the authentication stat
    useEffect(() => {
        // Subscribe to auth state changes
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        // Unsubscribe from the auth state changes when the component unmounts
        return () => {
            unsub();
        }

    }, []);

    return (
        // Provide the current user value to the context
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}