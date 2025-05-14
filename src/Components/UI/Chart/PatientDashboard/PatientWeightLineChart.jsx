"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "May 5",
    weight: 120,
  },
  {
    name: "May 10",
    weight: 115,
  },
  {
    name: "May 15",
    weight: 120,
  },
  {
    name: "May 20",
    weight: 120,
  },
];

const PatientWeightLineChart = () => {
  return (
    <LineChart width={600} height={200} data={data}>
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis domain={[60, 140]} />
      <Tooltip />

      <Line
        type="monotone"
        dataKey="weight"
        stroke="#ff7300"
        activeDot={{ r: 6 }}
      />
    </LineChart>
  );
};
export default PatientWeightLineChart;
