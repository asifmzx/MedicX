import React from "react";

const PrimaryInsurance = () => {
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-xl md:text-xl font-semibold tracking-tight mb-1 ">
          Personal Information
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
        <div className="col-span-1">
          <label htmlFor="" className="block mb-1 font-medium">
            Insurance Provider
          </label>
          <input
            id=""
            type="text"
            placeholder="Enter Insurance Provider"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="" className="block mb-1 font-medium">
            Policy Number
          </label>
          <input
            id=""
            type="number"
            placeholder="Enter Policy Number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="" className="block mb-1 font-medium">
            Group Number
          </label>
          <input
            id=""
            type="number"
            placeholder="Enter Group Number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="" className="block mb-1 font-medium">
            Policy Holder Name
          </label>
          <input
            id=""
            type="text"
            placeholder="Enter Policy Holder Name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="" className="block mb-1 font-medium">
            Relationship to Patient
          </label>
          <select
            id=""
            className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="" disabled selected>
              Select Relationship
            </option>
            <option value="Self">Self</option>
            <option value="Spouse">Spouse</option>
            <option value="Parent">Parent</option>
            <option value="Child">Child</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="" className="block mb-1 font-medium">
            Insurance Phone Number
          </label>
          <input
            id=""
            type="number"
            placeholder="Enter Insurance Phone Number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryInsurance;
