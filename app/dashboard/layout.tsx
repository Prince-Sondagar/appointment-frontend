import React from "react";
import Header from "./components/header";
import SideBar from "./components/siderbar";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "dashboard",
    description: "appointment dashboard"
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="w-full h-screen flex flex-col">
            <Header />

            <div className="flex flex-grow overflow-hidden">
                <SideBar />

                <div className="flex-grow p-4 overflow-y-auto">
                    {children}
                </div>

            </div>
        </div>
    )
}