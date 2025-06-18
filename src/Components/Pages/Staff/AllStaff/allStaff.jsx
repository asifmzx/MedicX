"use client";

import React, { useState } from "react";
import BackButton from "@/Components/UI/Button/BackButton";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";

import {
  FaPlus,
  FaChevronDown,
  FaUserShield,
  FaClock,
  FaCertificate,
  FaChartLine,
} from "react-icons/fa6";

import StaffMng from "./StaffMng";

const AllStaff = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownOptions = [
    { icon: FaUserShield, label: "Roles & Permissions" },
    { icon: FaClock, label: "Attendance" },
    { icon: FaCertificate, label: "Certifications" },
    { icon: FaChartLine, label: "Performance" },
  ];

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
          <div className="flex flex-col w-full">
            <h1 className="text-2xl font-bold text-gray-900">
              Staff Management
            </h1>
            <p className="text-xm text-gray-600 mt-1">
              Manage your clinic's staff, roles, and permissions
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-fit items-center gap-2">
          <Buttonv2
            Icon={FaPlus}
            variant="secondary_main"
            text="Add New Staff"
            className="border border-gray-300 h-10 w-full md:w-auto"
          />
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium text-gray-700">
                More Options
              </span>
              <FaChevronDown
                className={`w-3 h-3 text-gray-500 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="py-1">
                  {dropdownOptions.map((option, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        // Handle option click here
                        console.log(`Clicked: ${option.label}`);
                      }}
                    >
                      <option.icon className="w-4 h-4 text-gray-500" />
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}

      <StaffMng />
    </div>
  );
};

export default AllStaff;
