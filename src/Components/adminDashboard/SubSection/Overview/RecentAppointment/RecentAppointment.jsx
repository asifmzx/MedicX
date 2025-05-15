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
    <div className="bg-white rounded-lg shadow-sm p-4 h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          Recent Appointments
        </h1>
        <p className="text-sm text-gray-500">
          You have {appointments.length} appointments today.
        </p>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto pr-2">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
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
                <p className="font-medium text-gray-800">{appointment.name}</p>
                <p className="text-sm text-gray-600">{appointment.type}</p>
                <p className="text-xs text-gray-500">{appointment.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <StatusButton variant={appointment.status} />
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors"
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
          className="text-sm font-medium text-primary-600 hover:text-primary-800 hover:underline"
        >
          View All Appointments
        </Link>
      </div>
    </div>
  );
};

export default RecentAppointment;
