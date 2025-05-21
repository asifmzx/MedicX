"use client";
import React from "react";
import { GoPerson } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";

const pastAppointments = [
    {
        doctor: "Dr. Patel",
        specialty: "Internal Medicine",
        date: "April 30, 2023",
        time: "9:00 AM",
        type: "Blood Work",
    },
    {
        doctor: "Dr. Garcia",
        specialty: "Dentistry",
        date: "March 15, 2023",
        time: "11:30 AM",
        type: "Dental Cleaning",
    },
];

const Past = () => {
    return (
        <div className="bg-white w-full px-4 py-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Past</h2>
            {pastAppointments.map((appt, idx) => (
                <div key={idx} className="border border-gray-200 rounded-md p-4 mb-4 bg-gray-50">
                    <div className="flex items-start gap-3 mb-3">
                        <div className={`rounded-full p-3 items-center justify-center hidden sm:flex`}>
                            <CiCalendar className="text-2xl text-gray-500" />
                        </div>
                        <div className="flex flex-wrap justify-between items-center w-full">
                            <div className="flex flex-col">
                                <h3 className="font-medium text-gray-600 text-base">{appt.type}</h3>
                                <p className="text-gray-400 text-sm">{appt.date} • {appt.time}</p>
                                <div className="flex items-center text-sm text-gray-400 mt-1">
                                    <GoPerson className="mr-2" />
                                    <span>{appt.doctor} ({appt.specialty})</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2">
                                <div className="flex justify-center sm:justify-end items-end gap-2 w-full">
                                    <Buttonv2 text="View Results" className="h-10 text-sm text-gray-600 border border-gray-300" />
                                    <Buttonv2 text="Notes" className="h-10 text-sm text-gray-600 border border-gray-300" />
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            ))
            }
        </div >
    );
};

export default Past;
