import { ReportData } from "@/Components/Pages/Reports/ReportData";
import Button from "@/Components/UI/Button/Button";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { TfiExport } from "react-icons/tfi";

const ConditionDepartment = () => {
  const data = ReportData.patientReport.ConditionDepartment;

  const columns = [
    { label: "Department", key: "Department" },
    { label: "Top Condition", key: "Top Condition" },
    { label: "Cases", key: "Cases" },
    { label: "% of Dept", key: "Dept" },
    { label: "Avg. Visits", key: "Avg. Visits" },
    { label: "Change", key: "Change" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-semibold">Condition by Department</p>
          <p className="text-gray-500 0 mt-3">
            Distribution of conditions by department
          </p>
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

export default ConditionDepartment;
