import { Switch } from "antd";
import React from "react";

const DataProtection = () => {
  return (
    <div>
      <div>
        <div className="space-y-3">
          <p className="text-lg font-semibold">Data Protection</p>
          <div className="flex items-center font-semibold gap-x-2">
            <Switch />
            <p>Enforce two-factor authentication</p>
          </div>
          <div className="flex items-center font-semibold gap-x-2">
            <Switch />
            <p>Enforce two-factor authentication</p>
          </div>
        </div>
        <div className="col-span-2 py-3">
          <label htmlFor="" className="block mb-1 font-medium">
            Session Timeout
          </label>
          <select
            id=""
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            defaultValue=""
          >
            <option value="15 minutes">15 minutes</option>
            <option value="30 minutes">30 minutes</option>
            <option value="1 hours">1 hours</option>
            <option value="2 hours">2 hours</option>
            <option value="3 hours">3 hours</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DataProtection;
