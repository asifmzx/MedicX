import React from "react";
import InventoryCategory from "./InventoryCategory/InventoryCategory";
import StockStatus from "./StockStatus/StockStatus";
import LowStock from "./LowStock/LowStock";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1 ">
        <InventoryCategory />
      </div>
      <div className="col-span-1">
        <StockStatus />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <LowStock />
      </div>
    </div>
  );
};

export default Overview;
