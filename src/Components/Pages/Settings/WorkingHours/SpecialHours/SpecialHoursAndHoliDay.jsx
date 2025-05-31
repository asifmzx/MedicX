import React from "react";
import SpecialHourTab from "./SpecialHourTab/SpecialHourTab";

const SpecialHoursAndHoliDay = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-full space-y-4">
      <div>
        <p className="text-3xl font-semibold">Special Hours & Holidays</p>
        <p className="text-gray-500 text-sm mt-2">
          Set special operating hours or mark holidays
        </p>
      </div>
      <div>
        <SpecialHourTab />
      </div>
    </div>
  );
};

export default SpecialHoursAndHoliDay;
