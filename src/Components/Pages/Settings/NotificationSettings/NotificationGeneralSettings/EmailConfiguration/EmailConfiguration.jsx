import Button from "@/Components/UI/Button/Button";
import React from "react";
import { LuSend } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

const EmailConfiguration = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md space-y-6">
      <div className="space-y-1">
        <p className="flex items-center gap-2 text-2xl md:text-3xl font-semibold text-gray-800">
          <MdOutlineMailOutline />
          <span>Email Configuration</span>
        </p>
        <p className="text-sm text-gray-500">
          Configure email delivery settings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-semibold">
            Sender Name
          </label>
          <input
            type="text"
            defaultValue="MedixPro Clinic"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold">
            Sender Email
          </label>
          <input
            type="email"
            defaultValue="notifications@medixpro-clinic.com"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 text-sm font-semibold">
            Reply-To Email
          </label>
          <input
            type="email"
            defaultValue="support@medixpro-clinic.com"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 text-sm font-semibold">
            SMTP Provider
          </label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            defaultValue=""
          >
            <option value="SendGrid">SendGrid</option>
            <option value="MailChimp">MailChimp</option>
            <option value="Amazon SES">Amazon SES</option>
            <option value="Custom SMTP">Custom SMTP</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 text-sm font-semibold">API Key</label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <input
              type="password"
              defaultValue="1234567896541"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button
              variant="primary"
              text="Show"
              className="sm:w-auto w-full border border-gray-300 px-4 py-3"
            />
          </div>
        </div>

        <div className="md:col-span-1">
          <p className="text-md font-semibold py-4">Email Testing</p>
          <label className="block mb-1 text-sm font-semibold">
            Test Email Address
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button
              variant="secondary"
              text="Send Test Email"
              className="w-auto md:w-1/3  px-4 py-3"
              Icon={LuSend}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
        <Button
          variant="primary"
          text="Cancel"
          className="sm:w-auto w-full border border-gray-300"
        />
        <Button
          variant="secondary"
          text="Save Configuration"
          className="sm:w-auto w-full"
        />
      </div>
    </div>
  );
};

export default EmailConfiguration;
