import { Switch } from "antd";
import React from "react";

const SystemAccess = () => {
  const systems = [
    {
      title: "Patient Records",
      description: "Allow access to patient records",
    },
    {
      title: "Prescriptions",
      description: "Allow creating and managing prescriptions",
    },
    {
      title: "Billing",
      description: "Allow access to billing information",
    },
    {
      title: "Reports",
      description: "Allow access to reports and analytics",
    },
  ];
 
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-xl md:text-xl font-semibold tracking-tight mb-1">
          System Access
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className=" col-span-2 border-b border-gray-200 py-2">
          {systems.map((system, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 rounded-md"
            >
              <div>
                <p className="font-medium text-gray-800">{system.title}</p>
                <p className="text-sm text-gray-500">{system.description}</p>
              </div>
              <Switch />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default SystemAccess;
