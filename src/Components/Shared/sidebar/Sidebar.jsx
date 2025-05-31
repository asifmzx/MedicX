"use client";

import Link from "next/link";
import { useState } from "react";
import { menuItems } from "./SidebarMenuItems";

export default function Sidebar({ onMenuItemClick }) {
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (label) => {
    setOpenGroups((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleLinkClick = () => {
    // Optional: only auto-close on mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      if (onMenuItemClick) onMenuItemClick();
    }
  };

  return (
    <aside className="bg-[#193768] text-white min-h-screen p-4 overflow-auto">
      <nav>
        {menuItems.map((item, index) => {
          if (item.type === "group") {
            return (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleGroup(item.label)}
                  className="flex items-center justify-between w-full px-2 py-2 text-left hover:bg-gray-700 rounded"
                >
                  <div className="flex items-center gap-2">
                    {item.icon && <item.icon />}
                    <span>{item.label}</span>
                  </div>
                  <span>{openGroups[item.label] ? "−" : "+"}</span>
                </button>
                {openGroups[item.label] && (
                  <ul className="mt-2 ml-6 space-y-1">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          onClick={handleLinkClick}
                          className="block px-2 py-1 rounded hover:bg-gray-700"
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
              <div key={index} className="mb-4">
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700"
                >
                  {item.icon && <item.icon />}
                  <span>{item.label}</span>
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
