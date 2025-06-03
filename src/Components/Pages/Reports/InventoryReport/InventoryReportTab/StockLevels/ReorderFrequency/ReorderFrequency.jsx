import ReorderFrequencyBarChart from "@/Components/UI/Chart/Report/ReorderFrequency";
import React from "react";

const ReorderFrequency = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Reorder Frequency</p>
        <p className="text-gray-500 mt-3">
          How often items need to be reordered
        </p>
      </div>
      <div>
        <ReorderFrequencyBarChart />
      </div>
    </div>
  );
};

export default ReorderFrequency;
