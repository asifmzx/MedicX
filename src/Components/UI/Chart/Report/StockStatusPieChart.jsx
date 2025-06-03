import { ReportData } from "@/Components/Pages/Reports/ReportData";
import { PieChart, Pie, ResponsiveContainer, Legend } from "recharts";

const StockStatusPieChart = () => {
  const data = ReportData.inventoryReport.overview[0].stockStatusPieChart;
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(1)}%`
            }
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockStatusPieChart;
