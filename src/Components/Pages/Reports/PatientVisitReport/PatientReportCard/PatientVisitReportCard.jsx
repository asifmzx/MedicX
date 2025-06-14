"use client";

import { ReportData } from "../../ReportData";

const PatientVisitReportCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {ReportData.patientReport.card.map((item, index) => (
        <div
          key={index}
          className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold">{item.title}</p>
            {item.icon ? (
              <p>{item.icon}</p>
            ) : item.duration ? (
              <p className="border border-gray-300 px-3 font-semibold rounded-full">
                {item.duration}min
              </p>
            ) : item.rate ? (
              <p className="border border-gray-300 px-3 font-semibold rounded-full">
                {item.rate}%
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
export default PatientVisitReportCard;
