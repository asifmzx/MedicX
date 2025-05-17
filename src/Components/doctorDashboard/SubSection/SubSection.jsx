"use client";

import { useState } from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import Schedule from "./Schedule/Schedule";
import Patients from "./Patients/Patients";
import Tasks from "./Tasks/Tasks";
import Stats from "./Stats/Stats";

const SubSection = () => {
    const [activeTab, setActiveTab] = useState("Schedule");

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
        <>
            <div className="space-x-2 flex items-center justify-center bg-black/4 rounded-md w-90 h-10">
                <Buttonv2
                    variant="primary"
                    text="Schedule "
                    onClick={() => setActiveTab("schedule")}
                    className="w-20"
                />
                <Buttonv2
                    variant="primary"
                    text="Patients "
                    onClick={() => setActiveTab("patients")}
                    className="w-20"
                />

                <Buttonv2
                    variant="primary"
                    text="Tasks "
                    onClick={() => setActiveTab("tasks")}
                    className="w-20"
                />

                <Buttonv2
                    variant="primary"
                    text="Stats "
                    onClick={() => setActiveTab("stats")}
                    className="w-20"
                />
            </div>
            <div className="pt-6 ">{Content()}</div>
        </>
    );
};

export default SubSection;
