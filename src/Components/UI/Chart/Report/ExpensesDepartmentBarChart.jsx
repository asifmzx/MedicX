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

const ExpensesDepartmentBarChart = () => {
  const data = ReportData.financialReport.overview[0].expenseDepartment;

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{ top: 40, right: 20, bottom: 10, left: 20 }}
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

export default ExpensesDepartmentBarChart;
