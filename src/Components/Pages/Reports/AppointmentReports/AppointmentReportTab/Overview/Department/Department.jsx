import AppointmentsByDepartment from "@/Components/UI/Chart/Report/AppointmentsByDepartment";
import React from "react";

const Department = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Appointments by Department</p>
        <p className="text-gray-500 mt-3">
          Distribution of appointments across different departments
        </p>
      </div>
      <div>
        <AppointmentsByDepartment />
      </div>
    </div>
  );
};

export default Department;
