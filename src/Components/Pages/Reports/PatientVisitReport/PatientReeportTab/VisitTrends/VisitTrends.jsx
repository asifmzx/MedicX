import React from "react";
import MonthlyVisit from "./MonthlyVisit";
import VisitDistribution from "./VisitDistribution";
import VisitFrequency from "./VisitFrequency";

const VisitTrends = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1 ">
        <MonthlyVisit />
      </div>
      <div className="col-span-1">
        <VisitDistribution />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <VisitFrequency />
      </div>
    </div>
  );
};

export default VisitTrends;
