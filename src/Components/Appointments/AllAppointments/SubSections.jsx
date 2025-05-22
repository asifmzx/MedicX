"use client";

import { useState } from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import AllAppointments from "./AllAppointments";
const SubSection = () => {
    const [activeTab, setActiveTab] = useState("allAppointments");

    const Content = () => {
        switch (activeTab) {
            case "upcoming":
                return <Upcoming />;
            case "today":
                return <Today />;
            case "completed":
                return <Completed />;
            case "cancelled":
                return <Cancelled />;
            default:
                return <AllAppointments />;
        }
    };

    return (
        <div className="w-full">
            <div className="sm:w-[510px]">
                <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:flex sm:flex-row sm:items-center sm:justify-start bg-black/4 rounded-md p-2 sm:h-10 sm:gap-2 mt-2">
                    <Buttonv2
                        variant="primary"
                        text="All Appointments"
                        onClick={() => setActiveTab("allAppointments")}
                        className="col-span-1 sm:col-auto flex items-center justify-center sm:w-[160px]"
                        isActive={activeTab === "allAppointments"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Upcoming"
                        onClick={() => setActiveTab("upcoming")}
                        className="flex items-center justify-center sm:w-[100px]"
                        isActive={activeTab === "upcoming"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Today"
                        onClick={() => setActiveTab("today")}
                        className="flex items-center justify-center sm:w-[120px]"
                        isActive={activeTab === "today"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Completed"
                        onClick={() => setActiveTab("completed")}
                        className="flex items-center justify-center sm:w-[120px]"
                        isActive={activeTab === "completed"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Cancelled"
                        onClick={() => setActiveTab("cancelled")}
                        className="col-span-1 col-start-2 sm:col-auto flex items-center justify-center sm:w-[100px]"
                        isActive={activeTab === "cancelled"}
                    />
                </div>
            </div>

            <div className="pt-6">{Content()}</div>
        </div>
    );
};
export default SubSection;