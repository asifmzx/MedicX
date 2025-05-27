"use client";

import { useState } from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import Overview from "./Overview/Overview";
import Appointments from "./Appointments/Appointments";
import Medications from "./Medications/Medications";
import Records from "./Records/Records";
import Vitals from "./Vitals/Vitals";

const SubSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const Content = () => {
    switch (activeTab) {
      case "appointments":
        return <Appointments />;
      case "medications":
        return <Medications />;
      case "records":
        return <Records />;
      case "vitals":
        return <Vitals />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="w-full">
      <div className="sm:w-[510px]">
        <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:flex sm:flex-row sm:items-center sm:justify-start bg-black/4 rounded-md p-2 sm:h-10 sm:gap-2">
          <Buttonv2
            variant="primary"
            text="Overview"
            onClick={() => setActiveTab("overview")}
            className="flex items-center justify-center sm:w-[100px]"
            isActive={activeTab === "overview"}
          />
          <Buttonv2
            variant="primary"
            text="Appointments"
            onClick={() => setActiveTab("appointments")}
            className="flex items-center justify-center sm:w-[120px]"
            isActive={activeTab === "appointments"}
          />
          <Buttonv2
            variant="primary"
            text="Medications"
            onClick={() => setActiveTab("medications")}
            className="flex items-center justify-center sm:w-[120px]"
            isActive={activeTab === "medications"}
          />

          <Buttonv2
            variant="primary"
            text="Records"
            onClick={() => setActiveTab("records")}
            className="col-span-1 col-start-1 sm:col-auto flex items-center justify-center sm:w-[100px]"
            isActive={activeTab === "records"}
          />
          <Buttonv2
            variant="primary"
            text="Vitals"
            onClick={() => setActiveTab("vitals")}
            className="col-span-1 col-start-2 sm:col-auto flex items-center justify-center sm:w-[100px]"
            isActive={activeTab === "vitals"}
          />
        </div>
      </div>

      <div className="pt-6">{Content()}</div>
    </div>
  );
};

export default SubSection;