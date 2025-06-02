"use client";
import { ReportData } from "@/Components/Pages/Reports/ReportData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

const WeeklyDistributionBarChart = () => {
  const data = ReportData.appointmentReport.overview[0].weeklyDistribution;
  return (
    <div style={{ width: "100%", height: 450, padding: "20px 0px" }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: -30,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="appointments" fill="#8884D8" shape="rounded-md" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyDistributionBarChart;
