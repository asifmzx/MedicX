import { Radio, Switch } from "antd";
import React from "react";

const PrescriptionOptions = () => {
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-md">
      <div>
        <h1 className="text-xl font-semibold tracking-tight mb-1">
          Prescription Options
        </h1>
      </div>
      <div>
        <div className="flex flex-col  gap-y-2 pt-3">
          <Radio value="Electronic Prescription">Electronic Prescription</Radio>
          <Radio value="Print Prescription">Print Prescription</Radio>
          <Radio value="Both Electronic and Print">
            Both Electronic and Print
          </Radio>
        </div>
        <div className="pt-3 space-y-3">
          <div className="flex items-center gap-x-2 font-semibold text-sm sm:text-base">
            <Switch />
            <p className="text-sm">Notify Patient</p>
          </div>
          <div className="flex items-center gap-x-2 font-semibold text-sm sm:text-base">
            <Switch />
            <p className="text-sm">Mark as Urgent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionOptions;
