import InventoryCategoryPieChart from "@/Components/UI/Chart/Report/InventoryCategoryPieChart";
import React from "react";

const InventoryCategory = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Inventory by Category</p>
        <p className="text-gray-500 mt-3">
          Distribution of inventory items by category
        </p>
      </div>
      <div>
        <InventoryCategoryPieChart />
      </div>
    </div>
  );
};

export default InventoryCategory;
