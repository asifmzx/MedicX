import React from "react";
import RecentTransactions from "./RecentTransactions/RecentTransactions";
import PaymentStatus from "./PaymentStatus/PaymentStatus";

const Transactions = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1 sm:col-span-2">
        <RecentTransactions />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <PaymentStatus />
      </div>
    </div>
  );
};

export default Transactions;
