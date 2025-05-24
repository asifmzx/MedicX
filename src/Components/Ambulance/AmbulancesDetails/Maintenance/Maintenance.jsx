import React from "react";
import MaintenanceHistory from "./MaintenanceHistory/MaintenanceHistory";
import UpComingMaintenance from "./UpComingMaintenance/UpComingMaintenance";

const Maintenance = () => {
  return (
    <div>
      <MaintenanceHistory />
      <UpComingMaintenance />
    </div>
  );
};

export default Maintenance;
