import React from "react";
import BackButton from "@/Components/UI/Button/BackButton";
import SubSection from "./SubSection";

const AppointmentRequests = () => {
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
                <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-1">
                  Appointment Requests
                </h1>
                <p className="text-gray-600 mb-2 font-normal">
                  Manage patient appointment requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <SubSection />
      </div>
    </div>
  );
};

export default AppointmentRequests;
