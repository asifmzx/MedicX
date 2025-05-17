import React from "react";
import AnalyticsCard from "./Card/AnalyticsCard";
import AnalyticsProgress from "./AnalyticsProgress/AnalyticsProgress";
import StaffPerformance from "./StaffPerformance/StaffPerformance";

const Analytics = () => {
  return (
    <div className=" rounded-lg">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Detailed Analytics</h1>
        <p className="text-gray-600">
          Insights and trends from your clinic data
        </p>
      </div>

      {/* Cards */}
      <AnalyticsCard />

      {/* Responsive Grid */}
      <div className="pt-4 mt-2 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <AnalyticsProgress />
        </div>
        <div className="md:col-span-1">
          <StaffPerformance />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
