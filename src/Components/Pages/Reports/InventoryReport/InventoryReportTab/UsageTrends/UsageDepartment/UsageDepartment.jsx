import { ReportData } from "@/Components/Pages/Reports/ReportData";
import Button from "@/Components/UI/Button/Button";
import PTable from "@/Components/UI/Table/PTable";
import { FiFilter } from "react-icons/fi";

const UsageDepartment = () => {
  const data = ReportData.inventoryReport.overview[0].usageDepartment;

  const columns = [
    { label: "Department", key: "Department" },
    { label: "Items Used", key: "ItemsUsed" },
    { label: "Usage Value", key: "UsageValue" },
    { label: "% of Total", key: "Total" },
    { label: "Change", key: "Change" },
    { label: "Top Item", key: "TopItem" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-3xl font-semibold">Usage by Department</p>
          <p className="text-gray-500 mt-3">
            Inventory consumption by department
          </p>
        </div>
        <div>
          <Button
            variant="primary"
            text="Filter"
            Icon={FiFilter}
            className="border border-gray-300"
          />
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <div className="min-w-[700px]">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default UsageDepartment;
