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
  { name: "Jan", review: 4 },
  { name: "Feb", review: 4.25 },
  { name: "Mar", review: 4.5 },
  { name: "Apr", review: 4.21 },
  { name: "May", review: 4 },
  { name: "Jun", review: 4.5 },
  { name: "Jul", review: 4.3 },
  { name: "Aug", review: 4.75 },
  { name: "Sep", review: 4.85 },
  { name: "Oct", review: 4.95 },
  { name: "Nov", review: 4.75 },
  { name: "Dec", review: 4.85 },
];

const PatientSatisfactionLineChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 0,
            right: 20,
            left: -30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="review" domain={[3.5, 5]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="review"
            stroke="#10B981"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientSatisfactionLineChart;
