"use client";
import { FaRegFileLines } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { BiTask } from "react-icons/bi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GiMedicines, GiTakeMyMoney } from "react-icons/gi";

const data = [
  {
    id: 1,
    icon: <CiCalendar className="text-xl" />,
    title: "Next Appointment",
    value: "Tomorrow",
    subtitle: "10:30 AM with Dr. Johnson",
    link: "View details",
    iconColor: "text-[#2664eb]",
    bgColor: "bg-[#dbebff]",
    brColor: "border-[#dbebff]",
  },
  {
    id: 2,
    icon: <GiMedicines className="text-xl" />,
    title: "Medications",
    value: "3 Active",
    subtitle: "Next dose in 2 hours",
    link: "View all medications",
    iconColor: "text-[#19a075]",
    bgColor: "bg-[#d2fae5]",
    brColor: "border-[#d2fae5]",
  },
  {
    id: 3,

    icon: <FaRegFileLines className="text-xl" />,
    title: "Test Results",
    value: "2 New",
    subtitle: "Blood work from 05/12",
    link: "View results",
    iconColor: "text-[#a855f7]",
    bgColor: "bg-[#f3e8ff]",
    brColor: "border-[#f3e8ff]",
  },
  {
    id: 4,
    icon: <GiTakeMyMoney className="text-xl" />,
    title: "Billing",
    value: "$45.00",
    subtitle: "Due in 15 days",
    link: "Make payment",
    iconColor: "text-[#e01d47]",
    bgColor: "bg-[#ffe3e5]",
    brColor: "border-[#ffe3e5]",
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className={`bg-white rounded-lg p-5 shadow-sm border ${item.brColor} hover:shadow-md transition duration-300 ease-in-out`}
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-2 text-gray-500 font-semibold">
            <span>{item.title}</span>
            <div
              className={`p-1.5 rounded-full ${item.bgColor} ${item.iconColor}`}
            >
              {item.icon}
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-3">
            <h3 className="text-2xl font-bold">{item.value}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
          </div>

          {/* Footer */}
          <div
            className={`mt-6 border-t-1 border-gray-200 p-2 flex items-center justify-between text-sm font-medium cursor-pointer ${item.iconColor} hover:underline`}
          >
            <span>{item.link}</span>
            <MdOutlineArrowOutward />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
