"use client";

import Link from "next/link";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <aside
      className={`
        fixed md:static top-0 z-40
        h-screen w-64 bg-[#096B68] p-4 mt-1
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0
        flex flex-col space-y-4
      `}
    >
      {/* Navigation Links */}
      <Link
        href="/Dashboard/AdminDashboard"
        className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        Admin Dashboard
      </Link>
      <Link
        href="/Dashboard/DoctorDashboard"
        className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        Doctor Dashboard
      </Link>
      <Link
        href="/Dashboard/PatientDashboard"
        className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        Patient Dashboard
      </Link>
    </aside>
  );
};

export default Sidebar;
