"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import Overview from "./Overview/Overview";
import Analytics from "./Analytics/Analytics";
import Notifications from "./Notifications/Notifications";
import Reports from "./Reports/Reports";

const SubSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "analytics", label: "Analytics" },
    { key: "reports", label: "Reports" },
    { key: "notifications", label: "Notifications" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "analytics":
        return <Analytics />;
      case "reports":
        return <Reports />;
      case "notifications":
        return <Notifications />;
      default:
        return <Overview />;
    }
  };

  return (
    <div>
      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
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

      <div className="pt-6">{Content()}</div>
    </div>
  );
};

export default SubSection;
