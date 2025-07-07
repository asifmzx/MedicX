"use client";
import { MdOutlineAttachMoney } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { FiUsers } from "react-icons/fi";

const data = [
  {
    id: 1,
    icon: <MdOutlineAttachMoney className=" text-2xl" />,
    title: "Total Revenue",
    text: "+20.1%",
    color: "text-[#8AD0A4]",
    number: "45,231.89",
  },
  {
    id: 2,
    icon: <CiCalendar className=" text-2xl" />,
    title: "Appointments",
    text: "+10.1%",
    color: "text-[#3B82F6]",
    number: "2,350",
  },
  {
    id: 3,
    icon: <GoPerson className=" text-2xl" />,
    title: "Patients",
    text: "+19%",
    color: "text-[#F59E0B]",
    number: "12,234",
  },
  {
    id: 4,
    icon: <FiUsers className=" text-2xl" />,
    title: "Staff",
    text: "+4",
    color: "text-[#A855F7]",
    number: "573",
  },
];

const Card = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {data.map(({ id, icon, title, text, number, color }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-900 rounded-lg p-4 flex flex-col gap-2 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className={` ${color}`}>{icon}</div>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className={` ${color}`}>{text}</span> from last month
            </p>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              ${number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
