import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";

const PatientReports = () => {
  const reports = [
    {
      title: "New Patient Registrations",
      date: " Today",
    },
    {
      title: "Patient Demographics",
      date: " 3 days ago",
    },
    {
      title: "Visit Frequency Analysis",
      date: "Last week",
    },
    {
      title: "Treatment Outcomes",
      date: "Yesterday",
    },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="mb-6 ">
        <h1 className="text-xl font-bold text-gray-800">Patient Reports</h1>
        <p className="text-gray-600">Demographics and visit analytics</p>
      </div>
      {reports.map((report, index) => (
        <div
          key={index}
          className="flex justify-between items-center gap-x-1 py-2"
        >
          <div className="flex items-center gap-x-2">
            <p className="text-gray-500">
              <FiUser />
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
        View all patient reports
      </Link>
    </div>
  );
};

export default PatientReports;
