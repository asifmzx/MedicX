import GenderDistributionPieChart from "@/Components/UI/Chart/Report/GenderDistributionPieChart";
import React from "react";

const GenderDistribution = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Gender Distribution</p>
        <p className="text-gray-500 mt-3">Patient visits by gender</p>
      </div>
      <div>
        <GenderDistributionPieChart />
      </div>
    </div>
  );
};

export default GenderDistribution;
