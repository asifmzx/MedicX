import { ReportData } from "@/Components/Pages/Reports/ReportData";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RevenueExpensesBarChart = () => {
  const data = ReportData.financialReport.overview[0].revenueExpenses;

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />

           <YAxis />

          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" barSize={40} fill="#E76E50" />
          <Bar dataKey="expenses" barSize={40} fill="#2A9D90" />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#274754"
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
export default RevenueExpensesBarChart;
