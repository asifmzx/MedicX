"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSidebar } from "./SidebarContext";
import { usePathname } from "next/navigation";
import { IconContext } from "react-icons";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { menuItems } from "./SidebarMenuItems";

const SidebarLink = ({ href, label, onClick, icon: Icon, isCollapsed }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center text-gray-300 hover:bg-white/10 hover:text-white rounded-md text-sm font-medium
        px-3 py-2
        ${isActive ? "bg-white/10 text-white" : ""}
        ${isCollapsed ? "justify-center" : "justify-start"}
      `}
      onClick={onClick}
      title={isCollapsed ? label : undefined} // show tooltip when collapsed
    >
      {Icon && (
        <IconContext.Provider value={{ className: "w-5 h-5" }}>
          <Icon />
        </IconContext.Provider>
      )}
      {!isCollapsed && <span className="ml-2">{label}</span>}
    </Link>
  );
};

const SidebarGroup = ({ label, items, onClick, icon: Icon, isCollapsed }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isGroupActive = items.some((item) => item.href === pathname);

  useEffect(() => {
    if (isGroupActive) setOpen(true);
  }, [isGroupActive]);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between text-gray-300 hover:bg-white/10 hover:text-white rounded-md text-sm
          px-3 py-2
          ${isGroupActive ? "bg-white/10 text-white" : ""}
          ${isCollapsed ? "justify-center" : "justify-between"}
        `}
        title={isCollapsed ? label : undefined}
      >
        <div
          className={`flex items-center ${
            isCollapsed ? "justify-center w-full" : ""
          }`}
        >
          {Icon && (
            <IconContext.Provider value={{ className: "w-5 h-5" }}>
              <Icon />
            </IconContext.Provider>
          )}
          {!isCollapsed && <span className="ml-2">{label}</span>}
        </div>
        {!isCollapsed &&
          (open ? <SlArrowUp size={14} /> : <SlArrowDown size={14} />)}
      </button>
      {open && !isCollapsed && (
        <div className="pl-8 mt-1 space-y-1">
          {items.map((item, index) => (
            <SidebarLink
              key={index}
              href={item.href}
              label={item.label}
              onClick={onClick}
              icon={item.icon}
              isCollapsed={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarContent = ({ onLinkClick, isCollapsed }) => (
  <div className="flex flex-col space-y-2 pb-4">
    {menuItems.map((item, idx) =>
      item.type === "link" ? (
        <SidebarLink
          key={idx}
          href={item.href}
          label={item.label}
          onClick={onLinkClick}
          icon={item.icon}
          isCollapsed={isCollapsed}
        />
      ) : (
        <SidebarGroup
          key={idx}
          label={item.label}
          items={item.items}
          onClick={onLinkClick}
          icon={item.icon}
          isCollapsed={isCollapsed}
        />
      ),
    )}
  </div>
);

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  // State to track hover on tablet sidebar
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-15 inset-0 z-40 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={closeSidebar} />
        <aside
          className={`absolute top-0 left-0 bg-[#193768] w-64 h-full transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full overflow-y-auto p-4">
            <SidebarContent onLinkClick={closeSidebar} isCollapsed={false} />
          </div>
        </aside>
      </div>

      {/* Tablet Sidebar (sm to md) */}
      <aside
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`hidden sm:flex md:hidden fixed top-15 left-0 z-30 h-[calc(100vh-4rem)] bg-[#193768] mt-1
          transition-all duration-300 ease-in-out
          overflow-hidden
          ${isHovering ? "w-64" : "w-16"}
        `}
        style={{ boxShadow: "2px 0 8px rgba(0,0,0,0.3)" }}
      >
        <div className="h-full overflow-y-auto w-full p-4 ScrollBar">
          <SidebarContent
            onLinkClick={closeSidebar}
            isCollapsed={!isHovering}
          />
        </div>
      </aside>

      {/* Desktop Sidebar (md and up) */}
      <aside className="hidden md:flex fixed top-15 left-0 z-30 h-[calc(100vh-4rem)] w-64 bg-[#193768] mt-1">
        <div className="h-full overflow-y-auto w-full p-4 ScrollBar">
          <SidebarContent isCollapsed={false} />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
