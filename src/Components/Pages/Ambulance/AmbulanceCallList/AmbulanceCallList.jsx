"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";
import All from "./All/All";
import Pending from "./Pending/Pending";
import InProgress from "./InProgress/InProgress";
import Completed from "./Completed/Completed";

const AmbulanceCallList = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { key: "All", label: "All" },
    { key: "Pending", label: "Pending" },
    { key: "InProgress", label: "In Progress" },
    { key: "Completed", label: "Completed" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Pending":
        return <Pending />;
      case "InProgress":
        return <InProgress />;
      case "Completed":
        return <Completed />;
      default:
        return <All />;
    }
  };

  return (
    <div className="w-full space-y-4 bg-white p-4 rounded-lg border border-gray-300">
      <div>
        <p className="text-2xl font-bold">Ambulance Calls</p>
        <p className="text-sm text-gray-600">
          View and manage all ambulance calls and dispatches
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
            <option value="Pending">Pending</option>
            <option value="InProgress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <select
            id="prescription-type-2"
            className="border border-gray-300 rounded px-2 py-1 w-full sm:w-auto"
            defaultValue=""
          >
            <option value="" disabled>
              Today
            </option>
            <option value="Yesterday">Yesterday</option>
            <option value="ThisWeek">This Week</option>
            <option value="ThisMonth">This Month</option>
            <option value="CustomRange">Custom Range</option>
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

export default AmbulanceCallList;
