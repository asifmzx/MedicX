import React from "react";
import TodaysSchedule from "./TodaysSchedule/TodaysSchedule";
import UpcommingAppointments from "./UpcommingAppointments/UpcommingAppointments";

const Schedule = () => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 ">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <TodaysSchedule />
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <UpcommingAppointments />
        </div>
      </div>
    </>
  );
};

export default Schedule;
