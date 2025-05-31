import Button from "@/Components/UI/Button/Button";
import React from "react";
import { FiPlus } from "react-icons/fi";

const Holidays = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date */}
        <div>
          <label className="block mb-1 text-sm font-medium">Date</label>
          <input
            type="date"
            defaultValue="2023-10-01"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        {/* Start Time */}
        <div>
          <label className="block mb-1 text-sm font-medium">Holiday Name</label>
          <input
            type="text"
            placeholder="e.g. Christmas"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>
      </div>

      {/* Button */}
      <Button
        variant="primary"
        text="Add Holiday"
        Icon={FiPlus}
        className="w-full md:w-auto border border-gray-300"
      />
    </div>
  );
};

export default Holidays;
