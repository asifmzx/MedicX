
"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import Trends from "./Trends/Trends";
import ByDoctor from "./ByDoctor/ByDoctor";
import ByService from "./ByService/ByService";
import Overview from "./Overview/Overview";


const AppointmentReportTab = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { key: "Overview", label: "Overview" },
    { key: "Trends", label: "Trends" },
    { key: "ByDoctor", label: "ByDoctor" },
    { key: "ByService", label: "ByService" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Trends":
        return <Trends />;
      case "ByDoctor":
        return <ByDoctor />;
      case "ByService":
        return <ByService />;
      default:
        return <Overview />;
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

export default AppointmentReportTab;

