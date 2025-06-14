import MonthlyVisitLineChart from "@/Components/UI/Chart/Report/MonthlyVisitLineChart";
import React from "react";

const MonthlyVisit = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Monthly Visit Trends</p>
        <p className="text-gray-500 mt-3">Patient visits over time</p>
      </div>
      <div>
        <MonthlyVisitLineChart />
      </div>
    </div>
  );
};

export default MonthlyVisit;
