import { ReportData } from "@/Components/Pages/Reports/ReportData";
import PTable from "@/Components/UI/Table/PTable";
import React from "react";

const RevenueSources = () => {
  const data = ReportData.financialReport.overview[0].revenueSources;
  const columns = [
    { label: "Service", key: "Service" },
    { label: "Department", key: "Department" },
    { label: "Revenue", key: "Revenue" },

    {
      label: "Total",
      key: "Total",
      render: (row) => {
        const value = row.Revenue;
        return (
          <p>{value != null ? `${String(Math.floor(value))[0]}%` : "N/A"}</p>
        );
      },
    },
  ];
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Top Revenue Sources</p>
        <p className="text-gray-500 mt-3">
          Highest revenue generating services
        </p>
      </div>
      <div className="overflow-x-auto  mt-4">
        <div className="min-w-[300px] ">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default RevenueSources;
