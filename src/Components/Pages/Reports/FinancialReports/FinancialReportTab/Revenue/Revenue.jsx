import React from "react";
import RevenueTrends from "./RevenueTrends/RevenueTrends";
import RevenueSources from "./RevenueSources/RevenueSources";
import PaymentMethod from "./PaymentMethod/PaymentMethod";

const Revenue = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1 sm:col-span-2">
        <RevenueTrends />
      </div>
      <div className="col-span-1">
        <RevenueSources />
      </div>
      <div className="col-span-1 ">
        <PaymentMethod />
      </div>
    </div>
  );
};

export default Revenue;
