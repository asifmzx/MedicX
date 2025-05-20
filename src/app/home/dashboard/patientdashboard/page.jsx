import React from "react";
import Card from "@/Components/patientDashboard/Card";
import SubSection from "@/Components/patientDashboard/SubSection/SubSection";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { FiMessageSquare } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";

const Page = () => {
  return (
    <div className="p-4 bg-[#E7F2E4]">
      <div className="flex justify-between items-center">
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                Welcome back, Sarah
              </h1>
              <p className="text-gray-600 mb-2">
                Your health dashboard - manage your care all in one place
              </p>
            </div>
            <div className="flex md:flex-col lg:flex-row items-start justify-center gap-2">
              <Buttonv2
                variant="primary_main"
                text="Message Doctor"
                Icon={FiMessageSquare}
                className="text-sm"
              />
              <Buttonv2
                variant="secondary_main"
                text="Book Appointment"
                Icon={CiCalendar}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <Card />
      </div>
      <div>
        <SubSection />
      </div>
    </div>
  );
};

export default Page;
