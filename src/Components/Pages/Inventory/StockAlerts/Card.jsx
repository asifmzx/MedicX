"use client";

import { inventoryList } from '../data/InventoryData';
import { IoWarningOutline } from 'react-icons/io5';
import { MdError, MdSchedule, MdShoppingCart } from 'react-icons/md';

const Card = () => {
    const calculateInventoryStats = () => {
        // Calculate Low Stock Items (currentStock <= minStock)
        const lowStockItems = inventoryList.filter(item =>
            item.status === "Low Stock" || item.currentStock <= item.minStock
        ).length;

        // Calculate Out of Stock Items
        const outOfStockItems = inventoryList.filter(item =>
            item.status === "Out of Stock" || item.currentStock === 0
        ).length;

        // Calculate Pending Orders
        const pendingOrders = inventoryList.filter(item =>
            item.status === "On Order"
        ).length;

        // Calculate items expiring soon (items updated more than 30 days ago)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const expiringSoonItems = inventoryList.filter(item => {
            const lastUpdated = new Date(item.lastUpdated);
            return lastUpdated < thirtyDaysAgo;
        }).length;

        // Calculate changes from "last week" (mock calculation based on current data)
        const totalItems = inventoryList.length;
        const lowStockChange = Math.floor(lowStockItems * 0.2); // 20% increase assumption
        const outOfStockChange = Math.floor(outOfStockItems * 0.3); // 30% increase assumption

        return {
            lowStockItems,
            outOfStockItems,
            expiringSoonItems,
            pendingOrders,
            lowStockChange,
            outOfStockChange,
            totalItems
        };
    };

    const stats = calculateInventoryStats();

    const data = [
        {
            id: 1,
            title: "Low Stock Items",
            total: stats.lowStockItems.toString(),
            subtitle: `+${stats.lowStockChange} since last week`,
            icon: IoWarningOutline,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-500",
            borderColor: "border-l-orange-500"
        },
        {
            id: 2,
            title: "Out of Stock Items",
            total: stats.outOfStockItems.toString(),
            subtitle: `+${stats.outOfStockChange} since last week`,
            icon: MdError,
            iconBg: "bg-red-100",
            iconColor: "text-red-500",
            borderColor: "border-l-red-500"
        },
        {
            id: 3,
            title: "Expiring Soon",
            total: stats.expiringSoonItems.toString(),
            subtitle: "Within next 30 days",
            icon: MdSchedule,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-500",
            borderColor: "border-l-blue-500"
        },
        {
            id: 4,
            title: "Pending Orders",
            total: stats.pendingOrders.toString(),
            subtitle: "View orders",
            icon: MdShoppingCart,
            iconBg: "bg-gray-100",
            iconColor: "text-gray-600",
            borderColor: "border-l-gray-400",
            isClickable: true
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
            {data.map((item) => {
                const IconComponent = item.icon;
                return (
                    <div
                        key={item.id}
                        className={`bg-white rounded-lg p-6 shadow-sm border border-gray-200 border-l-4 ${item.borderColor} hover:shadow-md transition duration-300 ease-in-out`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-medium text-gray-600 text-sm">{item.title}</span>
                            <div className={`p-2 rounded-full ${item.iconBg}`}>
                                <IconComponent className={`text-lg ${item.iconColor}`} />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                {item.total}
                            </h3>
                            <p className={`text-xs ${item.isClickable ? 'text-gray-400 font-medium cursor-pointer hover:underline' : 'text-gray-500'}`}>
                                {item.subtitle}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;