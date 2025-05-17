import Button from "@/Components/UI/Button/Button";
import { CiCalendar } from "react-icons/ci";
import { FiClock, FiUser } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { TfiMoney } from "react-icons/tfi";

const Unread = () => {
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
      description: "Emily Parker has registered as a new patient.",
      time: "1 hour ago",
    },
    {
      icon: <FiUser className="text-green-500 text-xl" />,
      title: "New patient registration",
      description: "Emily Parker has registered as a new patient.",
      time: "1 hour ago",
    },
    {
      icon: <FiClock className="text-orange-500 text-xl" />,
      title: "Staff schedule update",
      description: "Staff schedule has been updated.",
      time: "2 hours ago",
    },
    {
      icon: <TfiMoney className="text-purple-500 text-xl" />,
      title: "Payment received",
      description: "Insurance payment of $1,250 received for patient #12345.",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">Unread</h1>
        <Button variant="secondary" text="10" />
      </div>
      <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex items-start gap-x-3 pb-4 border-b border-gray-200 last:border-b-0"
          >
            <div>{notification.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-gray-800 truncate">
                {notification.title}
              </p>
              <p className="text-xs text-gray-600 truncate">
                {notification.description}
              </p>
              <p className="text-xs text-gray-500">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unread;
