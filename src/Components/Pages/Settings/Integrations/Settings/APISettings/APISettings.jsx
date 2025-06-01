import Button from "@/Components/UI/Button/Button";
import React from "react";

const APISettings = () => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md">
      <div>
        <p className="text-4xl font-semibold">API Settings</p>
        <p className="text-gray-500 mt-3">
          Manage your API keys and webhook endpoints
        </p>
      </div>
      <div className="mt-5">
        <p className="text-xl font-semibold mb-3">API Keys</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2">
            <label htmlFor="" className="block mb-1 font-medium">
              Production API Key
            </label>
            <div className="flex items-center gap-x-2">
              <input
                id="e"
                type="password"
                defaultValue="password"
                className="w-full border border-gray-300 rounded px-3 py-2 h-10 focus:outline-none focus:ring focus:ring-black"
              />
              <Button
                variant="primary"
                text="Copy"
                className="h-10 px-4 border border-gray-300"
              />
              <Button
                variant="primary"
                text="Regenerate"
                className="h-10 px-4 border border-gray-300"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label htmlFor="" className="block mb-1 font-medium">
              Test API Key
            </label>
            <div className="flex items-center gap-x-2">
              <input
                id="e"
                type="password"
                defaultValue="password"
                className="w-full border border-gray-300 rounded px-3 py-2 h-10 focus:outline-none focus:ring focus:ring-black"
              />
              <Button
                variant="primary"
                text="Copy"
                className="h-10 px-4 border border-gray-300"
              />
              <Button
                variant="primary"
                text="Regenerate"
                className="h-10 px-4 border border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-xl font-semibold mb-3">Webhook Endpoints</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="col-span-2">
            <label htmlFor="" className="block mb-1 font-medium">
              Webhook URL
            </label>
            <div className="flex items-center gap-x-2">
              <input
                id="e"
                type="text"
                placeholder="https://example.com/webhook"
                className="w-full border border-gray-300 rounded px-3 py-2 h-10 focus:outline-none focus:ring focus:ring-black"
              />

              <Button
                variant="primary"
                text="Verify"
                className="h-10 px-4 border border-gray-300"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label htmlFor="" className="block mb-1 font-medium">
              Webhook Secret
            </label>
            <div className="flex items-center gap-x-2">
              <input
                id="e"
                type="password"
                defaultValue="password"
                className="w-full border border-gray-300 rounded px-3 py-2 h-10 focus:outline-none focus:ring focus:ring-black"
              />
              <Button
                variant="primary"
                text="Copy"
                className="h-10 px-4 border border-gray-300"
              />
              <Button
                variant="primary"
                text="Regenerate"
                className="h-10 px-4 border border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <Button
          variant="primary"
          text="Reset to default"
          className="h-10 px-4 border border-gray-300"
        />
        <Button
          variant="secondary"
          text="Save Changes"
          className="h-10 px-4 "
        />
      </div>
    </div>
  );
};

export default APISettings;
