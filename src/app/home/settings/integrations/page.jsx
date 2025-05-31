import Integrations from "@/Components/Pages/Settings/Integrations/Integrations";
import BackButton from "@/Components/UI/Button/BackButton";
import Button from "@/Components/UI/Button/Button";
import React from "react";
import { BiSave } from "react-icons/bi";
import { LiaSyncAltSolid } from "react-icons/lia";

const Page = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left Side: Back + Title */}
        <div className="flex items-center gap-x-3">
          <BackButton />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            Integrations
          </h1>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Button
            variant="primary"
            text="Refresh"
            Icon={LiaSyncAltSolid}
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
        <Integrations />
      </div>
    </div>
  );
};

export default Page;
