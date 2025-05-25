"use client";
import React from "react";
import { Calendar, theme } from "antd";
import dayjs from "dayjs";
import Button from "@/Components/UI/Button/Button";
import { GoPlus } from "react-icons/go";

const onPanelChange = (value, mode) => {
  console.log(value.format("DD-MM-YYYY"));
};

const Calender = () => {
  const { token } = theme.useToken();

  const calendarWrapperStyle = {
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    padding: 8,
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl shadow max-w-full">
      <div className="pb-6">
        <h1 className="text-lg md:text-2xl font-semibold tracking-tight mb-1">
          Calendar
        </h1>
        <p className="text-xs text-gray-600 max-w-xs md:max-w-none">
          Select a date to view schedules.
        </p>
      </div>
      <div style={calendarWrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
      <div className="py-4">
        <label
          htmlFor="maritalStatus"
          className="block mb-1 text-sm font-medium"
        >
          Filter by Doctor
        </label>
        <select
          id="maritalStatus"
          className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring focus:ring-black"
        >
          <option value="" disabled selected>
            All Doctors
          </option>
          <option value="Dr. Sara">Dr. Sara</option>
          <option value="Dr. Richard">Dr. Richard</option>
          <option value="Dr. Richard">Dr. Richard</option>
          <option value="Dr. Richard">Widowed</option>
          <option value="Dr. Sara">Dr. Sara</option>
        </select>
      </div>
      <div>
        <Button variant="secondary" text="Add Appointment" Icon={GoPlus} className="w-full h-10" />
      </div>
    </div>
  );
};

export default Calender;
