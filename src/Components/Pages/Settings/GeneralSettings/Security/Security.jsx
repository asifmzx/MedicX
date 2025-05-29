import Login from "@/Components/Register/Login/Login";
import Button from "@/Components/UI/Button/Button";
import { Switch } from "antd";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import LoginSecurity from "./LoginSecurity/LoginSecurity";
import PasswordPolicy from "./PasswordPolicy/PasswordPolicy";
import DataProtection from "./DataProtection/DataProtection";

const Security = () => {
  return (
    <div className="space-y-8 ">
      {/* Clinic Info */}
      <div className="bg-white p-4  rounded-lg space-y-8">
        <div className="space-y-2">
          <p className="text-2xl font-semibold flex items-center gap-x-2">
            <HiOutlineBuildingOffice />
            Security Settings
          </p>
          <p className="text-sm text-gray-600">
            Configure security and privacy settings for your clinic
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <PasswordPolicy />
          </div>
          <div>
            <LoginSecurity />
          </div>
          <div>
            <DataProtection />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-2 sm:space-y-0">
          <Button
            variant="primary"
            text="Reset to Defaults"
            className="border border-gray-300"
          />
          <Button variant="secondary" text="Save Security Settings" />
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-white p-4 sm:p-6 rounded-lg space-y-8">
        <div className="space-y-2">
          <p className="text-2xl font-semibold">API Access</p>
          <p className="text-sm text-gray-600">
            Manage API keys and external integrations
          </p>
        </div>
        <div className="flex items-center font-semibold gap-x-2">
          <Switch />
          <p>Enable API access</p>
        </div>
        <div className="grid grid-cols-1 items-center ">
          <div className="">
            <label htmlFor="" className="block mb-1 font-medium">
              API Key
            </label>
            <div className="flex items-center gap-x-2">
              <input
                type="password"
                defaultValue="sbdjhfgjhsdgfdsvghs"
                className="w-full border border-gray-300 rounded px-3 py-2 h-[42px] focus:outline-none focus:ring focus:ring-black"
              />
              <div className="flex items-center gap-x-2">
                <Button
                  variant="primary"
                  text="Show"
                  className="h-[42px] px-4 py-2 border border-gray-300"
                />
                <Button
                  variant="secondary"
                  text="Regenerate"
                  className="h-[42px] px-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-4">
          <p className="text-xl font-semibold">API Rate Limits</p>
          <div className="col-span-1 py-3">
            <label htmlFor="" className="block mb-1 font-medium">
              Requests per Minute
            </label>
            <select
              id=""
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="60 requests">60 requests</option>
              <option value="100 Requests per Minute">
                100 Requests per Minute
              </option>
              <option value="200 Requests per Minute">
                200 Requests per Minute
              </option>
            </select>
          </div>

          <div className="md:col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Allowed Origins
            </label>
            <textarea
              id=""
              rows={3}
              defaultValue="https://medixpro-clinic.com https://api.medixpro-clinic.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black resize-none"
            ></textarea>
            <p className="text-xs text-gray-500">Enter one domain per line</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-2 sm:space-y-0">
          <Button
            variant="primary"
            text="Cancel"
            className="border border-gray-300"
          />
          <Button variant="secondary" text="Save Changes" />
        </div>
      </div>
    </div>
  );
};

export default Security;
