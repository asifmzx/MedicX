"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";
import All from "./All/All";
import Available from "./Available/Available";
import OnCall from "./OnCall/OnCall";
import Maintenance from "./Maintenance/Maintenance";

const AmbulanceList = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { key: "All", label: "All" },
    { key: "Available", label: "Available" },
    { key: "OnCall", label: "On Call" },
    { key: "Maintenance", label: "Maintenance" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Available":
        return <Available />;
      case "OnCall":
        return <OnCall />;
      case "Maintenance":
        return <Maintenance />;

      default:
        return <All />;
    }
  };
  return (
    <div className="w-full space-y-4 bg-white p-4 rounded-lg border border-gray-300">
      <div>
        <p className="text-2xl font-bold">Ambulance Fleet</p>
        <p className="text-sm text-gray-600">
          View and manage all ambulances in your fleet
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full">
        <div className="w-full sm:max-w-[280px]">
          <SearchInput
            placeholder="Search templates..."
            icon={AiOutlineSearch}
            inputClassName="text-sm text-gray-700 w-full"
            wrapperClassName="w-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <select
            id=""
            className="border border-gray-300 rounded px-2 py-1 w-full sm:w-auto"
            defaultValue=""
          >
            <option value="" disabled>
              All Statuses
            </option>
            <option value="Available">Available</option>
            <option value="On Call">On Call</option>
            <option value="Maintenance">Maintenance</option>
          </select>

          <select
            id=""
            className="border border-gray-300 rounded px-1 py-1 w-full sm:w-auto"
            defaultValue=""
          >
            <option value="" disabled>
              All Type
            </option>
            <option value="BasicLifeSupport">Basic Life Support</option>
            <option value="AdvancedLifeSupport">Advanced Life Support</option>
            <option value="Patient Transport">Patient Transport</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex flex-wrap gap-x-2 w-full sm:flex-1 ">
          <div className="bg-gray-50 px-2 py-2 rounded">
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
      </div>

      <div className="pt-4">{Content()}</div>
    </div>
  );
};

export default AmbulanceList;
