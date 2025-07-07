"use client";

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import {
  HiOutlineFilter,
  HiOutlinePlus,
  HiOutlineDownload,
} from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { rolesData, categoryFilters } from "./data/roles_and_permission_data";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";

const RolesMng = () => {
  const [activeTab, setActiveTab] = useState("All Roles");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeMainTab, setActiveMainTab] = useState("Roles");

  const filteredRoles = rolesData.filter((role) => {
    const matchesSearch =
      role.roleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeTab === "All Roles" || role.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full md:w-auto">
          <Buttonv2
            variant="primary"
            text="Roles"
            onClick={() => setActiveMainTab("Roles")}
            className="flex items-center justify-center h-10 text-sm px-2"
            isActive={activeMainTab === "Roles"}
          />
          <Buttonv2
            variant="primary"
            text="Templates"
            onClick={() => setActiveMainTab("Templates")}
            className="flex items-center justify-center h-10 text-sm px-2"
            isActive={activeMainTab === "Templates"}
          />
          <Buttonv2
            variant="primary"
            text="Permission Matrix"
            onClick={() => setActiveMainTab("Permission Matrix")}
            className="flex items-center justify-center h-10 text-sm px-2"
            isActive={activeMainTab === "Permission Matrix"}
          />
          <Buttonv2
            variant="primary"
            text="Audit Logs"
            onClick={() => setActiveMainTab("Audit Logs")}
            className="flex items-center justify-center h-10 text-sm px-2"
            isActive={activeMainTab === "Audit Logs"}
          />
        </div>
      </div>

      <div className="py-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-2 w-full md:w-auto mb-4 md:mb-0">
            <div className="relative">
              <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 md:w-94 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
              />
            </div>

            <Buttonv2
              variant="primary"
              Icon={HiOutlineFilter}
              className="p-4 h-10 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 w-full md:w-auto bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors justify-center">
              <HiOutlinePlus className="text-lg" />
              Add Role
            </button>
            <button className="flex items-center gap-2 px-4 py-2 w-full md:w-auto bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors justify-center">
              <HiOutlineDownload className="text-lg" />
              Export
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full md:w-auto">
          <Buttonv2
            variant="primary"
            text="All Roles"
            onClick={() => setActiveTab("All Roles")}
            className="flex items-center justify-center h-10 text-sm"
            isActive={activeTab === "All Roles"}
          />
          <Buttonv2
            variant="primary"
            text="Medical"
            onClick={() => setActiveTab("Medical")}
            className="flex items-center justify-center h-10 text-sm"
            isActive={activeTab === "Medical"}
          />
          <Buttonv2
            variant="primary"
            text="Administrative"
            onClick={() => setActiveTab("Administrative")}
            className="flex items-center justify-center h-10 text-sm"
            isActive={activeTab === "Administrative"}
          />
          <Buttonv2
            variant="primary"
            text="Custom"
            onClick={() => setActiveTab("Custom")}
            className="flex items-center justify-center h-10 text-sm"
            isActive={activeTab === "Custom"}
          />
        </div>
      </div>

      <div className="md:bg-white rounded-lg shadow-sm p-0 md:p-6">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Users
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRoles.map((role) => (
                <tr
                  key={role.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-gray-900">
                        {role.roleName}
                      </span>
                      {role.isDefault && (
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md">
                          Default
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-blue-600">
                      {role.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">
                      {role.description}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">
                      {role.users}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">
                      <div className="text-gray-900">{role.lastUpdated}</div>
                      <div className="text-gray-500">by {role.updatedBy}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <BsThreeDotsVertical className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-base">
                      {role.roleName}
                    </h3>
                    {role.isDefault && (
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                        Default
                      </span>
                    )}
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600">
                    {role.category}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                  <BsThreeDotsVertical className="text-lg" />
                </button>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {role.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">
                    Users Assigned
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {role.users}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">
                    Last Updated
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {role.lastUpdated}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    by {role.updatedBy}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-2 border-t border-gray-100">
                <button className="flex-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
                  Edit Role
                </button>
                <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RolesMng;
