import React from "react";
import NotificationCard from "./NotificationCard";
import NotificationTab from "./NotificationTab/NotificationTab";

const NotificationSettings = () => {
  return (
    <div className="space-y-4">
      <div>
        <NotificationCard />
      </div>
      <div>
        <NotificationTab />
      </div>
    </div>
  );
};

export default NotificationSettings;
