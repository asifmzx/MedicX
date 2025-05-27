import React from "react";
import OverviewContent from "./OverviewContent/OverviewContent";
import RecentAppointment from "./RecentAppointment/RecentAppointment";

const Overview = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="w-full md:w-[55%]">
        <OverviewContent />
      </div>
      <div className="w-full md:w-[45%]">
        <RecentAppointment />
      </div>
    </div>
  );
};

export default Overview;
