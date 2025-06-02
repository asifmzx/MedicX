import HourlyDistributionAreaChart from "@/Components/UI/Chart/Report/HourlyDistributionAreaChart";
import React from "react";

const HourlyDistribution = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Hourly Distribution</p>
        <p className="text-gray-500 mt-3">
          Appointment distribution by time of day
        </p>
      </div>
      <div>
        <HourlyDistributionAreaChart />
      </div>
    </div>
  );
};

export default HourlyDistribution;
