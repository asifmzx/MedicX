import React from "react";
import GeographicDistribution from "./GeographicDistribution";
import GenderDistribution from "./GenderDistribution";
import AgeDistribution from "./AgeDistribution";

const Demographics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1 ">
        <AgeDistribution />
      </div>
      <div className="col-span-1">
        <GenderDistribution />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <GeographicDistribution />
      </div>
    </div>
  );
};

export default Demographics;
