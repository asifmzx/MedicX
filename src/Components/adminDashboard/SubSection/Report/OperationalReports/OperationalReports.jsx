import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbUsers } from "react-icons/tb";

const OperationalReports = () => {
  const reports = [
    {
      title: "Staff Performance Metrics",
      date: " Today",
    },
    {
      title: "Inventory Status",
      date: "Yesterday",
    },
    {
      title: "Room Utilization",
      date: "2 days ago",
    },
    {
      title: "Wait Time Analysis",
      date: "Last week",
    },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="mb-6 ">
        <h1 className="text-xl font-bold text-gray-800">Operational Reports</h1>
        <p className="text-gray-600">Staff, inventory, and efficiency</p>
      </div>
      {reports.map((report, index) => (
        <div
          key={index}
          className="flex justify-between items-center gap-x-1 py-2"
        >
          <div className="flex items-center gap-x-2">
            <p className="text-gray-500">
              <TbUsers />
            </p>
            <p className="text-xs">{report.title}</p>
          </div>
          <div className="flex items-center gap-x-2">
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
        View all operational reports
      </Link>
    </div>
  );
};

export default OperationalReports;
