import { ReportData } from "@/Components/Pages/Reports/ReportData";
import PTable from "@/Components/UI/Table/PTable";

const StockLevelByCategory = () => {
  const data = ReportData.inventoryReport.overview[0].stockLevelByCategory;

  const columns = [
    { label: "Category", key: "Category" },
    { label: "Total Items", key: "totalItems" },
    { label: "In Stock", key: "inStock" },
    { label: "Low Stock", key: "lowStock" },
    { label: "Out of Stock", key: "outOfStock" },
    { label: "Stock Value($)", key: "stockValue" },

    
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Stock Level by Category</p>
        <p className="text-gray-500 mt-3">
          Current stock levels across categories
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

export default StockLevelByCategory;
