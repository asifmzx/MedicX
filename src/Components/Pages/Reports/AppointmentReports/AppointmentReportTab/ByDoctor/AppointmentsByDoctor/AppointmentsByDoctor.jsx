import { ReportData } from "@/Components/Pages/Reports/ReportData";
import PTable from "@/Components/UI/Table/PTable";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const AppointmentsByDoctor = () => {
  const data = ReportData.appointmentReport.overview[0].appointmentByDoctor;

  const columns = [
    { label: "Doctor", key: "doctor" },
    { label: "Department", key: "department" },

    { label: "Total Appointments", key: "totalAppointments" },
    { label: "Completed", key: "completed" },
    { label: "Canceled", key: "canceled" },
    { label: "Not-Shows", key: "notShow" },

    {
      label: "Completion Rate",
      key: "completionRate",
      render: (row) => {
        const rate = ((row.completed / row.totalAppointments) * 100).toFixed(1);
        const isPositive = parseFloat(rate) >= 80;

        return (
          <p
            className={`flex items-center gap-2 ${
              isPositive ? "text-green-600" : "text-red-500"
            }`}
          >
            {rate}%<span>{isPositive ? <FaArrowUp /> : <FaArrowDown />}</span>
          </p>
        );
      },
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
        <div className="min-w-[700px] ">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentsByDoctor;
