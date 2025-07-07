"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import { AdminSidebarMenuItems } from "./AdminSidebarMenuItems";

export default function AdminSidebar({ onMenuItemClick }) {
  const [openGroups, setOpenGroups] = useState({});
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMdUp, setIsMdUp] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 768);
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleGroup = (label) => {
    setOpenGroups((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleLinkClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      if (onMenuItemClick) onMenuItemClick();
    }
  };

  return (
    <aside
      className={`bg-[#129692] dark:bg-black text-white min-h-screen px-4 transition-all duration-300 
        ${isMdUp ? (isExpanded ? "w-64" : "w-17") : "w-64"}`}
    >
      {/* Toggle button: only visible on md and up */}
      {isMdUp && (
        <div className="sticky top-0 z-1 flex justify-end bg-[#129692] dark:bg-black">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white transition-colors w-full text-right px-2 h-10 cursor-pointer"
          >
            <span
              className={`inline-block transition-transform duration-300 ease-in-out ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaAnglesRight />
            </span>
          </button>
        </div>
      )}

      {/* Menu items */}
      <nav>
        {AdminSidebarMenuItems.map((item, index) => {
          if (item.type === "group") {
            return (
              <div key={index} className="mb-2">
                <button
                  onClick={() => toggleGroup(item.label)}
                  className="flex items-center justify-between w-full px-2 py-2 text-left text-md hover:bg-white/20 rounded cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {item.icon && (
                      <div className="text-xl">
                        <item.icon />
                      </div>
                    )}
                    <span
                      className={`${
                        isMdUp && !isExpanded ? "hidden" : "inline"
                      } transition-opacity duration-300`}
                    >
                      {item.label}
                    </span>
                  </div>
                  {((isMdUp && isExpanded) || !isMdUp) && (
                    <span
                      className={`transition-transform duration-300 ease-in-out ${
                        openGroups[item.label] ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <FaAngleDown />
                    </span>
                  )}
                </button>

                {/* Sub-menu: show when expanded or always on mobile */}
                {((isMdUp && isExpanded) || !isMdUp) &&
                  openGroups[item.label] && (
                    <ul className="mt-2 ml-6 space-y-1 text-md transition-transform duration-300 ease-in-out cursor-pointer">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            onClick={handleLinkClick}
                            className="block px-2 py-1 rounded hover:bg-white/20"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            );
          } else if (item.type === "link") {
            return (
              <div key={index} className="flex items-center">
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 px-2 py-2 rounded hover:bg-white/20 mb-2 w-full text-md cursor-pointer"
                >
                  {item.icon && (
                    <div className="text-xl">
                      <item.icon />
                    </div>
                  )}
                  <span
                    className={`${
                      isMdUp && !isExpanded ? "hidden" : "inline"
                    } transition-opacity duration-300`}
                  >
                    {item.label}
                  </span>
                </Link>
              </div>
            );
          }
          return null;
        })}
      </nav>
    </aside>
  );
}
