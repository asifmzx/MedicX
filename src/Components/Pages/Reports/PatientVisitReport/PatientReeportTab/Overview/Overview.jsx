import React from "react";
import VisitTypes from "./VisitTypes";
import VisitOutcomes from "./VisitOutcomes";
import RecentPatientVisits from "./RecentPatientVisits";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1 ">
        <VisitTypes />
      </div>
      <div className="col-span-1">
        <VisitOutcomes />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <RecentPatientVisits />
      </div>
    </div>
  );
};

export default Overview;
