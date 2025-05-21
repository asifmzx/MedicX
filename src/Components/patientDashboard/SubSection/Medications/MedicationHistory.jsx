import React from "react";
import { RiCapsuleLine } from "react-icons/ri";
import Status from "@/Components/UI/Status/Status";

const MedicationHistoryCard = ({ medication = {} }) => {
    const {
        name = "Unknown Medication",
        dosage = "0mg",
        schedule = "As needed",
        time = "",
        prescribedBy = "Unknown Provider",
        startDate = "Unknown date",
        endDate = "Unknown date",
    } = medication;

    const getIconStyle = (dosage) => {
        switch (dosage) {
            case "10mg":
                return { iconColor: "text-[#2664eb]", iconBgColor: "bg-[#dbebff]" };
            case "500mg":
                return { iconColor: "text-[#15a349]", iconBgColor: "bg-[#dcfce7]" };
            case "20mg":
                return { iconColor: "text-[#9234eb]", iconBgColor: "bg-[#f3e8ff]" };
            default:
                return { iconColor: "text-gray-400", iconBgColor: "bg-gray-100" };
        }
    };

    const iconStyle = getIconStyle(dosage);

    return (
        <div className="mb-4 border rounded-xl border-gray-200 p-2 bg-gray-50">
            <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full hidden md:block ${iconStyle.iconBgColor}`}>
                    <RiCapsuleLine className={`text-2xl ${iconStyle.iconColor}`} />
                </div>
                <div className="w-full">
                    <span className="flex flex-row gap-2  justify-between w-full">
                        <h3 className="font-medium text-gray-500">{name}</h3>
                        <Status variant="completed" text="Completed" className="text-gray-500" />
                    </span>
                    <p className="text-sm text-gray-400">
                        {dosage} • {schedule} • {time}
                    </p>
                    <p className="text-xs mt-1 text-gray-400">
                        Prescribed by: {prescribedBy}
                    </p>
                    <p className="text-xs text-gray-400">
                        Start date: {startDate}
                    </p>
                    <p className="text-xs text-gray-400">
                        End date: {endDate}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MedicationHistoryCard;