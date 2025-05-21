import React from "react";
import { RiFileTextLine } from "react-icons/ri";
import Status from "@/Components/UI/Status/Status";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";

const RecentTestResults = ({ test = {} }) => {
    const {
        name = "Unknown Test",
        description = "No description available",
        date = "Unknown date",
        orderedBy = "Unknown Provider",
        status = "New"
    } = test;

    const getIconStyle = (name) => {
        if (name.includes("Blood")) {
            return { iconColor: "text-[#eb3434]", iconBgColor: "bg-[#ffdbdb]" };
        } else if (name.includes("Lipid")) {
            return { iconColor: "text-[#3498eb]", iconBgColor: "bg-[#dbf2ff]" };
        }
        else if (name.includes("Comprehensive")) {
            return { iconColor: "text-[#328E6E]", iconBgColor: "bg-[#E1EEBC]" };
        }
        else if (name.includes("Thyroid")) {
            return { iconColor: "text-[#4E71FF]", iconBgColor: "bg-[#BBFBFF]" };
        }
        return { iconColor: "text-gray-400", iconBgColor: "bg-gray-100" };
    };

    const iconStyle = getIconStyle(name);

    return (

        <div className="mb-4 border rounded-xl border-gray-200 p-2 bg-white">
            <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full hidden md:block ${iconStyle.iconBgColor}`}>
                    <RiFileTextLine className={`text-2xl ${iconStyle.iconColor}`} />
                </div>
                <div className="w-full">
                    <div className="flex flex-row gap-2 items-center justify-between w-full">
                        <h3 className="font-medium text-gray-900">{name}</h3>
                        <Status variant="secondary" className="h-[28px]" text={status} />
                    </div>

                    <p className="text-sm text-gray-600 mt-1">
                        {description}
                    </p>

                    <div className="flex flex-col justify-between md:flex-col lg:flex-row  mt-3 text-sm text-gray-500">
                        <div>
                            <p>Date: <span className="text-gray-700">{date}</span></p>
                            <p>Ordered by: <span className="text-gray-700">{orderedBy}</span></p>
                        </div>
                        <div className="gap-2 flex justify-center md:justify-end mt-2">
                            <Buttonv2 variant="primary" text="Download PDF" className="border border-gray-300" />
                            <Buttonv2 variant="secondary" text="View Results" />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RecentTestResults;