"use client";

import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { departmentList } from '../data/departmentsData';
import { GoPeople } from 'react-icons/go';
import { PiHandshakeLight } from 'react-icons/pi';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const Card = () => {
    const calculateDepartmentStats = () => {
        const totalDepartments = departmentList.length;
        const activeDepartments = departmentList.filter(dept => dept.status === "Active").length;
        const lastMonthDepartments = totalDepartments - 2;
        const departmentChange = Math.round(((totalDepartments - lastMonthDepartments) / lastMonthDepartments) * 100);

        const totalStaff = departmentList.reduce((sum, dept) => sum + dept.staffCount, 0);
        const lastMonthStaff = totalStaff - 5;
        const staffChange = Math.round(((totalStaff - lastMonthStaff) / lastMonthStaff) * 100);

        const totalServices = departmentList.reduce((sum, dept) => sum + dept.services, 0);
        const lastMonthServices = totalServices - 12;
        const servicesChange = Math.round(((totalServices - lastMonthServices) / lastMonthServices) * 100);

        return {
            departments: {
                total: totalDepartments,
                change: departmentChange,
                active: activeDepartments
            },
            staff: {
                total: totalStaff,
                change: staffChange
            },
            services: {
                total: totalServices,
                change: servicesChange
            }
        };
    };

    const calculateProgressWidth = (current, max, type) => {
        if (type === 'departments') {
            const stats = calculateDepartmentStats();
            return (stats.departments.active / stats.departments.total) * 100;
        }
        if (type === 'staff') {
            const targetStaff = 60;
            return Math.min((current / targetStaff) * 100, 100);
        }
        if (type === 'services') {
            const targetServices = 100;
            return Math.min((current / targetServices) * 100, 100);
        }
        return 50;
    };

    const stats = calculateDepartmentStats();

    const data = [
        {
            id: 1,
            title: "Total Departments",
            total: stats.departments.total.toString(),
            value: stats.departments.change,
            subtitle: "from last month",
            progressColor: "bg-gray-800",
            progressWidth: `${calculateProgressWidth(stats.departments.total, null, 'departments')}%`,
            isMoney: false,
            icon: HiOutlineBuildingOffice2
        },
        {
            id: 2,
            title: "Total Staff",
            total: stats.staff.total.toString(),
            value: stats.staff.change,
            subtitle: "from last month",
            progressColor: "bg-gray-800",
            progressWidth: `${calculateProgressWidth(stats.staff.total, null, 'staff')}%`,
            isMoney: false,
            icon: GoPeople
        },
        {
            id: 3,
            title: "Services Offered",
            total: stats.services.total.toString(),
            value: stats.services.change,
            subtitle: "from last month",
            progressColor: "bg-gray-800",
            progressWidth: `${calculateProgressWidth(stats.services.total, null, 'services')}%`,
            isMoney: false,
            icon: PiHandshakeLight
        },
        {
            id: 4,
            title: "Active Departments",
            total: stats.departments.active.toString(),
            subtitle: `${((stats.departments.active / stats.departments.total) * 100).toFixed(0)}% of total`,
            progressColor: "bg-gray-800",
            progressWidth: `${(stats.departments.active / stats.departments.total) * 100}%`,
            isMoney: false,
            icon: IoCheckmarkDoneSharp
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
            {data.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition duration-300 ease-in-out"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-medium text-gray-600 text-sm">{item.title}</span>
                            <item.icon className="text-2xl opacity-60 text-gray-900" />
                        </div>

                        <div className="mb-4">
                            <h3 className="text-3xl font-bold text-gray-900 mb-1">
                                {item.total}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {item.value !== undefined && (
                                    <span className={`font-medium ${item.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {item.value >= 0 ? '+' : ''}{item.value}%{' '}
                                    </span>
                                )}
                                <span>
                                    {item.subtitle}
                                </span>
                            </p>
                        </div>

                        <div className="mt-3">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                    className={`${item.progressColor} h-1.5 rounded-full transition-all duration-500`}
                                    style={{ width: item.progressWidth }}
                                ></div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;