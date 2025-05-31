import { Switch } from "antd";
import React from "react";

const AppointmentSlots = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-full">
      <div>
        <p className="text-3xl font-semibold">Appointment Slots</p>
        <p className="text-gray-500 text-sm mt-2">
          Configure default appointment duration and scheduling rules
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-b border-gray-200 pb-4">
        <div className="col-span-1">
          <label htmlFor="" className="block mb-1 text-sm font-semibold">
            Default Appointment Duration
          </label>
          <select
            id=""
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            defaultValue="30 min"
          >
            <option value="30 min">30 min</option>
            <option value="45 min">45 min</option>
            <option value="60 min">60 min</option>
            <option value="90 min">90 min</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="" className="block mb-1 text-sm font-semibold">
            Buffer Time Between Appointments
          </label>
          <select
            id=""
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            defaultValue="5 min"
          >
            <option value="5 min">5 min</option>
            <option value="10 min">10 min</option>
            <option value="15 min">15 min</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="" className="block mb-1 text-sm font-semibold">
            Maximum Advance Booking
          </label>
          <select
            id=""
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            defaultValue="60 days"
          >
            <option value="30 days">30 days</option>
            <option value="60 days">60 days</option>
            <option value="90 days">90 days</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Switch />
            <p className="font-bold text-sm">Allow same-day appointments</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Switch />
            <p className="font-bold text-sm">Allow concurrent appointments</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Switch />
            <p className="font-bold text-sm">Allow concurrent appointments</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Switch />
            <p className="font-bold text-sm">Allow concurrent appointments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSlots;
