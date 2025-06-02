import WeeklyDistributionBarChart from "@/Components/UI/Chart/Report/WeeklyDistributionBarChart";
import React from "react";

const WeeklyDistribution = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Weekly Distribution</p>
        <p className="text-gray-500 mt-3">
          Appointment distribution by day of week
        </p>
      </div>
      <div>
        <WeeklyDistributionBarChart />
      </div>
    </div>
  );
};

export default WeeklyDistribution;
