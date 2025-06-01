import Button from "@/Components/UI/Button/Button";
import React from "react";
import { RiShareBoxLine } from "react-icons/ri";
const data = [
  {
    title: "API Documentation",
    description: "Complete API reference and guides",
  },
  {
    title: "SDK Documentation",
    description: "Client libraries and SDKs",
  },
  {
    title: "Webhook Events",
    description: "List of available webhook events",
  },
  {
    title: "Integration Tutorials",
    description: "Step-by-step integration guides",
  },
];
const IntegrationDocumentation = () => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md">
      <div>
        <p className="text-4xl font-semibold">Integration Documentation</p>
        <p className="text-gray-500 mt-3">
          Access documentation for available integrations
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 mt-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md "
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
                <div>
                  <Button
                    variant="View"
                    text="Verify"
                    className="h-10 px-4 border border-gray-300"
                    Icon={RiShareBoxLine}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationDocumentation;
