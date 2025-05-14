"use client";

import Link from "next/link";
import { useSidebar } from "./SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div className={`md:hidden fixed top-16 inset-0 z-40 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={closeSidebar} />
        <aside
          className={`
            absolute top-0 left-0 bg-[#096B68] w-64 h-full p-4
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            flex flex-col space-y-4
          `}
        >
          {/* Navigation Links */}
          <Link
            href="/Dashboard/AdminDashboard"
            className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={closeSidebar}
          >
            Admin Dashboard
          </Link>
          <Link
            href="/Dashboard/DoctorDashboard"
            className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={closeSidebar}
          >
            Doctor Dashboard
          </Link>
          <Link
            href="/Dashboard/PatientDashboard"
            className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={closeSidebar}
          >
            Patient Dashboard
          </Link>
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className="
          hidden md:flex fixed top-16 left-0 z-30
          h-[calc(100vh-4rem)] w-64 bg-[#096B68] p-4
          flex-col space-y-4 mt-1
        "
      >
        <Link
          href="/Dashboard/AdminDashboard"
          className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Admin Dashboard
        </Link>
        <Link
          href="/Dashboard/DoctorDashboard"
          className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Doctor Dashboard
        </Link>
        <Link
          href="/Dashboard/PatientDashboard"
          className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Patient Dashboard
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;
