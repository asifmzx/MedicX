import React from "react";
import Status from "@/Components/UI/Status/Status";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";

const UpcommingAppointments = () => {
  const appointments = [
    {
      name: "John Doe",
      time: "09:00 AM",
      type: "Follow-up",
      date: "April 26",
      day: "Saturday",
      variant: "confirmed",
    },
    {
      name: "Jane Smith",
      time: "10:30 AM",
      type: "New Patient",
      date: "April 26",
      day: "Saturday",
      variant: "pending",
    },
    {
      name: "Robert Johnson",
      time: "02:00 PM",
      type: "Consultation",
      date: "April 27",
      day: "Sunday",
      variant: "confirmed",
    },
    {
      name: "Emily Davis",
      time: "11:00 AM",
      type: "Follow-up",
      date: "April 28",
      day: "Monday",
      variant: "confirmed",
    },
    {
      name: "John Doe",
      time: "11:00 AM",
      type: "New Patient",
      date: "April 28",
      day: "Monday",
      variant: "pending",
    },
  ];

  return (
    <div className="w-full mt-2 sm:px-2 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Upcoming Appointments
        </h1>
        <p className="text-gray-600 mt-4">
          Your upcoming appointments for the week
        </p>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="border border-gray-200 p-3 rounded-md hover:bg-gray-100"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">
                  {appointment.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {appointment.day}, {appointment.date} at {appointment.time}
                </p>
              </div>
              <div className="mt-2 flex flex-col sm:flex-row items-center justify-end gap-2">
                <Status
                  variant={appointment.variant}
                  text={appointment.variant}
                />
                <Status
                  className="border rounded-full border-gray-300 text-[12px] px-3 py-1"
                  text={appointment.type}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcommingAppointments;
