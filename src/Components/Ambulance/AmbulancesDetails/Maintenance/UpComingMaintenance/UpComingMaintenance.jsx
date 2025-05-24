import Button from "@/Components/UI/Button/Button";
import React from "react";

const UpComingMaintenance = () => {
  return (
    <div>
      <div className="py-6">
        <p className="text-xl font-semibold">Upcoming Maintenance</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="pb-4">
          <p className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
            Regular Service
          </p>
          <p className="text-gray-500">Scheduled for 2023-07-02</p>
        </div>
        <div>
          <ul className="space-y-2 list-disc pl-5">
            <li>Oil and filter change</li>
            <li>Brake inspection</li>
            <li>Tire rotation and pressure check</li>
            <li>Fluid levels check and top-up</li>
            <li>General safety inspection</li>
          </ul>
          <div className="flex justify-end mt-6">
            <Button
              variant="primary"
              text="Reschedule"
              className="border border-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingMaintenance;
