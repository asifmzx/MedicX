"use client";

import { Progress } from "antd";
import { ReportData } from "../../ReportData";

const InventoryReportCard = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {ReportData.inventoryReport.card.map((item, index) => (
        <div
          key={index}
          className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold">{item.title}</p>
            {item.icon ? (
              <p>{item.icon}</p>
            ) : item.SCount ? (
              <p className="bg-red-100 text-red-700 px-3 py-1 rounded-xl">
                {item.SCount}
              </p>
            ) : item.ECount ? (
              <p className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-xl">
                {item.ECount}
              </p>
            ) : null}
          </div>
          <div className="mt-10">
            <p className="text-4xl font-semibold">{item.value}</p>
            <p className="text-sm text-gray-500">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryReportCard;
