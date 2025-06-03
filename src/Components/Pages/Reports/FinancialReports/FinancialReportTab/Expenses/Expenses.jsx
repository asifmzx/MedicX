import React from "react";
import ExpenseBreakdown from "./ExpenseBreakdown/ExpenseBreakdown";
import ExpenseCategories from "./ExpenseCategories/ExpenseCategories";
import ExpensesDepartment from "./ExpensesDepartment/ExpensesDepartment";

const Expenses = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1 sm:col-span-2">
        <ExpenseBreakdown />
      </div>
      <div className="col-span-1">
        <ExpenseCategories />
      </div>
      <div className="col-span-1 ">
        <ExpensesDepartment />
      </div>
    </div>
  );
};

export default Expenses;
