import { ReportData } from "@/Components/Pages/Reports/ReportData";
import Button from "@/Components/UI/Button/Button";
import PTable from "@/Components/UI/Table/PTable";
import { FiFilter } from "react-icons/fi";
import { TfiExport } from "react-icons/tfi";

const SupplierPerformance = () => {
  const data = ReportData.inventoryReport.overview[0].supplierPerformance;

  const columns = [
    { label: "Supplier", key: "Supplier" },
    { label: "Items Supplied", key: "Items Supplied" },
    { label: "Order Value", key: "Order Value" },
    { label: "Fulfillment Rate", key: "Fulfillment Rate" },
    { label: "Avg. Delivery Time", key: "Avg. Delivery Time" },
    { label: "Quality Rating", key: "Quality Rating" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-3xl font-semibold">Supplier Performance</p>
          <p className="text-gray-500 mt-3">
            Performance metrics for each supplier
          </p>
        </div>
        <div>
          <Button
            variant="primary"
            text="Export"
            Icon={TfiExport}
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

export default SupplierPerformance;
