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
    glucose: 120,
  },
  {
    name: "May 10",
    glucose: 115,
  },
  {
    name: "May 15",
    glucose: 120,
  },
  {
    name: "May 20",
    glucose: 120,
  },
];

const BloodGlucoseLineChart = () => {
  return (
    <LineChart width={600} height={200} data={data}>
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis domain={[60, 140]} />
      <Tooltip />

      <Line
        type="monotone"
        dataKey="glucose"
        stroke="#ff7300"
        activeDot={{ r: 6 }}
      />
    </LineChart>
  );
};
export default BloodGlucoseLineChart;
