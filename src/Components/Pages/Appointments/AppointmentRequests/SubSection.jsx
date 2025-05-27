"use client";

import { useState } from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import PendingRequests from "./PendingRequests";
import Approved from "./Approved";
import Rejected from "./Rejected";

const SubSection = () => {
  const [activeTab, setActiveTab] = useState("pendingrequests");

  const Content = () => {
    switch (activeTab) {
      case "approved":
        return <Approved />;
      case "rejected":
        return <Rejected />;
      default:
        return <PendingRequests />;
    }
  };

  return (
    <div className="w-full">
      <div className="sm:w-[350px]">
        <div className="grid grid-cols-3 grid-rows-1 gap-2 sm:flex sm:flex-row sm:items-center sm:justify-start bg-black/4 rounded-md p-2 sm:h-12 sm:gap-2">
          <Buttonv2
            variant="primary"
            text="Pending Requests"
            onClick={() => setActiveTab("pendingrequests")}
            className="flex items-center justify-center sm:w-[120px]"
            isActive={activeTab === "pendingrequests"}
          />
          <Buttonv2
            variant="primary"
            text="Approved"
            onClick={() => setActiveTab("approved")}
            className="flex items-center justify-center sm:w-[100px]"
            isActive={activeTab === "approved"}
          />
          <Buttonv2
            variant="primary"
            text="Rejected"
            onClick={() => setActiveTab("rejected")}
            className="flex items-center justify-center sm:w-[100px]"
            isActive={activeTab === "rejected"}
          />
        </div>
      </div>

      <div className="pt-6">{Content()}</div>
    </div>
  );
};

export default SubSection;
