import Button from "@/Components/UI/Button/Button";
import { Switch } from "antd";
import React from "react";
import { systemData } from "./Systemdata";

const System = () => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-300">
      <div className="pb-4">
        <p className="text-3xl font-semibold">System Configuration</p>
        <p>Advanced system settings and maintenance options</p>
      </div>
      <div className="p-0 md:p-4 space-y-6">
        {/* System Maintenance */}
        <div className="space-y-3">
          <p className="text-xl font-semibold">System Maintenance</p>
          <div className="flex items-center gap-x-2">
            <Button
              variant="primary"
              text="Clear Cache"
              className="w-full border border-gray-300"
            />
            <Button
              variant="primary"
              text="Optimize Database"
              className="w-full border border-gray-300"
            />
          </div>
        </div>

        {/* Maintenance Mode */}
        <div className="space-y-3 pb-6 border-b border-gray-300">
          <p className="text-lg font-semibold">Maintenance Mode</p>
          <div className="flex gap-x-2 items-center">
            <Switch />
            <div>
              <p className="font-semibold">Enable maintenance mode</p>
              <p className="text-xs">
                This will make the system inaccessible to regular users
              </p>
            </div>
          </div>
        </div>

        {/* Backup & Restore */}
        <div className="space-y-3 pb-6 border-b border-gray-300">
          <p className="text-lg font-semibold">Backup & Restore</p>
          <div className="pb-3">
            <label className="block mb-1 font-medium">
              Minimum Password Length
            </label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="6 Characters">6 Characters</option>
              <option value="8 Characters">8 Characters</option>
              <option value="10 Characters">10 Characters</option>
              <option value="12 Characters">12 Characters</option>
            </select>
          </div>

          <div className="flex items-center gap-x-2">
            <Button
              variant="primary"
              text="Cache Manual Backup"
              className="w-full border border-gray-300"
            />
            <Button
              variant="primary"
              text="Restore from Backup"
              className="w-full border border-gray-300"
            />
          </div>
        </div>

        {/* System Information */}
        <div className="space-y-3">
          <p className="text-lg font-semibold">System Information</p>
          {systemData.map((data, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-base"
            >
              <p className="font-semibold">Version</p>
              <p className="text-right">v.{data.Version}</p>

              <p className="font-semibold">Last Updated</p>
              <p className="text-right">{data.lastUpdated}</p>

              <p className="font-semibold">Database Size</p>
              <p className="text-right">{data.size}</p>

              <p className="font-semibold">Storage Used</p>
              <p className="text-right">
                {data.usedStorage}/{data.totalStorage}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-end gap-x-2 pt-4">
          <Button
            variant="primary"
            text="Reset to Default"
            className="border border-gray-300"
          />
          <Button variant="secondary" text="Save System Settings" />
        </div>
      </div>
    </div>
  );
};

export default System;
