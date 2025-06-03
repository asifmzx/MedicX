"use client";
import React from 'react'
import { useState } from "react";

import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";
import Status from "@/Components/UI/Status/Status";

import { departmentList } from '../data/departmentsData';

const departmentListMng = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filters = {
        all: () => true,
        active: (item) => item.status.toLowerCase() === "active",
        inactive: (item) => item.status.toLowerCase() === "inactive",
    };

    const filteredData = departmentList.filter((item) => {
        const matchesTab = filters[activeTab](item);
        const matchesSearch =
            searchQuery === "" ||
            [item.name, item.headOfDepartment, item.status, item.description]
                .map((field) => field.toString())
                .some((field) =>
                    field.toLowerCase().includes(searchQuery.toLowerCase())
                );
        return matchesTab && matchesSearch;
    });

    return (
        <div className="max-w-full mt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="grid grid-cols-3 gap-2 w-full md:w-auto">
                    <Buttonv2
                        variant="primary"
                        text="All Departments"
                        onClick={() => setActiveTab("all")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "all"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Active"
                        onClick={() => setActiveTab("active")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "active"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Inactive"
                        onClick={() => setActiveTab("inactive")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "inactive"}
                    />
                </div>

                <div className="flex w-full md:w-fit gap-2">
                    <SearchInput
                        type="text"
                        placeholder="Search departments..."
                        icon={AiOutlineSearch}
                        inputClassName="text-sm text-gray-700"
                        wrapperClassName="flex h-10 w-full md:w-[300px] bg-white rounded-xl"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="overflow-x-auto bg-white shadow-sm border border-gray-200 rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Head of Department</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff Count</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredData.map((department) => (
                            <tr key={department.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{department.name}</div>
                                        <div className="text-xs text-gray-500">{department.description}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{department.headOfDepartment}</div>
                                    <div className="text-xs text-gray-500">Est. {department.established}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {department.staffCount}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {department.services}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Status type='department' variant={department.status} text={department.status} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button className="text-black font-bold hover:text-gray-600 transition-colors">
                                        <div className="w-4 h-4">⋯</div>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                <div>
                    Showing {filteredData.length} of {departmentList.length} departments
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 transition-colors">
                        Previous
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 transition-colors">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default departmentListMng
