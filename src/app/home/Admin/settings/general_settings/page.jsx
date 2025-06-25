import GeneralSettings from "@/Components/Pages/Settings/GeneralSettings/GeneralSettings";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <div>
        <p className="text-3xl font-semibold">General Settings</p>
        <p className="text-gray-500">
          Configure your clinic settings and preferences
        </p>
      </div>
      <div className="pt-4">
        <GeneralSettings />
      </div>
    </div>
  );
};

export default Page;
