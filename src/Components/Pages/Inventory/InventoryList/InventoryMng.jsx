"use client";
import React from 'react'
import { useState } from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import Status from "@/Components/UI/Status/Status";

import { inventoryList, categoryList, supplierList } from '../data/InventoryData';
import { AiOutlineSearch } from "react-icons/ai";

const InventoryMng = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filters = {
        all: () => true,
        "medical supplies": (item) => item.category.toLowerCase() === "medical supplies",
        medications: (item) => item.category.toLowerCase() === "medications",
        equipment: (item) => item.category.toLowerCase() === "equipment",
    };

    const filteredData = inventoryList.filter((item) => {
        const matchesTab = filters[activeTab](item);
        const matchesSearch =
            searchQuery === "" ||
            [item.name, item.category, item.status, item.supplier]
                .map((field) => field.toString())
                .some((field) =>
                    field.toLowerCase().includes(searchQuery.toLowerCase())
                );
        return matchesTab && matchesSearch;
    });

    const categoryItems = [
        { label: (<p className='font-semibold text-xs'>All Categories</p>), key: '0'},
        { label: (<p className='text-[12px]'>Medical Supplies</p>), key: '1' },
        { label: (<p className='text-[12px]'>Medications</p>), key: '2' },
        { label: (<p className='text-[12px]'>Equipment</p>), key: '3' },
        { type: 'divider' },
        { label: "Clear Categories", style: { fontSize: '12px', fontWeight: '500' }, key: '7' },
    ];

    const statusItems = [
        { label: (<p className='font-semibold text-xs'>All Status</p>), key: '0' },
        { label: (<p className='text-[12px]'>In Stock</p>), key: '1' },
        { label: (<p className='text-[12px]'>Low Stock</p>), key: '2' },
        { label: (<p className='text-[12px]'>Out of Stock</p>), key: '3' },
        { label: (<p className='text-[12px]'>On Order</p>), key: '4' },
        { type: 'divider' },
        { label: "Clear Status", style: { fontSize: '12px', fontWeight: '500' }, key: '7' },
    ];

    const handleMenuClick = ({ key }) => {
        if (key === '7') {
            setActiveTab("all");
            setSearchQuery("");
        }
    };

    return (
        <div className="max-w-full mt-6">
            <div className="flex flex-col md:flex-row w-full md:w-[30%] gap-2 mb-4">
                <SearchInput
                    type="text"
                    placeholder="Search inventory items..."
                    icon={AiOutlineSearch}
                    inputClassName="text-sm text-gray-700"
                    wrapperClassName="flex h-10 w-full bg-white rounded-xl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className='flex items-center gap-2'>
                    <Dropdown menu={{
                        items: categoryItems, onClick: handleMenuClick, selectable: true,
                        defaultSelectedKeys: ['0'],
                    }} trigger={['click']}>
                        <a onClick={e => e.preventDefault()} className='bg-white flex items-center px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors w-[150px] cursor-pointer h-10'>
                            <Space>
                                <span className='text-[14px] font-semibold'>All Categories</span>
                                <span className='text-[10px]'><DownOutlined /></span>
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown menu={{ items: statusItems, onClick: handleMenuClick, defaultSelectedKeys: ['0'], selectable: true }} trigger={['click']}>
                        <a onClick={e => e.preventDefault()} className='bg-white flex items-center px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors w-[110px] cursor-pointer h-10'>
                            <Space>
                                <span className='text-[14px] font-semibold'>All Status</span>
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
                        text="All"
                        onClick={() => setActiveTab("all")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "all"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Medical Supplies"
                        onClick={() => setActiveTab("medical supplies")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "medical supplies"}
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
                        text="Equipment"
                        onClick={() => setActiveTab("equipment")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "equipment"}
                    />
                </div>
            </div>

            <div className="overflow-x-auto bg-white shadow-sm border border-gray-200 rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200 ">
                        <tr className='cursor-default'>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Level</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 cursor-default">
                        {filteredData.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{item.id}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                        <div className="text-xs text-gray-500">Unit Price: ${item.unitPrice}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{item.category}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{item.stockLevel}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Status type='inventory' variant={item.status} text={item.status} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.lastUpdated}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button className= "text-xl text-black font-bold hover:bg-gray-200 transition-colors size-8 rounded-md cursor-pointer">
                                        <div>⋯</div>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between mt-4 text-sm text-gray-900 ">
                <div className='cursor-default'>
                    Showing {filteredData.length} of {inventoryList.length} items
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border bg-white border-gray-300 rounded hover:bg-gray-200 transition-colors cursor-pointer">
                        Previous
                    </button>
                    <button className="px-3 py-1 border bg-white border-gray-300 rounded hover:bg-gray-200 transition-colors cursor-pointer">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryMng;
