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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className={`bg-white rounded-lg p-5 shadow-sm border ${item.brColor} hover:shadow-md transition duration-300 ease-in-out`}
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-600 font-semibold">
              <div
                className={`p-2 rounded-md ${item.bgColor} ${item.iconColor}`}
              >
                {item.icon}
              </div>
              <span>{item.title}</span>
            </div>
            <span className={`text-sm font-medium ${item.statusColor}`}>
              {item.status}
            </span>
          </div>

          {/* Content */}
          <div className="mt-6">
            <h3 className="text-3xl font-bold">{item.total}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
          </div>

          {/* Footer */}
          <div
            className={`mt-6 flex items-center justify-between text-sm font-medium cursor-pointer ${item.iconColor} hover:underline`}
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
