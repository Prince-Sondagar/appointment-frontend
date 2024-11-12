import React, { createContext, useState } from "react";


const AuthContext = createContext(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<string>("Hello");

    return (
        <>
            <AuthContext.Provider value={user}>
                {children}
            </AuthContext.Provider>
        </>
    )
}


export default AuthProvider;