"use client";
import React from "react";
import Status from "@/Components/UI/Status/Status";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import Image from "next/image";
import { assets } from "@/assets";

const appointments = [
    {
        doctor: "Dr. Johnson",
        specialty: "Cardiology",
        date: "May 15, 2023",
        time: "10:30 AM",
        type: "Annual Checkup",
        label: "Tomorrow",
        labeltype: "tomorrow",
        img: assets.prof,
    },
    {
        doctor: "Dr. Martinez",
        specialty: "Dermatology",
        type: "Skin Examination",
        date: "May 22, 2023",
        time: "2:15 PM",
        label: "Next Week",
        labeltype: "nextWeek",
        img: assets.prof,
    },
];

const UpcomingAppointments = () => {
    return (
        <div className="bg-white shadow-sm p-4 rounded-xl w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Upcoming Appointments</h2>
            <p className="text-sm text-gray-600 mb-4">Your scheduled visits</p>

            {appointments.map((appt, idx) => (
                <div key={idx} className="flex flex-col border border-gray-300 p-3 rounded-md mb-3 ">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center flex-row items-center gap-3">
                            <Image
                                src={appt.img}
                                width={150}
                                height={16}
                                className="border rounded-full size-10"
                                alt={appt.doctor}
                            />
                            <div className="flex flex-col justify-center items-start">
                                <h3 className="font-medium text-gray-800">{appt.doctor}</h3>
                                <p className="text-sm text-gray-500">{appt.specialty}</p>
                            </div>
                        </div>
                        <Status
                            variant={appt.labeltype}
                            text={appt.label}
                        />
                    </div>
                    <div>
                        <p className="text-gray-700 mt-1">{appt.date} • {appt.time}</p>
                        <p className="text-gray-500 text-sm">{appt.type}</p>
                    </div>

                </div>
            ))}
            <Buttonv2 text="View All Appointments" variant="primary_main" className="w-full flex justify-center items-center border border-gray-300 rounded-md p-2 font-semibold text-gray-600">
                View All Appointments
            </Buttonv2>
        </div>
    );
};

export default UpcomingAppointments;
