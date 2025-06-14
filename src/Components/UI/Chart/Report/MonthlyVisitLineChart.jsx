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

const MonthlyVisitLineChart = () => {
  const data = ReportData.patientReport.MonthlyVisitLineChart;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 300,
        padding: "10px 0px",
      }}
    >
      <ResponsiveContainer width="100%" height={300}>
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
            dataKey="totalVisits"
            stroke="#E76E50"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />

          <Line
            type="monotone"
            dataKey="newPatients"
            stroke="#7EC4BC"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyVisitLineChart;
