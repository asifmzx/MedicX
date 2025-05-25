import AppointmentStatusPieChart from "@/Components/UI/Chart/Widgets/AppointmentStatusPieChart";
import React from "react";

const AppointmentStatus = () => {
  return (
    <div className="bg-white p-8 rounded-xl">
      <div className="space-y-2 pb-8">
        <p className="text-3xl font-semibold ">Appointment Status</p>
        <p className="text-lg text-gray-500">
          Distribution of appointment statuses
        </p>
      </div>
      <div>
        <AppointmentStatusPieChart />
      </div>
    </div>
  );
};

export default AppointmentStatus;
