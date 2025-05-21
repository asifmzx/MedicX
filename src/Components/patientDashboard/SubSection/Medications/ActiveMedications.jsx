import React from "react";
import { RiCapsuleLine } from "react-icons/ri";
import Status from "@/Components/UI/Status/Status";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";

const ActiveMedications = ({ medication = {} }) => {
    const {
        name = "Unknown Medication",
        dosage = "0mg",
        schedule = "As needed",
        time = "",
        prescribedBy = "Unknown Provider",
        startDate = "Unknown date",
        refillsRemaining = 0,
        nextRefillDate = "Unknown date",
        status = "Active",
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
                return { iconColor: "text-gray-500", iconBgColor: "bg-gray-100" };
        }
    };

    const iconStyle = getIconStyle(dosage);

    return (
        <div className="mb-4 border rounded-xl border-gray-300 p-4">
            <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full hidden md:block ${iconStyle.iconBgColor}`}>
                        <RiCapsuleLine className={`text-2xl  ${iconStyle.iconColor}`} />
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-800">{name}</h3>
                        <p className="text-sm text-gray-500">
                            {dosage} • {schedule} • {time}
                        </p>

                        <p className="text-xs mt-1 text-gray-500">
                            Prescribed by: {prescribedBy}
                        </p>

                        <p className="text-xs text-gray-500">
                            Start date: {startDate}
                        </p>

                        <p className="text-xs text-gray-500">
                            Refills remaining: {refillsRemaining}
                        </p>

                        <p className="text-xs text-gray-500">
                            Next refill date: {nextRefillDate}
                        </p>
                    </div>
                </div>

                <Status variant="active" text={status} />
            </div>

            <div className="flex justify-end gap-2 mt-3">
                <Buttonv2 variant="primary_main" className="text-sm border border-gray-300" text="Request Refill">
                    Request Refill
                </Buttonv2>
                <Buttonv2 variant="primary_main" className="text-sm border border-gray-300" text="View Details">
                    View Details
                </Buttonv2>
            </div>
        </div>
    );
};

export default ActiveMedications;