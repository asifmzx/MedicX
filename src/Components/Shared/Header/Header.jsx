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

  return (
    <nav className="bg-[#193768] text-white w-full fixed top-0 z-50">
      <div className="flex items-center justify-between h-16 px-2">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="md:hidden  hover:bg-white/10 rounded-full"
          >
            <HiMenu className="text-3xl" />
          </button>

          <Link href="/">
            <Image src={assets.logo} alt="Logo" width={120} height={32} />
          </Link>
        </div>

        <div className="flex items-center gap-2">
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
            className="bg-white/20 hover:bg-white/10 rounded-full text-xl font-normal size-10 flex items-center justify-center"
          >
            US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
