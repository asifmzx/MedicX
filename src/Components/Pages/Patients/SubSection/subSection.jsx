"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import MedicalInfo from "./MedicalInfo/MedicalInfo";
import Insurance from "./Insurance/Insurance";
import ConsentDocument from "./ConsentDocument/ConsentDocument";

const SubSection = () => {
  const [activeTab, setActiveTab] = useState("PersonalInfo");

  const tabs = [
    { key: "PersonalInfo", label: "Personal Information" },
    { key: "MedicalInfo", label: "Medical Information" },
    { key: "Insurance", label: "Insurance & Billing" },
    { key: "ConsentDocument", label: "Consent & Document" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "MedicalInfo":
        return <MedicalInfo />;
      case "Insurance":
        return <Insurance />;
      case "ConsentDocument":
        return <ConsentDocument />;
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
