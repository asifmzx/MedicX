"use client";

import Button from "@/Components/UI/Button/Button";
import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { key: "All", label: "All" },
    { key: "Unread", label: "Unread" },
    { key: "Groups", label: "Groups" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Unread":
        return;
      case "Groups":
        return;
      default:
        return;
    }
  };

  return (
    <div className="flex justify-center p-2 items-center rounded bg-gray-100">
      <div className=" w-full max-w-md rounded ">
        <div className="flex justify-center items-center space-x-2">
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              variant="primary"
              text={tab.label}
              onClick={() => setActiveTab(tab.key)}
              className={`${
                activeTab === tab.key
                  ? "bg-gray-100 text-black"
                  : "bg-white hover:bg-gray-100 text-black"
              } w-full`}
            />
          ))}
        </div>
        <div className="">{Content()}</div>
      </div>
    </div>
  );
};

export default Tab;
