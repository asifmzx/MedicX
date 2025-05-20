import React from "react";

const PrescriptionDetails = () => {
  return (
    <div className="w-full border-b border-gray-300 pb-3">
      <div className="pb-5">
        <h1 className="text-xl md:text-xl font-semibold tracking-tight mb-1">
          Prescription Details
        </h1>
        <p className="text-gray-600">
          Enter the details for the new prescription.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <label htmlFor="prescription-date" className="block mb-1 font-medium">
            Prescription Date
          </label>
          <input
            id="prescription-date"
            type="date"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="prescription-type" className="block mb-1 font-medium">
            Prescription Type
          </label>
          <select
            id="prescription-type"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            defaultValue=""
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="Standard">Standard</option>
            <option value="Diabetes Type-2">Diabetes Type-2</option>
            <option value="Antibiotic-Respiratory">
              Antibiotic-Respiratory
            </option>
          </select>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="diagnosis" className="block mb-1 font-medium">
            Diagnosis or Reason for Prescription
          </label>
          <textarea
            id="diagnosis"
            rows={3}
            placeholder="Enter Diagnosis or Reason for prescription"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black resize-none"
          ></textarea>
        </div>

        <div className="col-span-1 md:col-span-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
            <p className="font-medium">Use Medication Template</p>
            <div className="w-full sm:w-64">
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
                defaultValue=""
              >
                <option value="" disabled>
                  Select template (optional)
                </option>
                <option value="Hypertension Standard">
                  Hypertension Standard
                </option>
                <option value="Diabetes Type-2">Diabetes Type-2</option>
                <option value="Electronic Only">Electronic Only</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionDetails;
