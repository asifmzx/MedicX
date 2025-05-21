import React from "react";
import UsageStatistics from "./UsageStatistics/UsageStatistics";
import HypertensionStandard from "./HypertensionStandard/HypertensionStandard";

const TemplateDetails = () => {
  return (
    <div className="p-4 md:p-6 bg-white rounded-xl max-w-full ">
      <div className="pb-6 ">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
          Template Details
        </h1>
        <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
          View detailed information about a selected template.
        </p>
      </div>
      <div className=" ">
        <HypertensionStandard />
        <UsageStatistics />
      </div>
    </div>
  );
};

export default TemplateDetails;
