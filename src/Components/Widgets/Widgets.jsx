"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import All from "./All/All";
import Charts from "./Charts/Charts";
import Cards from "./Cards/Cards";
import Stats from "./Stats/Stats";
import Misc from "./Misc/Misc";

const Widgets = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { key: "All", label: "All" },
    { key: "Charts", label: "Charts" },
    { key: "Cards", label: "Cards" },
    { key: "Stats", label: "Stats" },
    { key: "Misc", label: "Misc" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Charts":
        return <Charts />;
      case "Cards":
        return <Cards />;
      case "Stats":
        return <Stats />;
      case "Misc":
        return <Misc />;
      default:
        return <All />;
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

export default Widgets;
