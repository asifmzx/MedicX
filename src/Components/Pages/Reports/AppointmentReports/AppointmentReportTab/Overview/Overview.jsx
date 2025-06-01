import React from "react";
import Distribution from "./Distribution/Distribution";
import Department from "./Department/Department";
import RecentAppointments from "./RecentAppointments/RecentAppointments";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1">
        <Distribution />
      </div>
      <div className="col-span-1">
        <Department />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <RecentAppointments />
      </div>
    </div>
  );
};

export default Overview;
