import { ReportData } from "@/Components/Pages/Reports/ReportData";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ReorderFrequencyBarChart = () => {
  const data = ReportData.inventoryReport.overview[0].reorderFrequency;

  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{ top: 30, right: 10, bottom: 0, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            type="category"
            scale="band"
            tick={{ fontSize: 12 }}
          />
          <Tooltip formatter={(value, name) => [`${value}`, name]} />
          <Bar dataKey="expenses" name="Expenses" barSize={40} fill="#E76E50" />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReorderFrequencyBarChart;
