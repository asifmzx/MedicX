import Button from "@/Components/UI/Button/Button";
import Image from "next/image";
import React from "react";

const RecentReportActivity = () => {
  const reports = [
    {
      name: "Dr. Johnson generated Monthly Revenue Summary",
      date: "Today",
      img: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
    },
    {
      name: "Admin Sarah viewed Staff Performance Metrics",
      date: "3 days ago",
      img: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
    },
    {
      name: "Dr. Rodriguez generated Patient Demographics",
      date: "Last week",
      img: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
    },
    {
      name: "Nurse Kim viewed Inventory Status",
      date: "Yesterday",
      img: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
    },
    {
      name: "Dr. Chen generated Treatment Outcomes",
      date: "Yesterday",
      img: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
    },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">
          Recent Report Activity
        </h1>
        <p className="text-gray-600">Reports generated or viewed recently</p>
      </div>
      {reports.map((report, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 py-4 border-b border-gray-200"
        >
          <div className="flex items-start sm:items-center gap-4">
            <Image
              src={report.img}
              alt={report.name}
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">{report.name}</p>
              <p className="text-gray-500 text-xs">Updated: {report.date}</p>
            </div>
          </div>
          <div className="sm:ml-auto">
            <Button variant="secondary" text="View" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentReportActivity;
