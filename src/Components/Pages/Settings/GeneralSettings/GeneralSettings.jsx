"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import Preferences from "./Preferences/Preferences";
import Branding from "./Branding/Branding";
import Security from "./Security/Security";
import System from "./System/System";
import ClinicInfo from "./ClinicInfo/ClinicInfo";

const GeneralSettings = () => {
  const [activeTab, setActiveTab] = useState("ClinicInfo");

  const tabs = [
    { key: "ClinicInfo", label: "ClinicInfo" },
    { key: "Preferences", label: "Preferences" },
    { key: "Branding", label: "Branding" },
    { key: "Security", label: "Security" },
    { key: "System", label: "System" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Preferences":
        return <Preferences />;
      case "Branding":
        return <Branding />;
      case "Security":
        return <Security />;
      case "System":
        return <System />;
      default:
        return <ClinicInfo />;
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-center space-x-0.5 pb-4">
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

export default GeneralSettings;
