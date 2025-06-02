"use client";
import { ReportData } from "@/Components/Pages/Reports/ReportData";
import PTable from "@/Components/UI/Table/PTable";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import { MdOutlineTrendingDown } from "react-icons/md";

const FinancialSummary = () => {
  const rawData = ReportData.financialReport.overview[0].financialSummary;

  const data = rawData.map((row, index, arr) => {
    if (index === 0)
      return {
        ...row,
        growth: 0,
        margin: ((row.profit / row.revenue) * 100).toFixed(1) + "%",
      };

    const prevRevenue = arr[index - 1].revenue;
    const growth = ((row.revenue - prevRevenue) / prevRevenue) * 100;

    return {
      ...row,
      growth: parseFloat(growth.toFixed(1)),
      margin: ((row.profit / row.revenue) * 100).toFixed(1) + "%",
    };
  });
  

  const columns = [
    { label: "Month", key: "month" },
    {
      label: "Revenue",
      key: "revenue",
      render: (row) => <div>${row.revenue.toLocaleString()}</div>,
    },
    {
      label: "Expenses	",
      key: "expenses",
      render: (row) => <div>${row.expenses.toLocaleString()}</div>,
    },
    {
      label: "Profit",
      key: "profit",
      render: (row) => <div>${row.profit.toLocaleString()}</div>,
    },
    { label: "Margin", key: "margin" },

    {
      label: "Growth",
      key: "growth",
      render: (row) => {
        const isPositive = row.growth >= 0;

        return (
          <p
            className={`flex items-center gap-2 ${
              isPositive ? "text-green-600" : "text-red-500"
            }`}
          >
            {row.growth}%
            <span>
              {isPositive ? <FiTrendingUp /> : <MdOutlineTrendingDown />}
            </span>
          </p>
        );
      },
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Financial Summary</p>
        <p className="text-gray-500 mt-3">
          Monthly financial performance metrics
        </p>
      </div>
      <div className="overflow-x-auto mt-4">
        <div className="min-w-[700px] ">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
