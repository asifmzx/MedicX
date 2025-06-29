"use client";

import { MdOutlineAttachMoney, MdOutlineLocalShipping } from 'react-icons/md';
import { BiShieldAlt2 } from "react-icons/bi";
import { GoPeople } from 'react-icons/go';

import { FaUserCog } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { MdManageAccounts } from 'react-icons/md';
import { RiUserSettingsLine } from 'react-icons/ri';

const Card = () => {
    const calculateRolesStats = () => {
        const totalRoles = 8;
        const staffAssigned = 53;
        const medicalRoles = 3;
        const permissionSets = 8;
        const defaultRoles = 6;
        const customRoles = 2;
        const staffAcrossRoles = 53;
        const medicalStaffAssigned = 36;
        const permissionTypes = 4;

        return {
            totalRoles,
            staffAssigned,
            medicalRoles,
            permissionSets,
            defaultRoles,
            customRoles,
            staffAcrossRoles,
            medicalStaffAssigned,
            permissionTypes
        };
    };

    const stats = calculateRolesStats();

    const data = [
        {
            id: 1,
            title: "Total Roles",
            total: stats.totalRoles.toString(),
            subtitle: `${stats.defaultRoles} default, ${stats.customRoles} custom`,
            icon: BiShieldAlt2,
            showChange: false
        },
        {
            id: 2,
            title: "Staff Assigned",
            total: stats.staffAssigned.toString(),
            subtitle: "Across all roles",
            icon: GoPeople,
            showChange: false
        },
        {
            id: 3,
            title: "Medical Roles",
            total: stats.medicalRoles.toString(),
            subtitle: `${stats.medicalStaffAssigned} staff assigned`,
            icon: FaUserCog,
            showChange: false
        },
        {
            id: 4,
            title: "Permission Sets",
            total: stats.permissionSets.toString(),
            subtitle: `${stats.permissionTypes} permission types`,
            icon: MdManageAccounts,
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
                            <IconComponent className="text-2xl text-gray-400" />
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                {item.total}
                            </h3>
                            <p className="text-sm text-gray-500">
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