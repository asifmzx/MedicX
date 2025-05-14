"use client";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Orthopedics",
    revenue: 12500,
  },
  {
    name: "Neurology",
    revenue: 10800,
  },
  {
    name: "Oncology",
    revenue: 8500,
  },
  {
    name: "Dermatology",
    revenue: 7200,
  },
  {
    name: "Psychiatry",
    revenue: 6300,
  },
  {
    name: "Ophthalmology",
    revenue: 5900,
  },
];

const RevenueSourcesBarChart = () => {
  return (
    <ComposedChart
      layout="vertical"
      width={300}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" interval={1} />
      <YAxis dataKey="name" interval={1} type="category" scale="band" />
      <Tooltip formatter={(value, name) => [`$${value}`, name]} />

      <Bar dataKey="revenue" barSize={30} fill="#10B981" />
    </ComposedChart>
  );
};
export default RevenueSourcesBarChart;
