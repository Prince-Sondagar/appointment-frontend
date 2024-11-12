"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const sideBarNavItem = [
    {
        title: "Dashboard",
        path: "/dashboard"
    },
    {
        title: "Appointment Create",
        path: "/"
    },
    {
        title: "Appointment View",
        path: "/"
    }
]


const SideBar = () => {

    const pathname = usePathname();

    return (
        <div className="w-40 min-w-[200px] h-full bg-gray-100 flex flex-col p-4 space-y-4" >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Menu</h2>
            {sideBarNavItem?.map((navItem) => (
                <>
                    <Link
                        href={navItem.path}
                        className={`${pathname === navItem.path ? 'sidebar-item-active' : "sidebar-item"} no-underline`}
                    >
                        {navItem?.title}
                    </Link>
                </>
            ))}
        </div>
    )
}

export default SideBar; 