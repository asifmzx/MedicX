import AppointmentTrendsLineChart from "@/Components/UI/Chart/Report/AppointmentTrendsLineChart";
import React from "react";

const AppointmentTrends = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Appointment Trends</p>
        <p className="text-gray-500 mt-3">
          Monthly appointment volume over the past year
        </p>
      </div>
      <div>
        <AppointmentTrendsLineChart />
      </div>
    </div>
  );
};

export default AppointmentTrends;
