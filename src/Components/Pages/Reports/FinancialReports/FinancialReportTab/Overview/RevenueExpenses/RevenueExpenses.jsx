import RevenueExpensesBarChart from "@/Components/UI/Chart/Report/RevenueExpensesBarChart";
import React from "react";

const RevenueExpenses = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Revenue vs Expenses</p>
        <p className="text-gray-500 mt-3">
          Monthly comparison of revenue and expenses
        </p>
      </div>
      <div>
        <RevenueExpensesBarChart />
      </div>
    </div>
  );
};

export default RevenueExpenses;
