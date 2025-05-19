"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo/ProfessionalInfo";
import AccountSettings from "./AccountSettings/AccountSettings";

const SubSection = () => {
  const [activeTab, setActiveTab] = useState("PersonalInfo");

  const tabs = [
    { key: "PersonalInfo", label: "Personal Information" },
    { key: "ProfessionalInfo", label: "Professional Information" },
    { key: "AccountSettings", label: "Account Settings" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "ProfessionalInfo":
        return <ProfessionalInfo />;
      case "AccountSettings":
        return <AccountSettings />;
      default:
        return <PersonalInfo />;
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

export default SubSection;
