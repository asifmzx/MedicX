"use client";

import { useState } from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import Schedule from "./Schedule/Schedule";
import Patients from "./Patients/Patients";
import Tasks from "./Tasks/Tasks";
import Stats from "./Stats/Stats";

const SubSection = () => {
  const [activeTab, setActiveTab] = useState("schedule"); // lowercase for consistency

  const Content = () => {
    switch (activeTab) {
      case "patients":
        return <Patients />;
      case "tasks":
        return <Tasks />;
      case "stats":
        return <Stats />;
      case "schedule":
      default:
        return <Schedule />;
    }
  };

  return (
    <>
      <div className="space-x-2 flex items-center justify-center bg-black/4 rounded-md w-90 h-10">
        <Buttonv2
          variant="primary"
          text="Schedule"
          onClick={() => setActiveTab("schedule")}
          className="w-20 flex items-center justify-center"
          isActive={activeTab === "schedule"}
        />
        <Buttonv2
          variant="primary"
          text="Patients"
          onClick={() => setActiveTab("patients")}
          className="w-20 flex items-center justify-center"
          isActive={activeTab === "patients"}
        />
        <Buttonv2
          variant="primary"
          text="Tasks"
          onClick={() => setActiveTab("tasks")}
          className="w-20 flex items-center justify-center"
          isActive={activeTab === "tasks"}
        />
        <Buttonv2
          variant="primary"
          text="Stats"
          onClick={() => setActiveTab("stats")}
          className="w-20 flex items-center justify-center"
          isActive={activeTab === "stats"}
        />
      </div>
      <div className="pt-6">{Content()}</div>
    </>
  );
};

export default SubSection;
