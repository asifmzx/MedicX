"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import Holidays from "../Holidays/Holidays";
import SpecialHours from "../SpecialHours/SpecialHours";

const SpecialHourTab = () => {
  const [activeTab, setActiveTab] = useState("SpecialHours");

  const tabs = [
    { key: "SpecialHours", label: "SpecialHours" },
    { key: "Holidays", label: "Holidays" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Holidays":
        return <Holidays />;
      default:
        return <SpecialHours />;
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-center space-x-0.5  border border-gray-300">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            variant="primary"
            text={tab.label}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 ${
              activeTab === tab.key
                ? "bg-gray-100 text-black"
                : "bg-[#FFFFFF] hover:bg-[#F5F5F5] text-black"
            }`}
          />
        ))}
      </div>

      <div className="pt-4">{Content()}</div>
    </div>
  );
};

export default SpecialHourTab;
