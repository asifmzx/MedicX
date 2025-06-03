"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import StockLevels from "./StockLevels/StockLevels";
import UsageTrends from "./UsageTrends/UsageTrends";
import Suppliers from "./Suppliers/Suppliers";
import Overview from "./Overview/Overview";


const InventoryReportTab = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { key: "Overview", label: "Overview" },
    { key: "StockLevels", label: "Stock Levels" },
    { key: "UsageTrends", label: "UsageTrends" },
    { key: "Suppliers", label: "Suppliers" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "StockLevels":
        return <StockLevels />;
      case "UsageTrends":
        return <UsageTrends />;
      case "Suppliers":
        return <Suppliers />;
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

export default InventoryReportTab;
