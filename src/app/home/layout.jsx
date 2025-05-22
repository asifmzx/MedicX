"use client";

import Header from "@/Components/Shared/Header";
import Sidebar from "@/Components/Shared/Sidebar";
import { SidebarProvider } from "@/Components/Shared/SidebarContext";

export default function DashboardLayout({ children }) {
    return (
        <SidebarProvider>
            <Header />
            <Sidebar />
            <div className="pt-16 md:pl-64 min-h-screen bg-gray-200">
                {children}
            </div>
        </SidebarProvider>
    );
}