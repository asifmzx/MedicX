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
    systolic: 120,
    diastolic: 80,
  },
  {
    name: "May 10",
    systolic: 115,
    diastolic: 82,
  },
  {
    name: "May 15",
    systolic: 120,
    diastolic: 85,
  },
  {
    name: "May 20",
    systolic: 120,
    diastolic: 83,
  },
];

const BloodPressureLineChart = () => {
  return (
    <LineChart width={600} height={200} data={data}>
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis domain={[60, 140]} />
      <Tooltip />

      <Line
        type="monotone"
        dataKey="systolic"
        stroke="#ff7300"
        activeDot={{ r: 6 }}
      />
      <Line type="monotone" dataKey="diastolic" stroke="#387908" />
    </LineChart>
  );
};
export default BloodPressureLineChart;
