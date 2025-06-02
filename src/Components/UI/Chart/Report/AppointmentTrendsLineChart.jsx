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

const AppointmentTrendsLineChart = () => {
  const data = ReportData.appointmentReport.overview[0].appointmentTrends;

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
            dataKey="totalAppointment"
            stroke="#BA93D8"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="completed"
            stroke="#10B981"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="canceled"
            stroke="#FF7300"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          /><Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppointmentTrendsLineChart;
