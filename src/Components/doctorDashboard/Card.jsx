"use client";
import { FaRegFileLines } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { BiTask } from "react-icons/bi";
import { MdOutlineArrowOutward } from "react-icons/md";

const data = [
    {
        id: 1,
        icon: <CiCalendar className="text-2xl" />,
        title: "Appointments",
        subtitle: "Today's consultations",
        status: "3 urgent",
        statusColor: "text-red-500",
        total: 12,
        link: "View Schedule",
        iconColor: "text-[#2664eb]",
        bgColor: "bg-[#dbebff]",
        brColor: "border-[#dbebff]",
    },
    {
        id: 2,
        icon: <FaRegFileLines className="text-2xl" />,
        title: "Pending Reports",
        subtitle: "Lab results awaiting review",
        status: "2 ready",
        statusColor: "text-green-500",
        total: 7,
        link: "Review Reports",
        iconColor: "text-[#19a075]",
        bgColor: "bg-[#d2fae5]",
        brColor: "border-[#d2fae5]",
    },
    {
        id: 3,
        icon: <GoPeople className="text-2xl" />,
        title: "Active Patients",
        subtitle: "Total patient count this week",
        status: "8 new",
        statusColor: "text-yellow-500",
        total: 143,
        link: "Patient Records",
        iconColor: "text-[#d97707]",
        bgColor: "bg-[#fff4c7]",
        brColor: "border-[#fff4c7]",
    },
    {
        id: 4,
        icon: <BiTask className="text-2xl" />,
        title: "Pending Tasks",
        subtitle: "Tasks requiring attention",
        status: "2 high priority",
        statusColor: "text-red-500",
        total: 5,
        link: "View Tasks",
        iconColor: "text-[#e01d47]",
        bgColor: "bg-[#ffe3e5]",
        brColor: "border-[#ffe3e5]",
    },
];

const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map(
                ({
                    id,
                    icon,
                    title,
                    subtitle,
                    status,
                    statusColor,
                    total,
                    link,
                    iconColor,
                    bgColor,
                    brColor
                }) => (
                    <div
                        key={id}
                        className={`bg-white rounded-lg p-5 shadow-sm justify-between h-48 border ${brColor} hover:shadow-lg transition duration-300 ease-in-out`}
                    >
                        {/* Top Row */}
                        <div className="flex justify-between items-start">
                            <div className="flex flex-row justify-center items-center font-semibold text-gray-600 gap-2">
                                <div className={`p-2 rounded-md ${bgColor} ${iconColor}`}>
                                    {icon}
                                </div>
                                {title}
                            </div>

                            <span className={` mt-2 text-sm font-medium ${statusColor}`}>
                                {status}
                            </span>
                        </div>

                        {/* Middle Content */}
                        <div className="mt-4">
                            <h3 className="text-3xl font-bold">{total}</h3>
                            <p className="text-sm text-gray-500">{subtitle}</p>
                        </div>

                        {/* Footer */}
                        <div className={`flex flex-row justify-between items-center mt-4 text-sm ${iconColor} font-medium cursor-pointer hover:underline`}>
                            {link} <MdOutlineArrowOutward />
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Card;
