"use client"

import useAuth from "@/app/hooks/useAuth";
import Image from "next/image";

const Header = () => {
    const { user } = useAuth();

    return (
        <div className="bg-gray-100 shadow-md ">
            <div className="mx-auto max-h-16 flex items-center justify-between px-6">
                <div className="flex items-center">
                    <img src='/assets/logo.png' alt="logo" className="h-16 w-16"/>
                    <h1 className="text-xl font-semibold text-gray-800 italic">Appointment App</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Hello, {user?.firstName}</span>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-gray-300  border-solid border-2">
                        <img src='/assets/profileImage.png' alt="User Profile" className="h-10 w-10 object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;