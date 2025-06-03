import PaymentMethodPieChart from "@/Components/UI/Chart/Report/PaymentMethodPieChart";
import React from "react";

const PaymentMethod = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Revenue by Payment Method</p>
        <p className="text-gray-500 mt-3">
          Distribution of revenue by payment type
        </p>
      </div>
      <div>
        <PaymentMethodPieChart />
      </div>
    </div>
  );
};

export default PaymentMethod;
