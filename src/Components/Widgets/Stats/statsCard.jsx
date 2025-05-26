import { LuUsersRound } from "react-icons/lu";
import { IoCalendarClearOutline } from "react-icons/io5";
import { TfiMoney } from "react-icons/tfi";
import { FiUser } from "react-icons/fi";
import { MdCheck } from "react-icons/md";
import { PiBed } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export const statsData = [
  {
    title: "Total Patients",
    icon: <LuUsersRound size={30} />,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    textColor: "text-blue-500",
    value: "2,853",
    subtext: "+18.2% from last month",
    progress: null,
  },
  {
    title: "New Appointments",
    icon: <IoCalendarClearOutline size={30} />,
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300",
    textColor: "text-purple-400",
    value: "148",
    subtext: "+4.3% from yesterday",
    progress: null,
  },
  {
    title: "Revenue",
    icon: <TfiMoney size={30} />,
    bgColor: "bg-green-50",
    borderColor: "border-green-300",
    textColor: "text-green-500",
    value: "$24,563",
    subtext: "+10.5% from last week",
    progress: null,
  },
  {
    title: "Active Doctors",
    icon: <FiUser size={30} />,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-300",
    textColor: "text-yellow-500",
    value: "32",
    subtext: "+2 new this month",
    progress: null,
  },
  {
    title: "Bed Occupancy",
    icon: <PiBed size={30} />,
    bgColor: "bg-red-50",
    borderColor: "border-red-300",
    textColor: "text-red-500",
    value: "78%",
    subtext: "156/200 beds occupied, ↑2.5%",
    progress: 78,
    barColor: "bg-red-600",
    barBg: "bg-red-200",
  },
  {
    title: "Appointment Completion",
    icon: <MdCheck size={30} />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-300",
    textColor: "text-teal-500",
    value: "92%",
    subtext: "138/150 appointments completed, ↑1.2%",
    progress: 92,
    barColor: "bg-teal-600",
    barBg: "bg-teal-200",
  },
  {
    title: "Inventory Status",
    icon: <BsBoxSeam size={30} />,
    bgColor: "bg-orange-50",
    borderColor: "border-orange-300",
    textColor: "text-orange-500",
    value: "63%",
    subtext: "12 items below reorder level, ↓4.8%",
    progress: 63,
    barColor: "bg-orange-600",
    barBg: "bg-orange-200",
  },
  {
    title: "Patient Satisfaction",
    icon: <AiOutlineHeart size={30} />,
    bgColor: "bg-pink-50",
    borderColor: "border-pink-300",
    textColor: "text-pink-500",
    value: "87%",
    subtext: "Based on 432 surveys, ↑3.1%",
    progress: 87,
    barColor: "bg-pink-600",
    barBg: "bg-pink-200",
  },
];

export const Card = ({
  title,
  icon,
  bgColor,
  textColor,
  borderColor,
  value,
  subtext,
  progress,
  barColor,
  barBg,
}) => {
  return (
    <div
      className={`rounded-2xl p-6 shadow ${bgColor} ${textColor} border ${borderColor} `}
    >
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="text-2xl ">{icon}</div>
      </div>
      <div className="text-4xl font-bold pt-12">{value}</div>

      <div className="py-2">
        {progress !== null && progress !== undefined && (
          <div className={`w-full h-2 ${barBg} rounded-full`}>
            <div
              className={`h-full rounded-full ${barColor}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
      <div className="text-sm mt-1 mb-2">{subtext}</div>
    </div>
  );
};
