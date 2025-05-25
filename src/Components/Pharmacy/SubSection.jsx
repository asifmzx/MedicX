"use client";
import { useState, useCallback } from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import AllMedicine from "./AllMedicine";

const tabs = [
    { id: "all", label: "All" },
    { id: "prescription", label: "Prescription" },
    { id: "otc", label: "OTC" },
    { id: "controlled", label: "Controlled" },
];

const filters = {
    all: () => true,
    prescription: (item) => item.type === "Prescription",
    otc: (item) => item.type === "OTC",
    controlled: (item) => item.type === "Controlled",
};

const SubSection = () => {
    const [activeTab, setActiveTab] = useState("all");

    const Content = useCallback(
        () => <AllMedicine filter={filters[activeTab]} />,
        [activeTab]
    );

    return (
        <div className="w-full">
            <div className="sm:w-[290px]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:flex sm:flex-row sm:items-center sm:justify-start bg-black/4 rounded-md p-2 sm:h-10 sm:gap-2 mt-2">
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