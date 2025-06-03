import { ReportData } from "@/Components/Pages/Reports/ReportData";
import PTable from "@/Components/UI/Table/PTable";
import React from "react";

const ExpensesCategory = () => {
  const data = ReportData.financialReport.overview[0].expensesCategory;
  const columns = [
    { label: "Category", key: "Category" },
    { label: "Amount", key: "Amount" },
    { label: "% of Total", key: "Total" },
    {label: "vs Last Month",key: "lastMonth"},
  ];
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Top Expense Categories</p>
        <p className="text-gray-500 mt-3">Highest expense categories</p>
      </div>
      <div className="overflow-x-auto  mt-4">
        <div className="min-w-[300px] ">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ExpensesCategory;
