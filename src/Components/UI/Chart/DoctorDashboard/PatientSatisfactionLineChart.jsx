"use client";
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

const data = [
  {
    name: "jan",

    review: 4,
  },
  {
    name: "fev",

    review: 4.25,
  },
  {
    name: "mar",

    review: 4.5,
  },
  {
    name: "apr",

    review: 4.21,
  },
  {
    name: "may",

    review: 4,
  },
  {
    name: "jun",

    review: 4.5,
  },
  {
    name: "jul",

    review: 4.3,
  },
  {
    name: "aug",

    review: 4.75,
  },
  {
    name: "sep",

    review: 4.85,
  },
  {
    name: "oct",

    review: 4.95,
  },
  {
    name: "nov",

    review: 4.75,
  },
  {
    name: "dec",

    review: 4.85,
  },
];

const PatientSatisfactionLineChart = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="review" domain={[3.5, 5]} />
      <Tooltip />

      <Line
        type="monotone"
        dataKey="review"
        stroke="#10B981"
        strokeWidth={2}
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="patient" stroke="#82ca9d" />
    </LineChart>
  );
};
export default PatientSatisfactionLineChart;
