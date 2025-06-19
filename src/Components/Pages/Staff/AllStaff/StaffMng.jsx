import React, { useState } from "react";
import { staffData } from "../data/StaffData";
import { IoCalendarOutline, IoEyeOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { LuBuilding, LuPhone } from "react-icons/lu";

const StaffMng = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredStaff = staffData.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStaff.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStaff = filteredStaff.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getStatusStyles = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-200 text-green-800";
      case "On Leave":
        return "bg-yellow-200 text-yellow-800";
      case "Inactive":
        return "bg-red-200 text-red-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
      {currentStaff.map((staff) => (
        <div
          key={staff.id}
          className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
        >
          <div className="bg-gray-50 p-2 w-full flex items-center justify-between mb-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={
                    staff.profileImage ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      staff.name
                    )}&background=0D8ABC&color=fff`
                  }
                  alt={staff.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base leading-tight">
                  {staff.name}
                </h3>
                <p className="text-gray-600 text-sm">{staff.role}</p>
              </div>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles(
                staff.status
              )}`}
            >
              {staff.status}
            </span>
          </div>

          <div className="space-y-2 mb-4 px-4">
            <div className="flex items-center text-gray-900 text-sm">
              <LuBuilding className="w-4 h-4 mr-3 text-gray-600" />
              <span>{staff.department}</span>
            </div>
            <div className="flex items-center text-gray-900 text-sm">
              <AiOutlineMail className="w-4 h-4 mr-3 text-gray-600" />
              <span className="truncate">{staff.email}</span>
            </div>
            <div className="flex items-center text-gray-900 text-sm">
              <LuPhone className="w-4 h-4 mr-3 text-gray-600" />
              <span>{staff.phone}</span>
            </div>
            <div className="flex items-center text-gray-900 text-sm">
              <IoCalendarOutline className="w-4 h-4 mr-3 text-gray-600" />
              <span>Joined {staff.joinedDate}</span>
            </div>
          </div>

          <div className="flex border-t border-gray-200">
            <button className="flex-1 px-3 py-2 text-sm text-black-700 border-r border-gray-200 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2">
              <IoEyeOutline className="w-4 h-4" />
              <span className="font-semibold">View</span>
            </button>
            <button className="flex-1 px-3 py-2 text-sm text-black-700 border-r border-gray-200 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <span className="font-semibold">Edit</span>
            </button>
            <button className="flex-1 px-3 py-2 text-sm text-black-700 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2">
              <IoCalendarOutline className="w-4 h-4" />
              <span className="font-semibold">Schedule</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Joined
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentStaff.map((staff) => (
              <tr
                key={staff.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {staff.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {staff.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {staff.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {staff.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">
                    <div>{staff.email}</div>
                    <div className="text-gray-500">{staff.phone}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {staff.joinedDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusStyles(
                      staff.status
                    )}`}
                  >
                    {staff.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors duration-150">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-white px-4 py-6 border border-gray-200 rounded-md shadow-sm h-fit">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="text-xl font-semibold text-black-900 mb-4 sm:mb-0">
            Staff Directory
          </h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search staff..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex bg-gray-100 rounded-lg p-1.5 w-full mb-6">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all w-full duration-200 ${
              viewMode === "list"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setViewMode("list")}
          >
            List View
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all w-full duration-200 ${
              viewMode === "grid"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setViewMode("grid")}
          >
            Grid View
          </button>
        </div>

        {viewMode === "grid" ? <GridView /> : <ListView />}

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(startIndex + itemsPerPage, filteredStaff.length)}
            </span>{" "}
            of <span className="font-medium">{filteredStaff.length}</span> staff
            members
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffMng;
