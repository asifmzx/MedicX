import DoctorPerformanceBarChar from "@/Components/UI/Chart/Report/DoctorPerformanceBarChart";
import React from "react";

const DoctorPerformance = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Doctor Performance Comparison</p>
        <p className="text-gray-500 mt-3">
          Visual comparison of key metrics across doctors
        </p>
      </div>
      <div>
        <DoctorPerformanceBarChar />
      </div>
    </div>
  );
};

export default DoctorPerformance;
