import { Switch } from "antd";
import React from "react";

const SecondaryInsurance = () => {
  return (
    <div>
      <div className="pb-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-xl font-semibold tracking-tight mb-1">
            Secondary Insurance
          </h1>
          <div>
            <Switch />
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default SecondaryInsurance;
