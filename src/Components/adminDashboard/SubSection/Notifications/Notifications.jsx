import React from "react";
import Unread from "./Unread/Unread";
import Today from "./Today/Today";
import Earlier from "./Earlier/Earlier";
import NotificationSettings from "./NotificationSettings/NotificationSettings";

const Notifications = () => {
  return (
    <div className="rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
          <p className="text-gray-600">
            Stay updated with important alerts and messages
          </p>
        </div>
      </div>

      {/* Responsive layout for the 3 sections */}
      <div className="flex flex-col lg:flex-row gap-4">
        <Unread />
        <Today />
        <Earlier />
      </div>
      <div className="pt-5">
        <NotificationSettings />
      </div>
    </div>
  );
};

export default Notifications;
