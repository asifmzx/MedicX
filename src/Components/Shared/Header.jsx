"use client"
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoSun } from "react-icons/go";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import { assets } from "@/assets";
import Sidebar from "./Sidebar";

const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-[#096B68] text-white fixed w-full z-100">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex items-center justify-between h-16'>

                    {/* Left side */}
                    <div className="flex items-center w-full">
                        <button
                            className="md:hidden p-2 mr-3 hover:bg-white/10 rounded-md"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <div>
                            <Image
                                src={assets.logo}
                                alt="Logo"
                                width={150}
                                height={50}
                            />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setIsDark(!isDark)}
                                className="p-2 hover:bg-white/10 rounded-md"
                            >
                                {isDark ? <GoSun className="text-xl" /> : <BsFillMoonStarsFill className="text-xl" />}
                            </button>
                            <a
                                href="/"
                                className="p-2 hover:bg-white/10 rounded-md"
                            >
                                <IoMdNotificationsOutline className="text-xl" />
                            </a>
                            <a
                                href="/"
                                className="p-2 bg-white/20 hover:bg-white/10 rounded-full text-xl font-normal"
                            >
                                AM
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`md:hidden fixed inset-0 z-40 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
                <div className={`absolute left-0 top-16 w-64 bg-[#096B68] h-[calc(100vh-4rem)] p-4 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block fixed left-0 top-16 w-64">
                <Sidebar isMenuOpen={true} setIsMenuOpen={() => { }} />
            </div>
        </nav>

    )
}

export default Header