import React from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import BackButton from "@/Components/UI/Button/BackButton";
import AppointmentDetails from "./AppointmentDetails";


const AddAppointment = () => {
    return (
        <div className="px-2 py-4">
            <div className="flex justify-between items-center">
                <div className="flex w-full flex-col gap-2">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex items-center gap-x-4 px-4">
                            <div className="bg-white">
                                <BackButton />
                            </div>
                            <div className="mt-2">
                                <h1 className="text-2xl md:text-2xl font-bold tracking-tight mb-1">
                                    Add Appointment
                                </h1>
                                <p className="text-gray-600 mb-2 font-normal">
                                    Schedule a new appointment for a patient.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <AppointmentDetails />
            </div>
        </div>
    );
};

export default AddAppointment;
// 