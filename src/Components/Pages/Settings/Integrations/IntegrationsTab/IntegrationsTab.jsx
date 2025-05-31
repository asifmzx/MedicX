"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import Available from "../Available/Available";
import Settings from "../Settings/Settings";
import Active from "../Active/Active";




const IntegrationsTab = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const tabs = [
    { key: "Active", label: "Active" },
    { key: "Available", label: "Available" },
    { key: "Settings", label: "Settings" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Available":
        return <Available />;
      case "Settings":
        return <Settings />;
      default:
        return <Active />;
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

export default IntegrationsTab;
