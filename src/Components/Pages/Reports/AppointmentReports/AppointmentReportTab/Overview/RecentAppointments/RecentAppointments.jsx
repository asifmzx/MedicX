import { ReportData } from "@/Components/Pages/Reports/ReportData";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { FaRegFileLines } from "react-icons/fa6";

const RecentAppointments = () => {
  const data = ReportData.appointmentReport.overview[0].recentAppointment;

  const columns = [
    { label: "Patient", key: "patient" },
    { label: "Doctor", key: "doctor" },
    { label: "Date", key: "date" },
    { label: "Time", key: "time" },
    { label: "Service", key: "service" },
    {
      label: "Status",
      key: "status",
      render: (row) => (
        <Status type="report" variant={row.status} text={row.status} />
      ),
    },
    {
      label: "Actions",
      key: "action",
      render: () => (
        <button className="text-xl text-gray-500 hover:text-gray-700 ">
          <FaRegFileLines />
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Recent Appointments</p>
        <p className="text-gray-500 mt-3">
          Detailed view of the last 10 appointments
        </p>
      </div>
      <div className="overflow-x-auto mt-4">
        <div className="min-w-[700px]">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default RecentAppointments;
