

"use client"

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import Revenue from "./Revenue/Revenue";
import Expenses from "./Expenses/Expenses";
import Transactions from "./Transactions/Transactions";
import Overview from "./Overview/Overview";

const FinancialReportTab = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { key: "Overview", label: "Overview" },
    { key: "Revenue", label: "Revenue" },
    { key: "Expenses", label: "Expenses" },
    { key: "Transactions", label: "Transactions" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Revenue":
        return <Revenue />;
      case "Expenses":
        return <Expenses />;
      case "Transactions":
        return <Transactions />;
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

export default FinancialReportTab;
