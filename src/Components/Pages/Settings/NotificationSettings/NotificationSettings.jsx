import React from "react";
import NotificationCard from "./NotificationCard";
import NotificationTab from "./NotificationTab/NotificationTab";

const NotificationSettings = () => {
  return (
    <div>
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
