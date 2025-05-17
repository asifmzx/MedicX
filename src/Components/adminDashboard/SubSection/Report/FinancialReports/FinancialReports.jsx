import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TfiMoney } from "react-icons/tfi";

const FinancialReports = () => {
  const reports = [
    {
      title: "Monthly Revenue Summary",
      date: "Today",
    },
    {
      title: "Quarterly Financial Analysis",
      date: "Today",
    },
    {
      title: "Insurance Claims Report",
      date: "2 days ago",
    },
    {
      title: "Outstanding Payments",
      date: "Yesterday",
    },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="mb-6 ">
        <h1 className="text-xl font-bold text-gray-800">Financial Reports</h1>
        <p className="text-gray-600">Revenue, expenses, and billing</p>
      </div>
      {reports.map((report, index) => (
        <div
          key={index}
          className="flex justify-between items-center gap-x-1 py-2"
        >
          <div className="flex items-center gap-x-2">
            <p className="text-gray-500">
              <TfiMoney />
            </p>
            <p className="text-xs">{report.title}</p>
          </div>
          <div className="flex items-center  gap-x-1">
            <p className="text-gray-500 text-xs">Updated: {report.date}</p>
            <p>
              <MdKeyboardArrowRight />
            </p>
          </div>
        </div>
      ))}
      <Link
        href="/home/dashboard/admindashboard"
        className="hover:border-b text-sm"
      >
        View all financial reports
      </Link>
    </div>
  );
};

export default FinancialReports;
