import { Switch } from "antd";
import React from "react";

const PasswordPolicy = () => {
  return (
    <div>
      <p className="text-xl font-semibold py-3">Password Policy</p>
      <div className="col-span-2 py-3">
        <label htmlFor="" className="block mb-1 font-medium">
          Password Expiry
        </label>
        <select
          id=""
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          defaultValue=""
        >
          <option value="30 Days">30 Days</option>
          <option value="60 Days">60 Days</option>
          <option value="90 Days">90 Days</option>
          <option value="180 Days">180 Days</option>
          <option value="Never">Never</option>
        </select>
      </div>
      <div className="col-span-2 pb-3">
        <label htmlFor="" className="block mb-1 font-medium">
          Minimum Password Length
        </label>
        <select
          id=""
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          defaultValue=""
        >
          <option value="6 Characters">6 Characters</option>
          <option value="8 Characters">8 Characters</option>
          <option value="10 Characters">10 Characters</option>
          <option value="12 Characters">12 Characters</option>
        </select>
      </div>
      <div className="space-y-4 col-span-2 border-b border-gray-300 pb-5">
        <div className="flex items-center font-semibold gap-x-2">
          <Switch />
          <p>Require uppercase letters</p>
        </div>
        <div className="flex items-center font-semibold gap-x-2">
          <Switch />
          <p>Require numbers</p>
        </div>
        <div className="flex items-center font-semibold gap-x-2">
          <Switch />
          <p>Require special characters</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordPolicy;
