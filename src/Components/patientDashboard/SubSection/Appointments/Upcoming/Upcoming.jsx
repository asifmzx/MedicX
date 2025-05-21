"use client";
import React from "react";
import Status from "@/Components/UI/Status/Status";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { GoPerson } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";

const appointments = [
    {
        doctor: "Dr. Johnson",
        specialty: "Cardiology",
        date: "May 15, 2023",
        time: "10:30 AM",
        type: "Annual Checkup",
        label: "Tomorrow",
        labeltype: "tomorrow",
    },
    {
        doctor: "Dr. Martinez",
        specialty: "Dermatology",
        date: "May 22, 2023",
        time: "2:15 PM",
        type: "Skin Examination",
        label: "Next Week",
        labeltype: "nextweek",
    },
];

const icon_s = [
    { specialty: "Cardiology", iconColor: "text-[#2664eb]", iconBgColor: "bg-[#dbebff]" },
    { specialty: "Dermatology", iconColor: "text-[#15a349]", iconBgColor: "bg-[#dcfce7]" },
];

const Upcoming = () => {
    return (
        <div className="bg-white w-full px-4 py-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming</h2>
            {appointments.map((appt, idx) => {
                const icon = icon_s.find(i => i.specialty === appt.specialty);

                return (
                    <div key={idx} className="border border-gray-300 rounded-md p-4 mb-4">
                        <div className="flex items-start gap-3 mb-3">
                            <div className={`rounded-full p-3 flex items-center justify-center ${icon?.iconBgColor} hidden sm:flex`}>
                                <CiCalendar className={`text-2xl ${icon?.iconColor}`} />
                            </div>
                            <div className="flex flex-col w-full ">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-medium text-gray-800 text-base">{appt.type}</h3>
                                    <Status variant={appt.labeltype} text={appt.label} />
                                </div>
                                <p className="text-gray-500 text-sm sm: mt-2 ">{appt.date} • {appt.time}</p>
                                <div className="flex items-center text-sm text-gray-500 mt-1">
                                    <GoPerson className="mr-1" />
                                    <span>{appt.doctor} ({appt.specialty})</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2">
                                    <div className="flex justify-center sm:justify-end items-end gap-2 w-full">
                                        <Buttonv2 variant="primary_main" text="Reschedule" className="h-10 text-sm border border-gray-300" />
                                        <Buttonv2 variant="secondary_main" text="Details" className="h-10 text-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Upcoming;