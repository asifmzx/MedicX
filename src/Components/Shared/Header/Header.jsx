"use client";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoSun } from "react-icons/go";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";
import { assets } from "@/assets";
import Link from "next/link";

const Header = ({ toggleSidebar }) => {
  const [isDark, setIsDark] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#14837f] text-white w-full fixed top-0 z-50">
      <div className="flex items-center justify-between h-16 px-5">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Hamburger only visible on mobile */}
          <button
            onClick={toggleSidebar}
            className="md:hidden hover:bg-white/10 rounded-full "
            aria-label="Toggle Sidebar"
          >
            <HiMenu className="text-3xl" />
          </button>

          <Link href="/">
            <Image src={assets.logo} alt="Logo" width={120} height={32} />
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 relative">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-white/10 rounded-full flex justify-center items-center"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <GoSun className="text-xl" />
            ) : (
              <BsFillMoonStarsFill className="text-xl" />
            )}
          </button>

          {/* Notifications */}
          <Link
            href="/"
            className="hover:bg-white/10 rounded-full flex justify-center items-center p-2"
            aria-label="Notifications"
          >
            <IoMdNotificationsOutline className="text-xl" />
          </Link>

          {/* Dropdown Trigger */}
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="bg-white/20 hover:bg-white/10 rounded-full text-xl font-normal flex items-center justify-center px-3 py-1"
            aria-label="User Dropdown"
          >
            US
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-14 right-0 bg-[#a1dad8] text-black rounded shadow-lg w-40 z-50">
              <Link
                href="/home/Admin/dashboard"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Admin
              </Link>
              <Link
                href="/home/Doctor/dashboard/doctordashboard"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Doctor
              </Link>
              <Link
                href="/home/Patient/dashboard/patientdashboard"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Patient
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
