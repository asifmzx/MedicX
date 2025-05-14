"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "(18-22)",
    female: 140,
    male: 120,
  },
  {
    name: "(22-26)",
    female: 170,
    male: 150,
  },
  {
    name: "(26-30)",
    female: 280,
    male: 210,
  },
  {
    name: "(30-34)",
    female: 230,
    male: 190,
  },
  {
    name: "(41-50)",
    female: 180,
    male: 160,
  },
  {
    name: "(51-60)",
    female: 150,
    male: 140,
  },
  {
    name: "(61+)",
    female: 130,
    male: 110,
  },
];

const PatientDemographicsBarChart = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" interval={2} />
      <YAxis stroke="#2563EB" />
      <Tooltip />
      <Legend />
      <Bar dataKey="male" fill="#2563EB" />
      <Bar dataKey="female" fill="#EC4899" />
    </BarChart>
  );
};

export default PatientDemographicsBarChart;
