import React from "react";
import RevenueExpenses from "./RevenueExpenses/RevenueExpenses";
import RevenueDepartment from "./RevenueDepartment/RevenueDepartment";
import FinancialSummary from "./FinancialSummary/FinancialSummary";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1">
        <RevenueExpenses />
      </div>
      <div className="col-span-1">
        <RevenueDepartment />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <FinancialSummary />
      </div>
    </div>
  );
};

export default Overview;
