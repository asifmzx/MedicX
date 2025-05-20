import React from "react";
import Calender from "./Calender/Calender";
import Schedule from "./Schedule/Schedule";

const DoctorSchedule = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        <div className="bg-gray-100 md:col-span-1">
          <Calender className="w-full h-full" />
        </div>
        <div className="bg-gray-200 md:col-span-3">
          <Schedule className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default DoctorSchedule;
