import Button from "@/Components/UI/Button/Button";
import { Switch } from "antd";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { GoCalendar } from "react-icons/go";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Preferences = () => {
  return (
    <div className="space-y-8 ">
      {/* Clinic Info */}
      <div className="bg-white p-4  rounded-lg space-y-8">
        <div className="space-y-2">
          <p className="text-2xl font-semibold flex items-center gap-x-2">
            <FaRegClock />
            Regional Settings
          </p>
          <p className="text-sm text-gray-600">
            Configure your clinic settings and preferences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label htmlFor="timezone" className="block mb-1 font-medium">
              Timezone
            </label>
            <select
              id="timezone"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="" disabled>
                Select a timezone
              </option>
              <option value="America/New_York">
                America/New_York (UTC-05:00)
              </option>
              <option value="America/Chicago">
                America/Chicago (UTC-06:00)
              </option>
              <option value="America/Denver">America/Denver (UTC-07:00)</option>
              <option value="America/Los_Angeles">
                America/Los_Angeles (UTC-08:00)
              </option>
              <option value="Europe/London">Europe/London (UTC+00:00)</option>
              <option value="Europe/Paris">Europe/Paris (UTC+01:00)</option>
              <option value="Asia/Dubai">Asia/Dubai (UTC+04:00)</option>
              <option value="Asia/Kolkata">Asia/Kolkata (UTC+05:30)</option>
              <option value="Asia/Tokyo">Asia/Tokyo (UTC+09:00)</option>
              <option value="Australia/Sydney">
                Australia/Sydney (UTC+10:00)
              </option>
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="dateFormat" className="block mb-1 font-medium">
              Date Format
            </label>
            <select
              id="dateFormat"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="time-format" className="block mb-1 font-medium">
              Time Format
            </label>
            <select
              id="dateFormat"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="12-Hours">12-Hours</option>
              <option value="24-Hours">24-Hours</option>
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="time-format" className="block mb-1 font-medium">
              First Day of Week
            </label>
            <select
              id="dateFormat"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="time-format" className="block mb-1 font-medium">
              Language
            </label>
            <select
              id="dateFormat"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>

          <div className="md:col-span-2 pt-4 text-lg font-semibold border-t border-gray-300">
            <p>Calendar Settings</p>
          </div>
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Default Calendar View
            </label>
            <select
              id="dateFormat"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="Week">Week</option>
              <option value="Day">Day</option>
              <option value="Month">Month</option>
            </select>
          </div>
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Default Appointment Duration
            </label>
            <select
              id="dateFormat"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="15 Minutes">15 Minutes</option>
              <option value="30 Minutes">30 Minutes</option>
              <option value="45 Minutes">45 Minutes</option>
              <option value="60 Minutes">60 Minutes</option>
            </select>
          </div>
          <div className="flex items-center gap-x-2">
            <Switch />
            <p>Show weekends in calendar</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-2 sm:space-y-0">
          <Button
            variant="primary"
            text="Reset to Defaults"
            className="border border-gray-300"
          />
          <Button variant="secondary" text="Save Preferences" />
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-white p-4 sm:p-6 rounded-lg space-y-8">
        <div className="space-y-2">
          <p className="text-2xl font-semibold flex items-center gap-x-2">
            <GoCalendar />
            Appointment Settings
          </p>
          <p className="text-sm text-gray-600">
            Configure your clinic settings and preferences
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center font-semibold gap-x-2">
            <Switch />
            <p>Allow online appointment booking</p>
          </div>
          <div className="flex items-center font-semibold gap-x-2">
            <Switch />
            <p>Require approval for online bookings</p>
          </div>
          <div className="flex items-center font-semibold gap-x-2">
            <Switch />
            <p>Send appointment remindersr</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Reminder Time
            </label>
            <select
              id="dateFormat"
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
            <label htmlFor="" className="block mb-1 font-medium">
              Buffer Time Between Appointments
            </label>
            <select
              id="dateFormat"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="No Buffer">No Buffer</option>
              <option value="5 Minutes">5 Minutes</option>
              <option value="10 Minutes">10 Minutes</option>
              <option value="15 Minutes">15 Minutes</option>
              <option value="20 Minutes">20 Minutes</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-2 sm:space-y-0">
          <Button
            variant="primary"
            text="Cancel"
            className="border border-gray-300"
          />
          <Button variant="secondary" text="Save Settings" />
        </div>
      </div>
    </div>
  );
};

export default Preferences;
