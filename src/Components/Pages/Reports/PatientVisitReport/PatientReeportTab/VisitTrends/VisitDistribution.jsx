import VisitDistributionBarChart from "@/Components/UI/Chart/Report/VisitDistributionBarChart";
import React from "react";

const VisitDistribution = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Visit Distribution by Day</p>
        <p className="text-gray-500 mt-3">Patient visits by day of week</p>
      </div>
      <div>
        <VisitDistributionBarChart />
      </div>
    </div>
  );
};

export default VisitDistribution;
