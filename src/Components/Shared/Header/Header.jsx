"use client";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoSun } from "react-icons/go";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import { assets } from "@/assets";
import Link from "next/link";
import { useSidebar } from "../sidebar/SidebarContext";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="bg-[#193768] text-white fixed w-full z-50">
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left */}
          <div className="flex items-center w-full">
            {/* Sidebar Toggle - hidden on md and up */}
            <button
              className="p-2 hover:bg-white/10 rounded-md mr-1 md:hidden"
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Link href="/">
              {/* <img src={assets.logo} alt="/Logo" width={150} height={16} /> */}
              <img src={assets.logo} alt="Logo" className="w-[150px]" />
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 ">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-white/10 rounded-full size-10 flex justify-center items-center"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <GoSun className="text-xl" />
              ) : (
                <BsFillMoonStarsFill className="text-xl" />
              )}
            </button>
            <Link
              href="/"
              className="hover:bg-white/10 rounded-full size-10 flex justify-center items-center"
            >
              <IoMdNotificationsOutline className="text-xl" />
            </Link>
            <Link
              href="/"
              className=" bg-white/20 hover:bg-white/10 rounded-full text-xl font-normal size-10 flex items-center justify-center"
            >
              US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
