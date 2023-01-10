import React, { Children, createContext, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async() => {
                    setUser("User")
                },
                logout: async() =>{
                    setUser(null)
                }
            }}>
            {children}
        </AuthContext.Provider>
    )
}