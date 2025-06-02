import { ReportData } from "@/Components/Pages/Reports/ReportData";
import PTable from "@/Components/UI/Table/PTable";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const ServicePopularity = () => {
  const data = ReportData.appointmentReport.overview[0].servicePopularity;

  const columns = [
    { label: "Service", key: "service" },
    { label: "Department", key: "department" },

    { label: "Appointments", key: "appointments" },
    { label: "Avg. Duration (min)", key: "avgDuration" },

    {
      label: "Trend",
      key: "trend",
      render: (row) => {
        const trend = ((row.avgDuration / row.appointments) * 100).toFixed(1);
        const isPositive = parseFloat(trend) >= 20;

        return (
          <p
            className={`flex items-center gap-2 ${
              isPositive ? "text-green-600" : "text-red-500"
            }`}
          >
            {trend}
            <span>{isPositive ? <FaArrowUp /> : <FaArrowDown />}</span>
          </p>
        );
      },
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Service Popularity</p>
        <p className="text-gray-500 mt-3">
          Most requested services ranked by volume
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

export default ServicePopularity;
