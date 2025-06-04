import React from "react";

import StockLevelbyCategory from "./StockLevelByCategory/StockLevelByCategory";
import ReorderFrequency from "./ReorderFrequency/ReorderFrequency";
import StokeLevelTrends from "./StokeLevelTrends/StokeLevelTrends";

const StockLevels = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1 ">
        <StokeLevelTrends />
      </div>
      <div className="col-span-1">
        <ReorderFrequency />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <StockLevelbyCategory />
      </div>
    </div>
  );
};

export default StockLevels;
