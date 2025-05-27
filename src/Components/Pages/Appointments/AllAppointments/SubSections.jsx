"use client";
import { useState, useCallback } from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import AllAppointments from "./AllAppointments";

const tabs = [
  {
    id: "allAppointments",
    label: "All",
  },
  {
    id: "upcoming",
    label: "Upcoming",
  },
  {
    id: "today",
    label: "Today",
  },
  {
    id: "completed",
    label: "Completed",
  },
  {
    id: "cancelled",
    label: "Cancelled",
  },
];

const filters = {
  upcoming: (item) =>
    ["Confirmed", "In Progress"].includes(item.status) &&
    new Date(item.datetime) > new Date(),
  today: (item) => {
    const today = new Date().toDateString();
    const appointmentDate = new Date(item.datetime).toDateString();
    return appointmentDate === today;
  },
  completed: (item) => item.status === "Completed",
  cancelled: (item) => item.status === "Cancelled",
};

const titles = {
  allAppointments: {
    title: "All Appointments",
    description: "View and manage all scheduled appointments.",
  },
  upcoming: {
    title: "Upcoming Appointments",
    description: "View and manage upcoming appointments.",
  },
  today: {
    title: "Today's Appointments",
    description: "View and manage today's appointments.",
  },
  completed: {
    title: "Completed Appointments",
    description: "View and manage completed appointments.",
  },
  cancelled: {
    title: "Cancelled Appointments",
    description: "View and manage cancelled appointments.",
  },
};

const SubSection = () => {
  const [activeTab, setActiveTab] = useState("allAppointments");

  const Content = useCallback(
    () => (
      <AllAppointments filter={filters[activeTab]} {...titles[activeTab]} />
    ),
    [activeTab]
  );

  return (
    <div className="w-full">
      <div className="sm:w-[380px]">
        <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:flex sm:flex-row sm:items-center sm:justify-start bg-black/4 rounded-md p-2 sm:h-10 sm:gap-2 mt-2">
          {tabs.map(({ id, label }) => (
            <Buttonv2
              key={id}
              variant="primary"
              text={label}
              onClick={() => setActiveTab(id)}
              isActive={activeTab === id}
            />
          ))}
        </div>
      </div>

      <div className="pt-6">
        <Content />
      </div>
    </div>
  );
};
export default SubSection;
