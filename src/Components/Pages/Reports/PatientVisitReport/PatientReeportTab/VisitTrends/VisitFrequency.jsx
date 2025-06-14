import { ReportData } from "@/Components/Pages/Reports/ReportData";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";

const VisitFrequency = () => {
  const data = ReportData.patientReport.visitFrequency;

  const columns = [
    { label: "Visit Frequency", key: "Visit Frequency" },
    { label: "Patients", key: "Patients" },
    { label: "% of Total", key: "Total" },
    { label: "Avg. Duration", key: "Avg. Duration" },
    { label: "Change", key: "Change" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Visit Frequency</p>
        <p className="text-gray-500 mt-3">Patient visit frequency analysis</p>
      </div>
      <div className="overflow-x-auto mt-4">
        <div className="min-w-[700px]">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default VisitFrequency;
