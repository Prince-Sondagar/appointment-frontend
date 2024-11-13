"use client"

import React, { createContext, use, useEffect, useState } from "react";
import { User } from "../types";
import axiosClient from "../utils/axiosClient";
import Toast from "../components/toast";
import PageLoader from "next/dist/client/page-loader";
import Loader from "../components/loader";
import { getCookie } from "cookies-next";

type IAuthContextType = {
    user: User | null,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<IAuthContextType>({
    user: null,
    setIsLoggedIn: () => { }
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(false);


    const getCurrentUser = async () => {
        try {
            setLoading(true);
            const response = await axiosClient.get('/user/me');
            const user = response?.data
            setUser(user);
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            Toast.error(error?.response?.data?.message ?? "Something went wrong")
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            getCurrentUser();
        }
    }, [user, isLoggedIn]);

    return (
        <>
            <AuthContext.Provider value={{ user, setIsLoggedIn }}>
                {loading ? <Loader /> : children}
            </AuthContext.Provider>
        </>
    )
}


export default AuthContextProvider;