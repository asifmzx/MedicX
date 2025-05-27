import React from "react";

const MedicalInfoForm = () => {
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
          Medical Information
        </h1>
        <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
          Enter the patient's medical history and details.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <div>
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Blood Type
            </label>
            <select
              id="gender"
              className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring focus:ring-black"
            >
              <option value="" disabled selected>
                Select Blood Type
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
        </div>
        <div>
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Height (cm)
            </label>
            <input
              type="number"
              placeholder="Enter height"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
        </div>
        <div>
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Weight (kg)
            </label>
            <input
              type="number"
              placeholder="Enter weight"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <label htmlFor="" className="block mb-1 font-medium">
            Allergies
          </label>
          <textarea
            rows={3}
            placeholder="list any Allergies(medicine,food,etc)"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black resize-none"
          ></textarea>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <label htmlFor="" className="block mb-1 font-medium">
            Allergies
          </label>
          <textarea
            rows={3}
            placeholder="list any current medicine"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black resize-none"
          ></textarea>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <label htmlFor="" className="block mb-1 font-medium">
            Chronic Conditions
          </label>
          <textarea
            rows={3}
            placeholder="list any Chronic Conditions"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black resize-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default MedicalInfoForm;
