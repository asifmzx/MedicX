import React from "react";
import { RiCapsuleLine } from "react-icons/ri";
import Status from "@/Components/UI/Status/Status";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { IoIosNotificationsOutline } from "react-icons/io";


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
        <div className="mb-4 border rounded-xl border-gray-300 p-2">
            <div className="flex justify-between items-start">
                <div className="flex flex-row w-full items-start gap-3 ">
                    <div className={`p-1 rounded-full hidden md:block ${iconStyle.iconBgColor}`}>
                        <RiCapsuleLine className={`text-2xl  ${iconStyle.iconColor}`} />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <div>
                            <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row gap-2 items-center">

                                    <h3 className="font-medium text-gray-800">{name}</h3>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <Status variant="active" text={status} className="h-6" />
                                    <Buttonv2 variant="primary" Icon={IoIosNotificationsOutline}></Buttonv2>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">
                                {dosage} • {schedule} • {time}
                            </p>
                            <div className="flex flex-col md:flex-col lg:flex-row lg:items-center justify-between mt-1">
                                <div>
                                    <p className="text-xs text-gray-500">
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
                                <div className="gap-2 flex justify-center md:justify-end mt-2">
                                    <Buttonv2 variant="primary_main" className="text-sm border border-gray-300" text="Request Refill">
                                        Request Refill
                                    </Buttonv2>
                                    <Buttonv2 variant="primary_main" className="text-sm border border-gray-300" text="View Details">
                                        View Details
                                    </Buttonv2>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ActiveMedications;