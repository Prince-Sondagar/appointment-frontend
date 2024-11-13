
import { setCookie } from "cookies-next";
import Toast from "../components/toast";
import { loginUserInput } from "../types";
import axiosClient from "../utils/axiosClient";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";


const useAuth = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { user, setIsLoggedIn } = useContext(AuthContext);


    const login = async (data: loginUserInput) => {
        try {
            setLoading(true)
            const response = await axiosClient.post('/auth/signIn', data);
            if (response.status !== 200) {
                throw new Error(response?.data?.message)
            }
            await setCookie('token', response.data.token);
            setLoading(false);
            setIsLoggedIn(true);
            Toast.success(response.data.message);
            router.push('/dashboard');

        } catch (error: any) {
            setLoading(false);
            Toast.error(error?.response?.data?.message ?? "Something went wrong");
        }
    };



    const signUp = async (data: any) => {
        try {
            setLoading(true);
            const response = await axiosClient.post('/auth/signUp', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response?.status !== 201) {
                throw new Error(response?.data?.message);
            }
            setLoading(false);
            Toast.success(response?.data?.message || "SignUp successfully!");
            router.push('/login');
        } catch (error: any) {
            setLoading(false);
            Toast.error(error?.response?.data?.message ?? "Something went wrong");
        }
    }

    return {
        loading,
        login,
        signUp,
        user
    };
};


export default useAuth;