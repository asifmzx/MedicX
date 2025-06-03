import RevenueTrendsLineChart from "@/Components/UI/Chart/Report/RevenueTrendsLineChart";
import React from "react";

const RevenueTrends = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Revenue Trends</p>
        <p className="text-gray-500 mt-3">
          Monthly revenue breakdown by service category
        </p>
      </div>
      <div>
        <RevenueTrendsLineChart />
      </div>
    </div>
  );
};

export default RevenueTrends;
