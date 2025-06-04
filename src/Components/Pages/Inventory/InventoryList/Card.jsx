"use client";

import { inventoryList } from '../data/InventoryData';
import { PiPackage } from 'react-icons/pi';
import { IoWarningOutline } from 'react-icons/io5';
import { MdOutlineAttachMoney, MdOutlineLocalShipping } from 'react-icons/md';

const Card = () => {
    const calculateInventoryStats = () => {
        const totalItems = 1284;
        const lowStockItems = 42;
        const inventoryValue = 124750;
        const activeSuppliers = 38;
        const itemsAddedThisMonth = 24;
        const valueChange = 12.5;

        return {
            totalItems,
            lowStockItems,
            inventoryValue,
            activeSuppliers,
            itemsAddedThisMonth,
            valueChange
        };
    };

    const stats = calculateInventoryStats();

    const data = [
        {
            id: 1,
            title: "Total Items",
            total: stats.totalItems.toLocaleString(),
            subtitle: `+${stats.itemsAddedThisMonth} items added this month`,
            icon: PiPackage,
            showChange: false
        },
        {
            id: 2,
            title: "Low Stock Items",
            total: stats.lowStockItems.toString(),
            subtitle: "View alerts",
            icon: IoWarningOutline,
            showChange: false,
            isWarning: true
        },
        {
            id: 3,
            title: "Value of Inventory",
            total: `$${stats.inventoryValue.toLocaleString()}`,
            subtitle: "from last month",
            value: stats.valueChange,
            icon: MdOutlineAttachMoney,
            showChange: true
        },
        {
            id: 4,
            title: "Active Suppliers",
            total: stats.activeSuppliers.toString(),
            subtitle: "View all suppliers",
            icon: MdOutlineLocalShipping,
            showChange: false
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
            {data.map((item) => {
                const IconComponent = item.icon;
                return (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition duration-300 ease-in-out"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="font-medium text-gray-600 text-sm">{item.title}</span>
                            <IconComponent className={`text-2xl ${item.isWarning ? 'text-orange-500' : 'text-gray-900'}`} />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                {item.total}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {item.showChange && item.value !== undefined && (
                                    <span className={`font-medium ${item.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {item.value >= 0 ? '+' : ''}{item.value}%{' '}
                                    </span>
                                )}
                                <span className={item.isWarning ? 'text-orange-600 font-medium cursor-pointer hover:underline' : ''}>
                                    {item.subtitle}
                                </span>
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;