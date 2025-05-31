import React from "react";
import NotificationPreferences from "./NotificationPreferences/NotificationPreferences";
import EmailConfiguration from "./EmailConfiguration/EmailConfiguration";
import SMSConfiguration from "./SMSConfiguration/SMSConfiguration";

const NotificationGeneralSettings = () => {
  return (
    <div className="space-y-4">
      <NotificationPreferences />
      <EmailConfiguration />
      <SMSConfiguration />
    </div>
  );
};

export default NotificationGeneralSettings;
