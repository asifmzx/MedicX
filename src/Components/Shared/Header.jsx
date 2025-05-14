"use client";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoSun } from "react-icons/go";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import { assets } from "@/assets";
import Link from "next/link";
import { useSidebar } from "./SidebarContext";

const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const { toggleSidebar } = useSidebar();

    return (
        <nav className="bg-[#096B68] text-white fixed w-full z-50">
            <div className="w-full px-4 sm:px-6">
                <div className='flex items-center justify-between h-16'>

                    {/* Left */}
                    <div className="flex items-center w-full">
                        {/* Sidebar Toggle - hidden on md and up */}
                        <button
                            className="p-2 mr-3 hover:bg-white/10 rounded-md md:hidden"
                            onClick={toggleSidebar}
                            aria-label="Toggle Sidebar"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <div>
                            <Link href="/Dashboard">
                                <Image src={assets.logo} alt="Logo" width={150} height={50} />
                            </Link>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 hover:bg-white/10 rounded-md"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <GoSun className="text-xl" /> : <BsFillMoonStarsFill className="text-xl" />}
                        </button>
                        <Link href="/Dashboard" className="pr-2 hover:bg-white/10 rounded-md">
                            <IoMdNotificationsOutline className="text-xl" />
                        </Link>
                        <div className="p-2 bg-white/20 hover:bg-white/10 rounded-full text-xl font-normal">
                            AM
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
