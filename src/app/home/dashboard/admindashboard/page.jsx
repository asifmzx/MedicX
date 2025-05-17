'use client'
import Card from "@/Components/adminDashboard/Card";
import SubSection from "@/Components/adminDashboard/SubSection/SubSection";
import Button from "@/Components/UI/Button/Button";
import { CiCalendar } from "react-icons/ci";
import { TfiImport } from "react-icons/tfi";

const Page = () => {
  return (
    <div className="p-4 bg-[#E7F2E4]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        {/* Left: Title and Subtitle */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
            Dashboard
          </h1>
          <p className="text-sm text-gray-600">
            Welcome back, Dr. Johnson! Here's what's happening today.
          </p>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="primary" text="Date" Icon={CiCalendar} />
          <Button variant="primary" text="Export" Icon={TfiImport} />
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
