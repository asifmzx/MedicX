import React from "react";
import SubSection from "./SubSections";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { FiMessageSquare } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";

const Appointments = () => {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <div className="flex w-full flex-col gap-2">
                    <div className="flex flex-wrap items-center justify-between">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                                Appointments
                            </h1>
                            <p className="text-gray-600 mb-2">
                                Manage your clinic's appointments and schedules.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-end justify-end gap-2">
                            <Buttonv2
                                variant="primary_main"
                                text="Calender View"
                                Icon={FiMessageSquare}
                                className="text-sm w-[170px] sm:w-[160px]"
                            />
                            <Buttonv2
                                variant="secondary_main"
                                text="Book Appointment"
                                Icon={CiCalendar}
                                className="text-sm w-auto sm:w-[170px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SubSection />
            </div>
        </div>
    );
};

export default Appointments;