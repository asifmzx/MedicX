import React from "react";

const AccountSettingsForm = () => {
  return (
    <div className=" pb-6 border-b border-gray-200">
      <div className="pb-4">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
          Account Settings
        </h1>
        <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
          Configure the doctor's account and system access.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <label htmlFor="" className="block mb-1 font-medium">
            Username
          </label>
          <input
            id=""
            type="text"
            placeholder="Enter username"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="" className="block mb-1 font-medium">
            Temporary Password
          </label>
          <input
            id=""
            type="password"
            placeholder="Enter Temporary Password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="" className="block mb-1 font-medium">
            Email Address
          </label>
          <input
            id=""
            type="email"
            placeholder="Enter Email Address"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <p className="text-xs text-gray-500">This will be used for login and notifications.</p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsForm;
