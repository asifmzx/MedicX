import PaymentMethodsPieChart from "@/Components/UI/Chart/Widgets/PaymentMethodsPieChart";
import React from "react";

const PaymentMethods = () => {
  return (
    <div className="bg-white p-8 rounded-xl">
      <div className="space-y-2 pb-8">
        <p className="text-3xl font-semibold ">Patient Admissions</p>
        <p className="text-lg text-gray-500">
          Monthly trend for the current year
        </p>
      </div>
      <PaymentMethodsPieChart />
    </div>
  );
};

export default PaymentMethods;
