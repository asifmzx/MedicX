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

const ConditionTrendsLineChart = () => {
  const data = ReportData.patientReport.ConditionTrends;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 300,
      
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
            dataKey="Hypertension"
            stroke="#E76E50"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Diabetes"
            stroke="#7EC4BC"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />

          <Line
            type="monotone"
            dataKey="Respiratory Infections"
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

export default ConditionTrendsLineChart;
