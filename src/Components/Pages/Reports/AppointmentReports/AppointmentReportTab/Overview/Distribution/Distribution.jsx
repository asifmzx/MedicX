import AppointmentStatusDistributionPieChart from "@/Components/UI/Chart/Report/AppointmentStatusDistributionPieChart";
import React from "react";

const Distribution = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">
          Appointment Status Distribution
        </p>
        <p className="text-gray-500 mt-3">
          Breakdown of appointments by their current status
        </p>
      </div>
      <div>
        <AppointmentStatusDistributionPieChart />
      </div>
    </div>
  );
};

export default Distribution;
