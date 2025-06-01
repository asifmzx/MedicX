import React from "react";
import { IntegrationData, statusColors } from "../IntegrationsData";
import { Switch } from "antd";
import Button from "@/Components/UI/Button/Button";

const Active = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   ">
      {IntegrationData.active.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 border border-gray-300 rounded-lg"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-2xl font-semibold">{item.title}</p>
              <p>{statusColors[item.status]}</p>
            </div>
            <p className="mt-3 text-gray-500">{item.description}</p>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center space-x-3">
                <div className="bg-[#E7E7E7] p-3 rounded-full inline-block text-center ">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">{item.text1}</span>
                  <span className="text-sm text-gray-500">{item.text2}</span>
                </div>
              </div>
              <div>
                <Switch />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button
              variant="primary"
              text="Configure"
              className="w-full border border-gray-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Active;
