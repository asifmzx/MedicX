import Button from "@/Components/UI/Button/Button";
import { Switch } from "antd";
import React from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { RiSave3Line } from "react-icons/ri";

const email = [
  {
    name: "Appointment Reminders",
    description: "Send email reminders for upcoming appointments",
    switch: <Switch />,
  },
  {
    name: "Prescription Notifications",
    description: "Send emails when prescriptions are ready",
    switch: <Switch />,
  },
  {
    name: "Lab Results",
    description: "Send emails when lab results are available",
    switch: <Switch />,
  },
  {
    name: "Billing & Payments",
    description: "Send emails for invoices and payment receipts",
    switch: <Switch />,
  },
  {
    name: "Newsletter & Updates",
    description: "Send periodic newsletters and clinic updates",
    switch: <Switch />,
  },
];

const sms = [
  {
    name: "Appointment Reminders",
    description: "Send SMS reminders for upcoming appointments",
    switch: <Switch />,
  },
  {
    name: "Prescription Notifications",
    description: "Send SMS when prescriptions are ready",
    switch: <Switch />,
  },
  {
    name: "Lab Results",
    description: "Send SMS for payment due dates",
    switch: <Switch />,
  },
];

const app = [
  {
    name: "Appointment Updates",
    description: "Show notifications for appointment changes",
    switch: <Switch />,
  },
  {
    name: "New Messages",
    description: "Show notifications for new messages",
    switch: <Switch />,
  },
  {
    name: "System Alerts",
    description: "Show notifications for system updates and maintenance",
    switch: <Switch />,
  },
];

const NotificationPreferences = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="space-y-2">
        <p className="flex items-center gap-2 text-3xl font-semibold text-gray-800">
          <MdOutlineNotifications />
          <span>Notification Preferences</span>
        </p>
        <p className="text-sm text-gray-500">
          Configure when and how notifications are sent
        </p>
      </div>
      <div className="border-b border-gray-200">
        <p className="text-xl font-semibold ">Email Notifications</p>
        {email.map((item, index) => (
          <div
            key={index}
            className="py-2 mt-4 rounded mb-2 flex justify-between items-center "
          >
            <div className="">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <div>{item.switch}</div>
          </div>
        ))}
      </div>
      <div className="border-b border-gray-200">
        <p className="text-xl font-semibold ">SMS Notifications</p>
        {sms.map((item, index) => (
          <div
            key={index}
            className="py-2 mt-4 rounded mb-2 flex justify-between items-center "
          >
            <div className="">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <div>{item.switch}</div>
          </div>
        ))}
      </div>
      <div className="border-b border-gray-200">
        <p className="text-xl font-semibold ">App Notifications</p>
        {app.map((item, index) => (
          <div
            key={index}
            className="py-2 mt-4 rounded mb-2 flex justify-between items-center "
          >
            <div className="">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <div>{item.switch}</div>
          </div>
        ))}
      </div>
      <div>
        <p className="text-xl font-semibold pb-4">Notification Timing</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 text-sm font-semibold">
              Appointment Reminder Time
            </label>
            <select
              id=""
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="1 Hour Before">1 Hour Before</option>
              <option value="2 Hour Before">2 Hour Before</option>
              <option value="3 Hour Before">3 Hour Before</option>
              <option value="12 Hour Before">12 Hour Before</option>
              <option value="24 Hour Before">24 Hour Before</option>
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 text-sm font-semibold">
              Quiet Hours
            </label>
            <div className="flex flex-col items-center sm:flex-row gap-2">
              <select
                id=""
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
                defaultValue=""
              >
                <option value="12 am">12 am</option>
                <option value="1 pm">1 pm</option>
                <option value="3 pm">3 pm</option>
                <option value="4 pm">4 pm</option>
                <option value="6 pm">6 pm</option>
              </select>
              <p>to</p>
              <select
                id=""
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
                defaultValue=""
              >
                <option value="12 am">12 am</option>
                <option value="1 pm">1 pm</option>
                <option value="3 pm">3 pm</option>
                <option value="4 pm">4 pm</option>
                <option value="6 pm">6 pm</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          variant="primary"
          text="Reset to Defaults"
          className="border border-gray-300"
        />
        <Button
          variant="secondary"
          text="Save Preferences"
          Icon={RiSave3Line}
        />
      </div>
    </div>
  );
};

export default NotificationPreferences;
