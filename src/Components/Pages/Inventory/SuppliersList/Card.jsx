"use client";

import React from 'react';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdShoppingCart, MdStar, MdTrendingUp } from 'react-icons/md';

const Card = () => {
    const supplierStats = {
        totalSuppliers: 38,
        newThisWeek: 3,
        activeOrders: 12,
        arrivingThisWeek: 4,
        topSupplier: "MedPlus",
        reliabilityRating: "98%",
        monthlySpend: 24350,
        changeFromLastMonth: -8
    };

    const data = [
        {
            id: 1,
            title: "Total Suppliers",
            total: supplierStats.totalSuppliers.toString(),
            subtitle: `+${supplierStats.newThisWeek} new this quarter`,
            icon: HiOutlineOfficeBuilding,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-500",
            borderColor: "border-l-blue-500"
        },
        {
            id: 2,
            title: "Active Orders",
            total: supplierStats.activeOrders.toString(),
            subtitle: `${supplierStats.arrivingThisWeek} arriving this week`,
            icon: MdShoppingCart,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-500",
            borderColor: "border-l-orange-500"
        },
        {
            id: 3,
            title: "Top Supplier",
            total: supplierStats.topSupplier,
            subtitle: `${supplierStats.reliabilityRating} reliability rating`,
            icon: MdStar,
            iconBg: "bg-yellow-100",
            iconColor: "text-yellow-500",
            borderColor: "border-l-yellow-500"
        },
        {
            id: 4,
            title: "Monthly Spend",
            total: `$${supplierStats.monthlySpend.toLocaleString()}`,
            subtitle: `${supplierStats.changeFromLastMonth}% from last month`,
            icon: MdTrendingUp,
            iconBg: "bg-green-100",
            iconColor: "text-green-500",
            borderColor: "border-l-green-500"
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
                            <p className="text-xs text-gray-500">
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