"use client";
import { useState } from "react";

import Header from "@/Components/Shared/Header/Header";
import DoctorSidebar from "@/Components/Shared/sidebar/DoctorSidebar/DoctorSidebar";

export default function HomeLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      {/* Main Body */}
      <div className="flex flex-1 pt-16 relative">
        {/* Sidebar */}
        <aside
          className={`
          ScrollBar fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white z-40 overflow-y-auto transform transition-transform duration-300 ease-in-out
          w-100%  md:translate-x-0 md:static md:block
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <DoctorSidebar onMenuItemClick={() => setSidebarOpen(false)} />
        </aside>

        {/* Backdrop overlay - only visible on mobile when sidebar is open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0  bg-opacity-30 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content Area */}
        <main
          className="
            flex-1 overflow-y-auto bg-gray-50 h-[calc(100vh-4rem)] ScrollBar
            transition-all duration-300 ease-in-out
           
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
