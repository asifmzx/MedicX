"use client";
import { useState } from "react";
import Sidebar from "@/Components/Shared/sidebar/Sidebar";
import Header from "@/Components/Shared/Header/Header";

export default function HomeLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-30 h-16">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      <div className="flex flex-1 pt-16">
        <aside
          className={`ScrollBar fixed top-16 left-0 w-72 h-[calc(100vh-4rem)] bg-white z-20 overflow-y-auto transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:block`}
        >
          <Sidebar onMenuItemClick={() => setSidebarOpen(false)} />
        </aside>

        <main className="flex-1 overflow-y-auto bg-gray-50 h-[calc(100vh-4rem)] ScrollBar">
          {children}
        </main>
      </div>
    </div>
  );
}
