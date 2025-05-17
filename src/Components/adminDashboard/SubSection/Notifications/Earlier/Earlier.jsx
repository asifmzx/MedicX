import Button from "@/Components/UI/Button/Button";
import { CiCalendar } from "react-icons/ci";
import { FiClock, FiUser } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { TfiMoney } from "react-icons/tfi";

const Earlier = () => {
  const notifications = [
    {
      icon: <MdErrorOutline className="text-red-500 text-xl" />,
      title: "Urgent: Low medication stock",
      description: "Amoxicillin stock is critically low. Please reorder.",
      time: "10 minutes ago",
    },
    {
      icon: <CiCalendar className="text-blue-500 text-xl" />,
      title: "New appointment request",
      description: "Dr. Chen confirmed appointment with patient # 234564",
      time: "1 hour ago",
    },
    {
      icon: <FiUser className="text-green-500 text-xl" />,
      title: "New patient registration",
      description:
        "Weekly staff meeting today at 3:00 PM in Conference Room A.",
      time: "1 hours ago",
    },
    {
      icon: <FiClock className="text-orange-500 text-xl" />,
      title: "Staff schedule update",
      description:
        "Weekly staff meeting today at 3:00 PM in Conference Room A.",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 pb-4">Earlier</h1>
        <Button variant="primary" text="15" className="border" />
      </div>
      {notifications.map((notification, index) => (
        <div key={index} className="flex gap-x-2 py-4 border-b border-gray-200">
          <div>
            <p>{notification.icon}</p>
          </div>
          <div>
            <p className="font-semibold text-sm">{notification.title}</p>
            <p className=" text-xs text-gray-600">{notification.description}</p>
            <p className=" text-xs text-gray-600">{notification.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Earlier;
