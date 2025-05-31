import WorkingHours from "@/Components/Pages/Settings/WorkingHours/WorkingHours";
import BackButton from "@/Components/UI/Button/BackButton";
import Button from "@/Components/UI/Button/Button";
import React from "react";
import { BiSave } from "react-icons/bi";

const Page = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left Side: Back + Title */}
        <div className="flex items-center gap-x-3">
          <BackButton />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            Working Hours
          </h1>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Button
            variant="primary"
            text="Cancel"
            className="w-full sm:w-auto border border-gray-300"
          />
          <Button
            variant="secondary"
            text="Save Changes"
            Icon={BiSave}
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div>
        <WorkingHours />
      </div>
    </div>
  );
};

export default Page;
