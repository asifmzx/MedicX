import React from "react";
import { RiHealthBookLine, RiAlertLine, RiHeartPulseLine, RiScissorsLine } from "react-icons/ri";

const MedicalHistory = ({ section = {} }) => {
    const {
        title = "Unknown Section",
        items = []
    } = section;

    const itemColors = {
        "allergies": {
            "penicillin": { bg: "bg-[#ffebee]", text: "text-[#c62828]" },
            "peanut": { bg: "bg-[#fff3e0]", text: "text-[#e65100]" },
            "shellfish": { bg: "bg-[#e3f2fd]", text: "text-[#1565c0]" },
            "latex": { bg: "bg-[#f3e5f5]", text: "text-[#6a1b9a]" },
            "aspirin": { bg: "bg-[#e8f5e9]", text: "text-[#2e7d32]" },
            "default": { bg: "bg-white", text: "text-gray-700" }
        },
        "conditions": {
            "diabetes": { bg: "bg-[#e3f2fd]", text: "text-[#0d47a1]" },
            "hypertension": { bg: "bg-[#e8f5e9]", text: "text-[#1b5e20]" },
            "asthma": { bg: "bg-[#fff3e0]", text: "text-[#e65100]" },
            "default": { bg: "bg-white", text: "text-gray-700" }
        },
        "procedures": {
            "appendectomy": { bg: "bg-[#f3e5f5]", text: "text-[#6a1b9a]" },
            "tonsillectomy": { bg: "bg-[#e0f7fa]", text: "text-[#00838f]" },
            "default": { bg: "bg-white", text: "text-gray-700" }
        }
    };

    const getIcon = (title) => {
        switch (title.toLowerCase()) {
            case "allergies":
                return <RiAlertLine className="text-2xl text-[#eb3434]" />;
            case "conditions":
                return <RiHeartPulseLine className="text-2xl text-[#3498eb]" />;
            case "procedures":
                return <RiScissorsLine className="text-2xl text-[#9234eb]" />;
            default:
                return <RiHealthBookLine className="text-2xl text-gray-400" />;
        }
    };

    const iconBgColor = {
        "allergies": "bg-[#ffdbdb]",
        "conditions": "bg-[#dbf2ff]",
        "procedures": "bg-[#f3e8ff]",
        "default": "bg-gray-100"
    };

    const bgColor = iconBgColor[title.toLowerCase()] || iconBgColor.default;

    const getItemColor = (sectionName, itemName) => {
        const sectionColors = itemColors[sectionName.toLowerCase()] || itemColors.allergies;
        const lowerName = itemName.toLowerCase();

        for (const [key, value] of Object.entries(sectionColors)) {
            if (key !== "default" && lowerName.includes(key)) {
                return value;
            }
        }
        return sectionColors.default;
    };

    return (
        <div className="mb-6 border rounded-xl border-gray-200 p-4 bg-gray-50">
            <div className="flex items-start gap-3 mb-4">
                <div className={`p-2 rounded-full ${bgColor}`}>
                    {getIcon(title)}
                </div>
                <h3 className="font-medium text-gray-900 text-lg">{title}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((item, index) => {
                    const colors = getItemColor(title, item.name);

                    return (
                        <div
                            key={index}
                            className={`border border-gray-200 rounded-lg p-3 ${colors.bg} transition-all hover:shadow-sm`}
                        >
                            <div className="flex flex-col">
                                <span className={`text-sm font-medium ${colors.text}`}>
                                    {item.name}
                                </span>
                                {item.details && (
                                    <span className="text-sm text-gray-500 mt-1">{item.details}</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MedicalHistory;