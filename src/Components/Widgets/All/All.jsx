import React from "react";
import StatisticsCards from "./StatisticsCards/StatisticsCards";
import ProgressIndicators from "./ProgressIndicators/ProgressIndicators";
import Chart from "./Chart/Chart";

const All = () => {
  return (
    <div>
      <StatisticsCards />
      <ProgressIndicators />
      <Chart />
    </div>
  );
};

export default All;
