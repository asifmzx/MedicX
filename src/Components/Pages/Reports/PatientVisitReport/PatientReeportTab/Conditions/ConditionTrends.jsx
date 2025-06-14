import ConditionTrendsLineChart from "@/Components/UI/Chart/Report/TopConditionsLineChart";
import React from "react";

const ConditionTrends = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Monthly Visit Trends</p>
        <p className="text-gray-500 mt-3">Patient visits over time</p>
      </div>
      <div>
        <ConditionTrendsLineChart />
      </div>
    </div>
  );
};

export default ConditionTrends;
