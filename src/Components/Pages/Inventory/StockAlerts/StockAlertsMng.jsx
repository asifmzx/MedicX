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

const StockAlertsMng = () => {
    const [activeTab, setActiveTab] = useState("low stock");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedAlertType, setSelectedAlertType] = useState("All Alerts");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const getFilteredByAlertType = () => {
        switch (activeTab) {
            case "low stock":
                return inventoryList.filter(item => item.status === "Low Stock");
            case "out of stock":
                return inventoryList.filter(item => item.status === "Out of Stock");
            case "expiring soon":
                const thirtyDaysFromNow = new Date();
                thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
                return inventoryList.filter(item => {
                    if (!item.expirationDate) return false;
                    const expirationDate = new Date(item.expirationDate);
                    return expirationDate <= thirtyDaysFromNow && expirationDate >= new Date();
                });
            case "all alerts":
            default:
                return inventoryList.filter(item =>
                    item.status === "Low Stock" ||
                    item.status === "Out of Stock" ||
                    (item.expirationDate && new Date(item.expirationDate) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))
                );
        }
    };

    const filteredData = getFilteredByAlertType().filter((item) => {
        const matchesSearch =
            searchQuery === "" ||
            [item.name, item.category, item.status, item.supplier]
                .map((field) => field.toString())
                .some((field) =>
                    field.toLowerCase().includes(searchQuery.toLowerCase())
                );

        const matchesCategory = selectedCategory === "All Categories" ||
            item.category.toLowerCase() === selectedCategory.toLowerCase();

        return matchesSearch && matchesCategory;
    });

    const alertTypeItems = [
        { label: (<p className='font-semibold text-xs'>All Alerts</p>), key: 'all alerts' },
        { label: (<p className='text-[12px]'>Low Stock</p>), key: 'low stock' },
        { label: (<p className='text-[12px]'>Out of Stock</p>), key: 'out of stock' },
        { label: (<p className='text-[12px]'>Expiring Soon</p>), key: 'expiring soon' },
    ];

    const categoryItems = [
        { label: (<p className='font-semibold text-xs'>All Categories</p>), key: 'All Categories' },
        { label: (<p className='text-[12px]'>Medical Supplies</p>), key: 'Medical Supplies' },
        { label: (<p className='text-[12px]'>Medications</p>), key: 'Medications' },
        { label: (<p className='text-[12px]'>Equipment</p>), key: 'Equipment' },
    ];

    const handleAlertTypeClick = ({ key }) => {
        setSelectedAlertType(key === 'all alerts' ? 'All Alerts' :
            key.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
        setActiveTab(key);
    };

    const handleCategoryClick = ({ key }) => {
        setSelectedCategory(key);
    };

    const getAlertTypeTitle = () => {
        switch (activeTab) {
            case "low stock":
                return "Low Stock Items";
            case "out of stock":
                return "Out of Stock Items";
            case "expiring soon":
                return "Expiring Soon Items";
            case "all alerts":
                return "All Alerts";
            default:
                return "Low Stock Items";
        }
    };

    const getAlertTypeDescription = () => {
        switch (activeTab) {
            case "low stock":
                return "Items that have fallen below their minimum stock level";
            case "out of stock":
                return "Items that are completely out of stock";
            case "expiring soon":
                return "Items that will expire within the next 30 days";
            case "all alerts":
                return "All inventory alerts in one view"
            default:
                return "Items that have fallen below their minimum stock level";
        }
    };

    return (
        <div className="max-w-full mt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="flex-1 max-w-md w-full">
                    <SearchInput
                        type="text"
                        placeholder="Search alerts..."
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
                            items: alertTypeItems,
                            onClick: handleAlertTypeClick,
                            selectedKeys: [activeTab]
                        }}
                        trigger={['click']}
                    >
                        <a onClick={e => e.preventDefault()} className='bg-white flex items-center px-8 md:px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors min-w-[120px] w-full cursor-pointer h-10'>
                            <Space>
                                <span className='text-[14px] font-medium'>{selectedAlertType}</span>
                                <span className='text-[10px]'><DownOutlined /></span>
                            </Space>
                        </a>
                    </Dropdown>

                    <Dropdown
                        menu={{
                            items: categoryItems,
                            onClick: handleCategoryClick,
                            selectedKeys: [selectedCategory]
                        }}
                        trigger={['click']}
                    >
                        <a onClick={e => e.preventDefault()} className='bg-white flex items-center px-8 md:px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors min-w-[140px] w-full cursor-pointer h-10'>
                            <Space>
                                <span className='text-[14px] font-medium'>{selectedCategory}</span>
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
                        text="Low Stock"
                        onClick={() => setActiveTab("low stock")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "low stock"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Out of Stock"
                        onClick={() => setActiveTab("out of stock")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "out of stock"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Expiring Soon"
                        onClick={() => setActiveTab("expiring soon")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "expiring soon"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="All Alerts"
                        onClick={() => setActiveTab("all alerts")}
                        className="flex items-center justify-center h-10 text-sm"
                        isActive={activeTab === "all alerts"}
                    />
                </div>
            </div>

            <div className="bg-white px-4 py-2  rounded-lg shadow-sm">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{getAlertTypeTitle()}</h2>
                    <p className="text-sm text-gray-600">{getAlertTypeDescription()}</p>
                </div>

                <div className="overflow-x-auto rounded-lg">
                    <table className="w-full">
                        <thead className=" border-b border-gray-200">
                            <tr className='cursor-default'>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min. Level</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
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
                                        <div className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                                            {item.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{item.category}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{item.currentStock}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{item.minStock}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${item.status === 'Low Stock'
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : item.status === 'Out of Stock'
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-[#f974161c] text-[#fa7516]'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{item.supplier}</div>
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
                            <div className="text-gray-500">No {activeTab} items found</div>
                        </div>
                    )}
                </div>
            </div>

            {filteredData.length > 0 && (
                <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                    <div className='cursor-default'>
                        Showing {filteredData.length} items
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

export default StockAlertsMng;
