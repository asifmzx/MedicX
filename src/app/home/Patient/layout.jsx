"use client";
import { useState } from "react";

import Header from "@/Components/Shared/Header/Header";
import PatientSidebar from "@/Components/Shared/sidebar/PatientSidebar/PatientSidebar";


export default function HomeLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-30 h-16">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      {/* Main Body */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside
          className={`ScrollBar fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white z-20 overflow-y-auto transform transition-transform duration-200 ease-in-out
          w-100% md:translate-x-0 md:static md:block
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <PatientSidebar onMenuItemClick={() => setSidebarOpen(false)} />
        </aside>

        {/* Main Content Area */}
        <main
          className={`
            flex-1 overflow-y-auto bg-gray-50 h-[calc(100vh-4rem)] ScrollBar
            transition-all duration-300 ease-in-out
            
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
