"use client";
import React from 'react'
import { useState } from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { suppliersData } from "../data/InventoryData";

import { AiOutlineSearch } from "react-icons/ai";

const SuppliersListMng = () => {
    const [activeTab, setActiveTab] = useState("all suppliers");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [selectedStatus, setSelectedStatus] = useState("All Status");

    const getFilteredByTab = () => {
        switch (activeTab) {
            case "preferred":
                return suppliersData.filter(supplier => supplier.rating >= 4);
            case "medications":
                return suppliersData.filter(supplier => supplier.category === "Medications");
            case "medical supplies":
                return suppliersData.filter(supplier => supplier.category === "Medical Supplies");
            case "all suppliers":
            default:
                return suppliersData;
        }
    };

    const filteredData = getFilteredByTab().filter((supplier) => {
        const matchesSearch =
            searchQuery === "" ||
            [supplier.name, supplier.category, supplier.contact]
                .map((field) => field.toString())
                .some((field) =>
                    field.toLowerCase().includes(searchQuery.toLowerCase())
                );

        const matchesCategory = selectedCategory === "All Categories" ||
            supplier.category.toLowerCase() === selectedCategory.toLowerCase();

        const matchesStatus = selectedStatus === "All Status" ||
            supplier.status.toLowerCase() === selectedStatus.toLowerCase();

        return matchesSearch && matchesCategory && matchesStatus;
    });

    const categoryItems = [
        { label: (<p className='font-semibold text-xs'>All Categories</p>), key: 'All Categories' },
        { label: (<p className='text-[12px]'>Medical Supplies</p>), key: 'Medical Supplies' },
        { label: (<p className='text-[12px]'>Medications</p>), key: 'Medications' },
        { label: (<p className='text-[12px]'>Equipment</p>), key: 'Equipment' },
        { label: (<p className='text-[12px]'>Laboratory</p>), key: 'Laboratory' },
        { label: (<p className='text-[12px]'>Office Supplies</p>), key: 'Office Supplies' },
    ];

    const statusItems = [
        { label: (<p className='font-semibold text-xs'>All Status</p>), key: 'All Status' },
        { label: (<p className='text-[12px]'>Active</p>), key: 'Active' },
        { label: (<p className='text-[12px]'>Inactive</p>), key: 'Inactive' },
    ];

    const handleCategoryClick = ({ key }) => {
        setSelectedCategory(key);
    };

    const handleStatusClick = ({ key }) => {
        setSelectedStatus(key);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={`text-sm ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
                ★
            </span>
        ));
    };

    return (
        <div className="max-w-full mt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="flex-1 max-w-md w-full">
                    <SearchInput
                        type="text"
                        placeholder="Search suppliers..."
                        icon={AiOutlineSearch}
                        inputClassName="text-sm text-gray-700"
                        wrapperClassName="flex h-10 w-full bg-white rounded-xl"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className='flex items-center gap-2 w-full md:w-auto'>
                    <Dropdown
                        menu={{
                            items: categoryItems,
                            onClick: handleCategoryClick,
                            selectedKeys: [selectedCategory]
                        }}
                        trigger={['click']}
                    >
                        <a onClick={e => e.preventDefault()} className='bg-white flex items-center px-8 md:px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors min-w-[160px] w-full cursor-pointer h-10'>
                            <Space>
                                <span className='text-[14px] font-medium'>{selectedCategory}</span>
                                <span className='text-[10px]'><DownOutlined /></span>
                            </Space>
                        </a>
                    </Dropdown>

                    <Dropdown
                        menu={{
                            items: statusItems,
                            onClick: handleStatusClick,
                            selectedKeys: [selectedStatus]
                        }}
                        trigger={['click']}
                    >
                        <a onClick={e => e.preventDefault()} className='bg-white flex items-center px-8 md:px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors min-w-[120px] w-full cursor-pointer h-10'>
                            <Space>
                                <span className='text-[14px] font-medium'>{selectedStatus}</span>
                                <span className='text-[10px]'><DownOutlined /></span>
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full md:w-auto">
                    <Buttonv2
                        variant="primary"
                        text="All Suppliers"
                        onClick={() => setActiveTab("all suppliers")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "all suppliers"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Preferred"
                        onClick={() => setActiveTab("preferred")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "preferred"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Medications"
                        onClick={() => setActiveTab("medications")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "medications"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Medical Supplies"
                        onClick={() => setActiveTab("medical supplies")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "medical supplies"}
                    />
                </div>
            </div>

            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Supplier Directory</h2>
                    <p className="text-sm text-gray-600">A comprehensive list of all your suppliers and vendors</p>
                </div>

                <div className="overflow-x-auto rounded-lg">
                    <table className="w-full">
                        <thead className="border-b border-gray-200">
                            <tr className='cursor-default'>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 cursor-default">
                            {filteredData.map((supplier) => (
                                <tr key={supplier.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{supplier.id}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900 hover:text-blue-800 cursor-pointer">
                                            {supplier.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{supplier.category}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{supplier.contact}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            {renderStars(supplier.rating)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {supplier.status === "Active" ? (
                                            <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                                {supplier.status}
                                            </span>
                                        ) : (
                                            <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                                                {supplier.status}
                                            </span>
                                        )}
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <button className="text-xl text-gray-400 hover:text-gray-600 transition-colors size-8 rounded-md cursor-pointer hover:bg-gray-100">
                                            <div>⋯</div>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredData.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-500">No suppliers found</div>
                        </div>
                    )}
                </div>
            </div>

            {filteredData.length > 0 && (
                <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                    <div className='cursor-default'>
                        Showing {filteredData.length} suppliers
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border bg-white border-gray-300 rounded hover:bg-gray-50 transition-colors cursor-pointer text-sm">
                            Previous
                        </button>
                        <button className="px-3 py-1 border bg-white border-gray-300 rounded hover:bg-gray-50 transition-colors cursor-pointer text-sm">
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SuppliersListMng;
