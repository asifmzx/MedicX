import ExpenseBreakdownLineChart from "@/Components/UI/Chart/Report/ExpenseBreakdownLineChart";
import React from "react";

const ExpenseBreakdown = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Expense Breakdown</p>
        <p className="text-gray-500 mt-3">Monthly expenses by category</p>
      </div>
      <div>
        <ExpenseBreakdownLineChart />
      </div>
    </div>
  );
};

export default ExpenseBreakdown;
