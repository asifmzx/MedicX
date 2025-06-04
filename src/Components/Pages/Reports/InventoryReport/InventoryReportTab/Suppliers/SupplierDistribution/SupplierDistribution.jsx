import SupplierDistributionPieChart from "@/Components/UI/Chart/Report/SupplierDistributionPieChart";
import React from "react";

const SupplierDistribution = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Supplier Distribution</p>
        <p className="text-gray-500 mt-3">Inventory distribution by supplier</p>
      </div>
      <div><SupplierDistributionPieChart /></div>
    </div>
  );
};

export default SupplierDistribution;
