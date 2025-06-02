import React from "react";
import AppointmentsByDoctor from "./AppointmentsByDoctor/AppointmentsByDoctor";
import DoctorPerformance from "./DoctorPerformance/DoctorPerformance";

const ByDoctor = () => {
  return (
    <div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="col-span-1 sm:col-span-2">
          <AppointmentsByDoctor />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <DoctorPerformance />
        </div>
      </div>
    </div>
  );
};

export default ByDoctor;
