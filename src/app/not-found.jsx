"use client";

import Button from "@/Components/UI/Button/Button";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#000000] text-white">
      <div>
        <p className="text-3xl md:text-4xl 2xl:text-6xl">
          <span className="text-red-500">404</span> page not found
        </p>

        <div className="flex items-center justify-center px-4 py-10 gap-x-4">
          <Link href="/">
            <div className="flex items-center gap-x-2  bg-[#FFFFFF] hover:bg-[#F5F5F5] text-black px-2 py-2 rounded text-xs font-medium">
              <IoHomeOutline />
              <p>Home</p>
            </div>
          </Link>

          <Button
            onClick={() => window.history.back()}
            variant="primary"
            text="Back"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
