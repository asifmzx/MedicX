"use client";

import { useState } from "react";

import Button from "@/Components/UI/Button/Button";
import FAQ from "../FAQ/FAQ";
import MyTickets from "../MyTickets/MyTickets";
import NewTicket from "../NewTicket/NewTicket";

const SupportTab = () => {
  const [activeTab, setActiveTab] = useState("NewTicket");

  const tabs = [
    { key: "NewTickets", label: "New Ticket" },
    { key: "MyTickets", label: "My Tickets" },
    { key: "FAQ", label: "FAQ" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "MyTickets":
        return <MyTickets />;
      case "FAQ":
        return <FAQ />;
      default:
        return <NewTicket  />;
    }
  };

  return (
    <div>
      <div className="flex flex-row space-x-2 pb-4">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            variant="primary"
            text={tab.label}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 ${
              activeTab === tab.key
                ? "bg-gray-100 text-black"
                : "bg-[#FFFFFF] hover:bg-[#F5F5F5] text-black"
            }`}
          />
        ))}
      </div>

      <div className="pt-4">{Content()}</div>
    </div>
  );
};

export default SupportTab;
