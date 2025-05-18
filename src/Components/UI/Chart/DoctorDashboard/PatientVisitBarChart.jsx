"use client";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Jan", patient: 40 },
  { name: "Feb", patient: 50 },
  { name: "Mar", patient: 45 },
  { name: "Apr", patient: 60 },
  { name: "May", patient: 55 },
  { name: "Jun", patient: 70 },
  { name: "Jul", patient: 65 },
  { name: "Aug", patient: 55 },
  { name: "Sep", patient: 80 },
  { name: "Oct", patient: 75 },
  { name: "Nov", patient: 90 },
  { name: "Dec", patient: 85 },
];

const PatientVisitBarChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 20,
            left: -30,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="patient" fill="#6366F1" shape="rounded-md" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientVisitBarChart;
