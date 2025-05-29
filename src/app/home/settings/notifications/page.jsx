import NotificationSettings from "@/Components/Pages/Settings/NotificationSettings/NotificationSettings";
import BackButton from "@/Components/UI/Button/BackButton";
import React from "react";

const Page = () => {
  return (
    <div className="p-4 ">
      <div className="flex items-center gap-x-4">
        <div>
          <BackButton />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
            Notification Settings
          </h1>
          <p className="text-gray-600">
            Configure email, SMS, and in-app notifications
          </p>
        </div>
      </div>
      <div className="p-5">
        <NotificationSettings />
      </div>
    </div>
  );
};

export default Page;
