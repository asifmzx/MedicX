"use client";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Orthopedics", revenue: 12500 },
  { name: "Neurology", revenue: 10800 },
  { name: "Oncology", revenue: 8500 },
  { name: "Dermatology", revenue: 7200 },
  { name: "Psychiatry", revenue: 6300 },
  { name: "Ophthalmology", revenue: 5900 },
];

const RevenueSourcesBarChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{ top: 30, right: 20, bottom: 50, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            type="category"
            scale="band"
            className="text-xs"
          />
          <Tooltip formatter={(value, name) => [`$${value}`, name]} />
          <Bar dataKey="revenue" barSize={30} fill="#10B981" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueSourcesBarChart;
