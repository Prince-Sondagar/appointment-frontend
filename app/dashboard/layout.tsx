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
        <div className="w-full h-full">
            <Header />
            <div className="d-flex justify-between">
                {/* <div> */}
                    <SideBar />
                {/* </div> */}
                {/* <div> */}
                    {children}
                {/* </div> */}
            </div>
        </div>
    )
}