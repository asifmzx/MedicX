"use client";
import React from 'react'
import { useState } from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";

import { servicesList } from '../data/departmentsData';
import { LuFilter } from 'react-icons/lu';

const ServiceListMng = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filters = {
        all: () => true,
        diagnostic: (item) => item.type.toLowerCase() === "diagnostic",
        treatment: (item) => item.type.toLowerCase() === "treatment",
        preventive: (item) => item.type.toLowerCase() === "preventive",
    };

    const filteredData = servicesList.filter((item) => {
        const matchesTab = filters[activeTab](item);
        const matchesSearch =
            searchQuery === "" ||
            [item.name, item.department, item.type, item.duration]
                .map((field) => field.toString())
                .some((field) =>
                    field.toLowerCase().includes(searchQuery.toLowerCase())
                );
        return matchesTab && matchesSearch;
    });

    const departmentItems = [
        { label: (<p className='font-semibold text-xs'>All Department</p>), key: '0', disabled: true },
        { type: 'divider' },
        { label: (<p className='text-[12px]'>Cardiology</p>), key: '1' },
        { label: (<p className='text-[12px]'>Neurology</p>), key: '2' },
        { label: (<p className='text-[12px]'>Orthopedics</p>), key: '3' },
        { label: (<p className='text-[12px]'>Pediatrics</p>), key: '4' },
        { label: (<p className='text-[12px]'>Radiology</p>), key: '5' },
        { label: (<p className='text-[12px]'>General Medicine</p>), key: '6' },
        { type: 'divider' },
        { label: "Clear Departments", style: { fontSize: '12px', fontWeight: '500' }, key: '7' },
    ];

    const filterItems = [
        { label: (<p className='font-semibold text-xs'>Filter by</p>), key: '0' },
        { type: 'divider' },
        { label: (<p className='text-[12px]'>Price: Low to High</p>), key: '1' },
        { label: (<p className='text-[12px]'>Price: High to Low</p>), key: '2' },
        { label: (<p className='text-[12px]'>Duration: Shortest</p>), key: '3' },
        { label: (<p className='text-[12px]'>Duration: Longest</p>), key: '4' },
        { label: (<p className='text-[12px]'>Popularity</p>), key: '5' },
        { type: 'divider' },
        { label: "Clear Filters", style: { fontSize: '12px', fontWeight: '500' }, key: '7' },
    ];

    const handleMenuClick = ({ key }) => {
        if (key === '7') {
            setActiveTab("all");
            setSearchQuery("");
        }
    };


    return (
        <div className="max-w-full mt-6">
            <div className="flex w-full gap-2 mb-4">
                <SearchInput
                    type="text"
                    placeholder="Search services..."
                    icon={AiOutlineSearch}
                    inputClassName="text-sm text-gray-700"
                    wrapperClassName="flex h-10 w-full bg-white rounded-xl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className='flex items-center gap-2'>
                    <Dropdown menu={{
                        items: departmentItems, onClick: handleMenuClick, selectable: true,
                        defaultSelectedKeys: ['1'],
                    }} trigger={['click']}>
                        <a onClick={e => e.preventDefault()} className='bg-white flex items-center px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors w-[150px] cursor-pointer h-10'>
                            <Space>
                                <span className='text-[14px] font-semibold'>All Departments</span>
                                <span className='text-[10px]'><DownOutlined /></span>
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown menu={{ items: filterItems, onClick: handleMenuClick }} trigger={['click']}>
                        <a onClick={e => e.preventDefault()} className='bg-white flex items-center px-2.5 py-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors w-[80px] cursor-pointer h-10'>
                            <Space>
                                <LuFilter />
                                <span className='text-[14px] font-semibold'>Filter</span>
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="grid grid-cols-4 gap-2 w-full md:w-auto">
                    <Buttonv2
                        variant="primary"
                        text="All"
                        onClick={() => setActiveTab("all")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "all"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Diagnostic"
                        onClick={() => setActiveTab("diagnostic")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "diagnostic"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Treatment"
                        onClick={() => setActiveTab("treatment")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "treatment"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Preventive"
                        onClick={() => setActiveTab("preventive")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "preventive"}
                    />
                </div>
            </div>

            <div className="overflow-x-auto bg-white shadow-sm border border-gray-200 rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredData.map((service) => (
                            <tr key={service.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{service.name}</div>
                                        <div className="text-xs text-gray-500">{service.description}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{service.department}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{service.type}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {service.duration}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    ${service.cost}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button className="text-xl text-black font-bold hover:text-gray-600 transition-colors">
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
                    Showing {filteredData.length} of {servicesList.length} services
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

export default ServiceListMng
