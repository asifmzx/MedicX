"use client";
import { BarChart, Bar, XAxis, Legend } from "recharts";

const data = [
  {
    name: "jan",
    patient: 200,
    total: 8400,
    amt: 2400,
  },
  {
    name: "fev",
    patient: 300,
    total: 2398,
    amt: 2210,
  },
  {
    name: "mar",
    patient: 400,
    total: 3800,
    amt: 2290,
  },
  {
    name: "apr",
    patient: 250,
    total: 8400,
    amt: 2000,
  },
  {
    name: "may",
    patient: 220,
    total: 6800,
    amt: 2181,
  },
  {
    name: "jun",
    patient: 190,
    total: 5000,
    amt: 2500,
  },
  {
    name: "jul",
    patient: 200,
    total: 7300,
    amt: 2100,
  },
  {
    name: "aug",
    patient: 200,
    total: 5398,
    amt: 2210,
  },
  {
    name: "sep",
    patient: 200,
    total: 6800,
    amt: 2290,
  },
  {
    name: "oct",
    patient: 200,
    total: 9908,
    amt: 2000,
  },
  {
    name: "nov",
    patient: 200,
    total: 8800,
    amt: 2181,
  },
  {
    name: "dec",
    patient: 200,
    total: 7800,
    amt: 2500,
  },
];

const AdminOverviewBarChart = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />

      <Legend />
      <Bar dataKey="total" fill="#2563EB" />
      <Bar dataKey="patient" fill="#16A34A" />
    </BarChart>
  );
};

export default AdminOverviewBarChart;
