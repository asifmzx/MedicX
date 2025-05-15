"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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
    <div style={{ width: "100%", height: "250px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 30, right: 20, left: 0, bottom: 10 }} 
          layout="horizontal"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={2}
            
          />
          <YAxis stroke="#2563EB" />
          <Tooltip />
          <Legend />
          <Bar dataKey="male" fill="#2563EB" name="Male" />
          <Bar dataKey="female" fill="#EC4899" name="Female" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientDemographicsBarChart;
