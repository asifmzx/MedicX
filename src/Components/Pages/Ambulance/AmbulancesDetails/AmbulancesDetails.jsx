"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";

import Overview from "./Overview/Overview";
import Maintenance from "./Maintenance/Maintenance";
import Equipment from "./Equipment/Equipment";
import CallAssignment from "./CallAssignment/CallAssignment";

const AmbulancesDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { key: "Overview", label: "Overview" },
    { key: "Maintenance", label: "Maintenance" },
    { key: "Equipment", label: "Equipment" },
    { key: "CallAssignment", label: "Call Assignment" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Maintenance":
        return <Maintenance />;
      case "Equipment":
        return <Equipment />;
      case "CallAssignment":
        return <CallAssignment />;

      default:
        return <Overview />;
    }
  };
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex flex-wrap gap-x-2 w-full sm:flex-1 ">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, index) => (
              <Button
                key={index}
                variant="primary"
                text={tab.label}
                onClick={() => setActiveTab(tab.key)}
                className={`${
                  activeTab === tab.key
                    ? "bg-gray-100 text-black"
                    : "bg-white hover:bg-gray-100 text-black"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4">{Content()}</div>
    </div>
  );
};

export default AmbulancesDetails;
