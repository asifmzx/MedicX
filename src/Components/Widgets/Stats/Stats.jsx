import React from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaDollarSign,
  FaBed,
  FaCheckCircle,
  FaBox,
  FaHeart,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const data = [
  {
    title: "Total Patients",
    icon: <FaUser className="text-blue-500" />,
    value: "2,853",
    change: "+18.2%",
    description: "from last month",
    color: "text-blue-500",
  },
  {
    title: "New Appointments",
    icon: <FaCalendarAlt className="text-purple-500" />,
    value: "148",
    change: "+4.3%",
    description: "from yesterday",
    color: "text-purple-500",
  },
  {
    title: "Revenue",
    icon: <FaDollarSign className="text-green-500" />,
    value: "$24,563",
    change: "+10.5%",
    description: "from last week",
    color: "text-green-500",
  },
  {
    title: "Active Doctors",
    icon: <FaUser className="text-yellow-500" />,
    value: "32",
    change: "+2",
    description: "new this month",
    color: "text-yellow-500",
  },
  {
    title: "Bed Occupancy",
    icon: <FaBed className="text-rose-500" />,
    value: "78%",
    change: "+2.5%",
    description: "156/200 beds occupied",
    color: "text-rose-500",
  },
  {
    title: "Appointment Completion",
    icon: <FaCheckCircle className="text-emerald-600" />,
    value: "92%",
    change: "+1.2%",
    description: "138/150 appointments completed",
    color: "text-emerald-600",
  },
  {
    title: "Inventory Status",
    icon: <FaBox className="text-orange-500" />,
    value: "63%",
    change: "-4.8%",
    description: "12 items below reorder level",
    color: "text-orange-500",
  },
  {
    title: "Patient Satisfaction",
    icon: <FaHeart className="text-pink-500" />,
    value: "87%",
    change: "+3.1%",
    description: "Based on 432 patient surveys",
    color: "text-pink-500",
  },
];

export default function Stats() {
  return <div></div>;
}
