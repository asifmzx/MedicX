import TopConditionPieChart from "@/Components/UI/Chart/Report/TopConditionPieChart";
import React from "react";

const TopConditions = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Top Conditions</p>
        <p className="text-gray-500 mt-3">Most common patient conditions</p>
      </div>
      <div>
        <TopConditionPieChart />
      </div>
    </div>
  );
};

export default TopConditions;
