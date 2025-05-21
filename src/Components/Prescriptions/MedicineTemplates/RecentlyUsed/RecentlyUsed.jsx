import React from "react";
import TemplateDetails from "../AllTemplates/TemplateDetails/TemplateDetails";

const RecentlyUsed = () => {
  return (
    <div className="space-y-4">
      <div className="pb-6 h-[40vh] bg-white rounded-xl p-4 flex flex-col justify-center">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
          Recently Used Templates
        </h1>
        <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
          Templates that have been used in the last 30 days.
        </p>
        <div className="flex justify-center items-center flex-grow">
          <p className="text-gray-500">No recently used templates found</p>
        </div>
      </div>
      <div>
        <TemplateDetails />
      </div>
    </div>
  );
};

export default RecentlyUsed;
