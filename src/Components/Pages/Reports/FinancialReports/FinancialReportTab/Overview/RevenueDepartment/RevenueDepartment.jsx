import RevenueDepartmentPieChart from "@/Components/UI/Chart/Report/RevenueDepartmentPieChart";
import React from "react";

const RevenueDepartment = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Revenue by Department</p>
        <p className="text-gray-500 mt-3">
          Distribution of revenue across different departments
        </p>
      </div>
      <div>
        <RevenueDepartmentPieChart />
      </div>
    </div>
  );
};

export default RevenueDepartment;
