import { ReportData } from "@/Components/Pages/Reports/ReportData";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { FaRegFileLines } from "react-icons/fa6";

const LowStock = () => {
  const data = ReportData.inventoryReport.overview[0].lowStock;

  const columns = [
    { label: "Item Name", key: "itemName" },
    { label: "Category", key: "Category" },
    { label: "Current Stock", key: "currentStock" },
    { label: "Reorder Level", key: "reorderLevel" },
    { label: "Supplier", key: "Supplier" },

    {
      label: "Status",
      key: "Status",
      render: (row) => (
        <Status type="lowStockItem" variant={row.Status} text={row.Status} />
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

export default LowStock;
