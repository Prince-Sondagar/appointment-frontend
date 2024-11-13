"use client"

import React, { createContext, useEffect, useState } from "react";
import { User } from "../types";
import axiosClient from "../utils/axiosClient";
import Toast from "../components/toast";
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
    const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie('token'));
    const [loading, setLoading] = useState(false);

    const getCurrentUser = async () => {
        try {
            setLoading(true);
            const response = await axiosClient.get('/user/me');
            const user = response?.data?.user;
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
    }, [isLoggedIn]);

    return (
        <>
            <AuthContext.Provider value={{ user, setIsLoggedIn }}>
                {loading ? <Loader /> : children}
            </AuthContext.Provider>
        </>
    )
}


export default AuthContextProvider;