import TopUsedItemsBarChart from "@/Components/UI/Chart/Report/TopUsedItemsBarChart";
import React from "react";

const TopUsedItem = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Top Used Items</p>
        <p className="text-gray-500 mt-3">
          Most frequently used inventory items
        </p>
      </div>
      <div>
        <TopUsedItemsBarChart />
      </div>
    </div>
  );
};

export default TopUsedItem;
