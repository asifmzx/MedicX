import StockStatusPieChart from "@/Components/UI/Chart/Report/StockStatusPieChart";
import React from "react";

const StockStatus = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Stock Status Distribution</p>
        <p className="text-gray-500 mt-3">
          Current stock status of inventory items
        </p>
      </div>
      <div>
        <StockStatusPieChart />
      </div>
    </div>
  );
};

export default StockStatus;
