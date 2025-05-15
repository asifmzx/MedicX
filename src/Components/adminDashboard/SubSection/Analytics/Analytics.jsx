import React from "react";
import AnalyticsCard from "./Card/AnalyticsCard";

import AnalyticsProgress from "./AnalyticsProgress/AnalyticsProgress";

const Analytics = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Detailed Analytics</h1>
        <p className="text-gray-600">
          Insights and trends from your clinic data
        </p>
      </div>
      <AnalyticsCard />
      <div className="py-4">
        <AnalyticsProgress />
      </div>
    </div>
  );
};

export default Analytics;
