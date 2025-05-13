"use client";

import Link from "next/link";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <aside
      className={`
        bg-[#096B68] w-64 p-4 h-[calc(100vh-64px)] mt-17
        fixed md:relative top-0 left-0 z-40
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:flex md:flex-col md:space-y-4
      `}
    >
      <Link
        href="/Dashboard/AdminDashboard"
        className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        Admin Dashboard
      </Link>
      <Link
        href="/DoctorDashboard"
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
