import React from "react";
import TodaysPatients from "./TodaysPatients/TodaysPatients";
import RecentPatientNotes from "./RecentPatientNotes/RecentPatientNotes";

const Patients = () => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 ">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <TodaysPatients />
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <RecentPatientNotes />
        </div>
      </div>
    </>
  );
};

export default Patients;
