import React from "react";

const LifeStyleInfoForm = () => {
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
          Lifestyle Information
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <div>
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Smoking Status
            </label>
            <select
              id=""
              className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="" disabled selected>
                Select Status
              </option>
              <option value="Occasional">Occasional</option>
              <option value="Former Smoked">Former Smoked</option>
              <option value="Current Smoker">Current Smoker</option>
            </select>
          </div>
        </div>
        <div>
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Alcohol Consumption
            </label>
            <select
              id=""
              className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="" disabled selected>
                Select Consumption
              </option>
              <option value="Occasional">Occasional</option>
              <option value="Moderate">Moderate</option>
              <option value="Heavy">Heavy</option>
            </select>
          </div>
        </div>
        <div>
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Exercise Frequency
            </label>
            <select
              id=""
              className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="" disabled selected>
                Select Frequency
              </option>
              <option value="Occasional">Occasional</option>
              <option value="Regular">Regular</option>
              <option value="Daily">Daily</option>
            </select>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <label htmlFor="" className="block mb-1 font-medium">
            Dietary Habits
          </label>
          <textarea
            rows={3}
            placeholder="Describe dietary habits"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default LifeStyleInfoForm;
