import StockLevelTrendsLineChart from "@/Components/UI/Chart/Report/StockLevelTrendsLineChart";
import React from "react";

const StokeLevelTrends = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Stock Level Trends</p>
        <p className="text-gray-500 mt-3">
          Stock level changes over the past 6 months
        </p>
      </div>
      <div>
        <StockLevelTrendsLineChart />
      </div>
    </div>
  );
};

export default StokeLevelTrends;
