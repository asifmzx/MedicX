"use client";

import Header from "@/Components/Shared/Header/Header";
import Sidebar from "@/Components/Shared/sidebar/Sidebar";
import { SidebarProvider } from "@/Components/Shared/sidebar/SidebarContext";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <Header />
      <Sidebar />
      <div className="pt-16 md:pl-64 min-h-screen bg-gray-200 ">{children}</div>
    </SidebarProvider>
  );
}
