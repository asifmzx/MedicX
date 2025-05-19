import React from "react";

const DepartmentAndPositionForm = () => {
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-xl md:text-xl font-semibold tracking-tight mb-1">
          Department & Position
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <label
            htmlFor="primarySpecialization"
            className="block mb-1 font-medium"
          >
            Department
          </label>
          <select
            id="primarySpecialization"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            defaultValue=""
          >
            <option value="" disabled>
              Select department
            </option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="Oncology">Oncology</option>
            <option value="Gynecology">Gynecology</option>
          </select>
        </div>
        <div className="md:col-span-1">
          <label
            htmlFor="primarySpecialization"
            className="block mb-1 font-medium"
          >
            Position
          </label>
          <select
            id="primarySpecialization"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            defaultValue=""
          >
            <option value="" disabled>
              Select position
            </option>
            <option value="seniorDoctor">Senior Doctor</option>
            <option value="juniorDoctor">Junior Doctor</option>
            <option value="Specialist">Specialist</option>
            <option value="Resident">Resident</option>
            <option value="Intern">Intern</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DepartmentAndPositionForm;
