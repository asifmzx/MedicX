"use client";
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

const AppointmentsByDepartment = () => {
  const data = ReportData.appointmentReport.overview[0].overviewBarChart;

  return (
    <div style={{ width: "100%", height: 400 }}>
      {" "}
      {/* Fixed height */}
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
            className="text-xs"
          />
          <Tooltip formatter={(value, name) => [`${value}`, name]} />
          <Bar dataKey="appointment" barSize={40} fill="#8884D8" />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppointmentsByDepartment;
