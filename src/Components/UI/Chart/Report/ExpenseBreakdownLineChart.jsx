"use client";
import { ReportData } from "@/Components/Pages/Reports/ReportData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ExpenseBreakdownLineChart = () => {
  const data = ReportData.financialReport.overview[0].expenseBreakdown;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 300,
        padding: "10px 0px",
      }}
    >
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 30,
            right: 20,
            left: -10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="salaries"
            stroke="#BA93D8"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="supplies"
            stroke="#10B981"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="maintenance"
            stroke="#FB9919"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="utilities"
            stroke="#FF7300"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="administrative"
            stroke="#193768"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseBreakdownLineChart;
