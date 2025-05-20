"use client"

import { useState } from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import Schedule from "./Schedule/Schedule";
import Patients from "./Patients/Patients";
import Tasks from "./Tasks/Tasks";
import Stats from "./Stats/Stats";

const SubSection = () => {
  const [activeTab, setActiveTab] = useState("schedule");

  const Content = () => {
    switch (activeTab) {
      case "patients":
        return <Patients />;
      case "tasks":
        return <Tasks />;
      case "stats":
        return <Stats />;
      default:
        return <Schedule />;
    }
  };

  return (
    <div className="w-full">
      <div className="sm:w-[480px]">
        <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:flex sm:flex-row sm:items-center sm:justify-start bg-black/4 rounded-md p-2 sm:h-10 sm:gap-2">
          <Buttonv2
            variant="primary"
            text="Schedule"
            onClick={() => setActiveTab("schedule")}
            className="flex items-center justify-center sm:w-[100px]"
            isActive={activeTab === "schedule"}
          />
          <Buttonv2
            variant="primary"
            text="Patients"
            onClick={() => setActiveTab("patients")}
            className="flex items-center justify-center sm:w-[120px]"
            isActive={activeTab === "patients"}
          />
          <Buttonv2
            variant="primary"
            text="Tasks"
            onClick={() => setActiveTab("tasks")}
            className="flex items-center justify-center sm:w-[120px]"
            isActive={activeTab === "tasks"}
          />

          <Buttonv2
            variant="primary"
            text="Stats"
            onClick={() => setActiveTab("stats")}
            className="col-span-1 col-start-1 sm:col-auto flex items-center justify-center sm:w-[100px]"
            isActive={activeTab === "stats"}
          />
        </div>
      </div>

      <div className="pt-6">{Content()}</div>
    </div>
  );
};

export default SubSection;