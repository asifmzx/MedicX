import React from "react";
import { ReportData } from "../ReporData";

const Overview = () => {
  return (
    <div className="p-5">
      <div>
        <p className="text-3xl font-semibold">Reports</p>
        <p className="text-gray-500 mt-3">
          Access and generate detailed reports for your clinic
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {ReportData.overview.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 mt-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold flex items-center gap-x-3">
                  {item.icon} {item.title}
                </h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
