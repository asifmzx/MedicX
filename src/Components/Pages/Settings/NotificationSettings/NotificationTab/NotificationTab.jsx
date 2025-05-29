"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import EmailTemplates from "../EmailTemplates/EmailTemplates";
import SmsTemplates from "../SmsTemplates/SmsTemplates";
import ScheduledNotifications from "../ScheduledNotifications/ScheduledNotifications";
import NotificationGeneralSettings from "../NotificationGeneralSettings/NotificationGeneralSettings";

const NotificationTab = () => {
  const [activeTab, setActiveTab] = useState("GeneralSettings");

  const tabs = [
    { key: "GeneralSettings", label: "General Settings" },
    { key: "EmailTemplates", label: "Email Templates" },
    { key: "SmsTemplates", label: "Sms Templates" },
    { key: "ScheduledNotifications", label: "Schedule dNotifications" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "EmailTamplates":
        return <EmailTemplates />;
      case "SmsTemplates":
        return <SmsTemplates />;
      case "ScheduledNotifications":
        return <ScheduledNotifications />;
      default:
        return <NotificationGeneralSettings />;
    }
  };

  return (
    <div>
      <div className="flex space-x-2">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            variant="primary"
            text={tab.label}
            onClick={() => setActiveTab(tab.key)}
            className={`${
              activeTab === tab.key
                ? "bg-gray-100 text-black "
                : "bg-[#FFFFFF] hover:bg-[#F5F5F5] text-black"
            }`}
          />
        ))}
      </div>

      <div className="pt-4">{Content()}</div>
    </div>
  );
};

export default NotificationTab;
