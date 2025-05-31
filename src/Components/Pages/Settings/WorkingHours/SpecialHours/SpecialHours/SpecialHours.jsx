import Button from "@/Components/UI/Button/Button";
import React from "react";
import { FiPlus } from "react-icons/fi";

const SpecialHours = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Date</label>
          <input
            type="date"
            defaultValue="2023-10-01"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Start Time</label>
          <input
            type="time"
            defaultValue="21:00"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">End Time</label>
          <input
            type="time"
            defaultValue="22:00"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>
      </div>

      <Button
        variant="primary"
        text="Add Special Hours"
        Icon={FiPlus}
        className="w-full md:w-auto border border-gray-300"
      />
    </div>
  );
};

export default SpecialHours;
