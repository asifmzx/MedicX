"use client"
import React from "react";
import SubSection from "./SubSections";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { FiMessageSquare } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { useRouter } from "next/navigation";

const Appointments = () => {
  const router = useRouter();
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
            <div className="flex flex-row items-stretch gap-3 md:gap-2 w-full md:w-auto">
              <Buttonv2
                variant="primary_main"
                text="Calendar View"
                Icon={FiMessageSquare}
                className="text-xs md:text-sm flex-1 h-[40px] min-w-[120px]"
              />
              <Buttonv2
                variant="secondary_main"
                text="Book Appointment"
                Icon={CiCalendar}
                className="text-xs md:text-sm flex-1 h-[40px] min-w-[140px]"
                onClick={() =>
                  router.push("/home/Admin/appointments/add_appointment")
                }
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
