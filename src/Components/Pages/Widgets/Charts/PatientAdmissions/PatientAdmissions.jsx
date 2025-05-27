import PatientAdmissionLineChart from "@/Components/UI/Chart/Widgets/PatientAdmissionLineChart";
import React from "react";

const PatientAdmissions = () => {
  return (
    <div className="bg-white p-8 rounded-xl">
      <div className="space-y-2 pb-8">
        <p className="text-3xl font-semibold ">Patient Admissions</p>
        <p className="text-lg text-gray-500">
          Monthly trend for the current year
        </p>
      </div>
      <div>
        <PatientAdmissionLineChart />
      </div>
    </div>
  );
};

export default PatientAdmissions;
