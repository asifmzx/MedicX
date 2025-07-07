import StatusButton from "@/Components/UI/Button/StatusButton";
import Link from "next/link";
import { SlOptions } from "react-icons/sl";

const RecentAppointment = () => {
  const appointments = [
    {
      id: 1,
      name: "John Smith",
      type: "Check-up",
      time: "10:30 AM - 11:00 AM",
      image: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
      status: "confirm",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      type: "Dental Cleaning",
      time: "11:30 AM - 12:00 PM",
      image: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
      status: "progress",
    },
    {
      id: 3,
      name: "Michael Brown",
      type: "Annual Physical",
      time: "02:15 PM - 02:45 PM",
      image: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
      status: "complete",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 h-full flex flex-col transition-colors duration-300">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Recent Appointments
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          You have {appointments.length} appointments today.
        </p>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto ">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src={appointment.image}
                  alt="Patient profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">
                  {appointment.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {appointment.type}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {appointment.time}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <StatusButton
                variant={appointment.status}
                text={appointment.status}
              />
              <button
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="More options"
              >
                <SlOptions />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4  ">
        <Link
          href="/Dashboard/AdminDashboard"
          className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 hover:underline"
        >
          View All Appointments
        </Link>
      </div>
    </div>
  );
};

export default RecentAppointment;
