import PaymentStatusPieChart from "@/Components/UI/Chart/Report/PaymentStatusPieChart";
import React from "react";

const PaymentStatus = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Payment Status</p>
        <p className="text-gray-500 mt-3">Overview of payment statuses</p>
      </div>
      <div>
        <PaymentStatusPieChart />
      </div>
    </div>
  );
};

export default PaymentStatus;
