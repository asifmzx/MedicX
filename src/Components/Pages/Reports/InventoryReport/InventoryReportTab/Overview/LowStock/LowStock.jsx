import { ReportData } from "@/Components/Pages/Reports/ReportData";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";


const LowStock = () => {
  const data = ReportData.inventoryReport.overview[0].lowStock;

  const columns = [
    { label: "Item Name", key: "itemName" },
    { label: "Category", key: "Category" },
    { label: "Current Stock(box)", key: "currentStock" },
    { label: "Reorder Level(box)", key: "reorderLevel" },
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
        <p className="text-3xl font-semibold">Top Low Stock Items</p>
        <p className="text-gray-500 mt-3">
          Items that need immediate attention
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
