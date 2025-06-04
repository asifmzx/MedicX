import MonthlyUsageAreaChart from "@/Components/UI/Chart/Report/MonthlyUsageAreaChart";
import React from "react";

const MonthlyUsage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Monthly Usage Trends</p>
        <p className="text-gray-500 mt-3">Inventory usage patterns over time</p>
      </div>
      <div>
        <MonthlyUsageAreaChart />
      </div>
    </div>
  );
};

export default MonthlyUsage;
