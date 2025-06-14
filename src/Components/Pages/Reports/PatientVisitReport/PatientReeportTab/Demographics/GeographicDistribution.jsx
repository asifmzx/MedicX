import { ReportData } from "@/Components/Pages/Reports/ReportData";
import Button from "@/Components/UI/Button/Button";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { TfiExport } from "react-icons/tfi";

const GeographicDistribution = () => {
  const data = ReportData.patientReport.GeographicDistribution;

  const columns = [
    { label: "Location", key: "Location" },
    { label: "Patients", key: "Patients" },
    { label: "% of Total", key: "Total" },
    { label: "Avg. Visits", key: "Avg. Visits" },
    { label: "Change", key: "Change" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-semibold">Geographic Distribution</p>
          <p className="text-gray-500 0 mt-3">Patient visits by location</p>
        </div>
        <Button
          text="Export"
          variant="primary"
          Icon={TfiExport}
          className="border border-gray-300"
        />
      </div>
      <div className="overflow-x-auto mt-4">
        <div className="min-w-[700px]">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default GeographicDistribution;
