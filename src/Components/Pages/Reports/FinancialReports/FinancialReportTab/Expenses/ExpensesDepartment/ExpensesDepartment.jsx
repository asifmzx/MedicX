import ExpensesDepartmentBarChart from "@/Components/UI/Chart/Report/ExpensesDepartmentBarChart";
import React from "react";

const ExpensesDepartment = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Department Expenses</p>
        <p className="text-gray-500 mt-3">Expenses by department</p>
      </div>
      <div>
        <ExpensesDepartmentBarChart />
      </div>
    </div>
  );
};

export default ExpensesDepartment;
