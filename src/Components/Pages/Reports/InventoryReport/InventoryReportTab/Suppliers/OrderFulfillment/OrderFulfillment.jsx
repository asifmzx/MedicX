import OrderFulfillmentBarChart from "@/Components/UI/Chart/Report/OrderFulfillmentBarChart";
import React from "react";

const OrderFulfillment = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Order Fulfillment Rate</p>
        <p className="text-gray-500 mt-3">
          Order fulfillment performance by supplier
        </p>
      </div>
      <div>
        <OrderFulfillmentBarChart />
      </div>
    </div>
  );
};

export default OrderFulfillment;
