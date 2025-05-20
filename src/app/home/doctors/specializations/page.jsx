import DoctorSpecializations from "@/Components/Doctors/DoctorSpecializations/DoctorSpecializations";
import BackButton from "@/Components/UI/Button/BackButton";
import React from "react";

const Page = () => {
  return (
    <div className="p-4 ">
      <div className="flex items-center gap-x-4">
        <div>
          <BackButton />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
            Specializations
          </h1>
          <p className="text-gray-600">
            Manage medical specializations in your clinic.
          </p>
        </div>
      </div>
      <div className="pt-6">
        <DoctorSpecializations />
      </div>
    </div>
  );
};

export default Page;
