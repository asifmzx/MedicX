import React from "react";

const ProfessionalDetailsForm = () => {
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
          Professional Details
        </h1>
        <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
          Enter the doctor's professional information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <label
            htmlFor="primarySpecialization"
            className="block mb-1 font-medium"
          >
            Primary Specialization
          </label>
          <select
            id="primarySpecialization"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            defaultValue=""
          >
            <option value="" disabled>
              Select specialization
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
            htmlFor="secondarySpecialization"
            className="block mb-1 font-medium"
          >
            Secondary Specialization (Optional)
          </label>
          <select
            id="secondarySpecialization"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            defaultValue=""
          >
            <option value="" disabled>
              Select specialization
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
          <label htmlFor="licenseNumber" className="block mb-1 font-medium">
            Medical License Number
          </label>
          <input
            id="licenseNumber"
            type="number"
            placeholder="Enter License Number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="expiryDate" className="block mb-1 font-medium">
            License Expiry Date
          </label>
          <input
            id="expiryDate"
            type="date"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="qualifications" className="block mb-1 font-medium">
            Qualifications
          </label>
          <textarea
            id="qualifications"
            rows={3}
            placeholder="Enter qualifications (MD, PhD, etc)"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black resize-none"
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="" className="block mb-1 font-medium">
            Years of Experience
          </label>
          <input
            id=""
            type="number"
            placeholder="Enter Years of Experience"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetailsForm;
