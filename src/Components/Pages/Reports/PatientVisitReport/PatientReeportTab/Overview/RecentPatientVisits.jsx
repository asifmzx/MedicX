import { ReportData } from "@/Components/Pages/Reports/ReportData";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";

const RecentPatientVisits = () => {
  const data = ReportData.patientReport.recentPatientVisits;

  const columns = [
    { label: "Patient", key: "Patient" },
    { label: "Visit Date", key: "Visit Date" },
    { label: "Department", key: "Department" },
    { label: "Doctor", key: "Doctor" },
    { label: "Visit Type", key: "Visit Type" },

    {
      label: "Status",
      key: "Status",
      render: (row) => (
        <Status type="patientReport" variant={row.Status} text={row.Status} />
      ),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Recent Patient Visits</p>
        <p className="text-gray-500 mt-3">
          Latest patient visits and their details
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

export default RecentPatientVisits;
