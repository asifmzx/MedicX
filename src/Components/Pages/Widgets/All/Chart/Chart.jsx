import React from "react";
import PatientAdmissions from "./PatientAdmissions/PatientAdmissions";
import DepartmentDistribution from "./DepartmentDistribution/DepartmentDistribution";

const Chart = () => {
  return (
    <div className="pt-4">
      <p className="text-3xl font-semibold py-4">Charts</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="w-full col-span-1">
          <PatientAdmissions />
        </div>
        <div className="w-full col-span-1">
          <DepartmentDistribution />
        </div>
      </div>
    </div>
  );
};

export default Chart;
