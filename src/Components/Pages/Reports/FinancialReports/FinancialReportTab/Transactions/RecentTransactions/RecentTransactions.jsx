import { ReportData } from "@/Components/Pages/Reports/ReportData";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";

const RecentTransactions = () => {
  const data = ReportData.financialReport.overview[0].recentTransactions;

  const columns = [
    { label: "Transaction ID", key: "transactionId" },
    { label: "Date", key: "Date" },
    { label: "Description", key: "Description" },
    { label: "Category", key: "Category" },

    {
      label: "Type",
      key: "Type",
      render: (row) => (
        <Status type="financialReport" variant={row.Type} text={row.Type} />
      ),
    },
    { label: "Amount", key: "Amount" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Recent Transactions</p>
        <p className="text-gray-500 mt-3">Latest financial transactions</p>
      </div>
      <div className="overflow-x-auto mt-4">
        <div className="min-w-[700px]">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
