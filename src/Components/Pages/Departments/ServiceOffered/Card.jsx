"use client";

import { servicesList, departmentList, getRevenueData } from '../data/departmentsData';
import { PiHandshakeLight } from 'react-icons/pi';
import { IoCalendarOutline, IoCheckmarkDoneSharp } from 'react-icons/io5';
import { MdOutlineAccessTime, MdOutlineAttachMoney } from 'react-icons/md';

const Card = () => {
    const calculateServiceStats = () => {
        const activeServices = servicesList.filter(service => service.status === "Active");
        const totalServices = activeServices.length;
        const activeDepartments = departmentList.filter(dept => dept.status === "Active").length;
        const mostPopularService = activeServices.reduce((prev, current) =>
            (prev.appointments > current.appointments) ? prev : current
        );
        const totalMinutes = activeServices.reduce((sum, service) => {
            const minutes = parseInt(service.duration.replace(' min', ''));
            return sum + minutes;
        }, 0);
        const averageDuration = Math.round(totalMinutes / activeServices.length);
        const revenueData = getRevenueData();

        return {
            totalServices,
            activeDepartments,
            mostPopularService,
            averageDuration,
            monthlyRevenue: revenueData.current,
            revenueChange: revenueData.change
        };
    };

    const stats = calculateServiceStats();

    const data = [
        {
            id: 1,
            title: "Total Services",
            total: stats.totalServices.toString(),
            subtitle: `Across ${stats.activeDepartments} departments`,
            icon: PiHandshakeLight,
            showChange: false
        },
        {
            id: 2,
            title: "Most Popular",
            total: stats.mostPopularService.name,
            subtitle: `${stats.mostPopularService.appointments} appointments this month`,
            icon: IoCalendarOutline,
            showChange: false
        },
        {
            id: 3,
            title: "Average Duration",
            total: `${stats.averageDuration} min`,
            subtitle: "Across all services",
            icon: MdOutlineAccessTime,
            showChange: false
        },
        {
            id: 4,
            title: "Monthly Revenue",
            total: `$${stats.monthlyRevenue.toLocaleString()}`,
            subtitle: "from last month",
            value: stats.revenueChange,
            icon: MdOutlineAttachMoney,
            showChange: true
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
                            <IconComponent className="text-2xl text-gray-900" />
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
                                <span>
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