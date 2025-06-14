"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import Overview from "./Overview/Overview";
import Demographics from "./Demographics/Demographics";
import VisitTrends from "./VisitTrends/VisitTrends";
import Conditions from "./Conditions/Conditions";

const PatientReportTab = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { key: "Overview", label: "Overview" },
    { key: "Demographics", label: "Demographics" },
    { key: "VisitTrends", label: "Visit Trends" },
    { key: "Conditions", label: "Conditions" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Demographics":
        return <Demographics />;
      case "VisitTrends":
        return <VisitTrends />;
      case "Conditions":
        return <Conditions />;
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

export default PatientReportTab;
