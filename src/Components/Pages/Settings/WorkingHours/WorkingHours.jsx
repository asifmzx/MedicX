import React from "react";
import AppointmentSlots from "./AppointmentSlots/AppointmentSlots";
import ClinicHours from "./ClinicHours/ClinicHours";
import BreakTimes from "./BreakTimes/BreakTimes";
import SpecialHours from "./SpecialHours/SpecialHoursAndHoliDay";

const WorkingHours = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full md:min-h-[calc(100vh-100px)]">
      {/* Left Column: Clinic Hours */}
      <div className="w-full h-full">
        <ClinicHours />
      </div>

      {/* Right Column: Breaks & Special Hours */}
      <div className="w-full flex flex-col gap-6 h-full">
        <BreakTimes />
        <SpecialHours />
      </div>

      {/* Full Width: Appointment Slots */}
      <div className="col-span-1 md:col-span-2">
        <AppointmentSlots />
      </div>
    </div>
  );
};

export default WorkingHours;
