"use client";

import { Progress } from "antd";
import { ReportData } from "../../ReportData";

const FinancialReportCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {ReportData.financialReport.card.map((item, index) => (
        <div
          key={index}
          className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold">{item.title}</p>
            <p>{item.icon}</p>
          </div>
          <div className="mt-10">
            <p className="text-4xl font-semibold">{item.progressValue}</p>
            <p className="text-sm text-gray-500">{item.text}</p>
            <Progress
              percent={item.progressValue}
              showInfo={false}
              strokeWidth={3}
              strokeColor={item.progressColor}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinancialReportCard;
