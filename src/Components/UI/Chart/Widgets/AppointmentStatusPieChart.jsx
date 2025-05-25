"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Neurology", value: 30 },
  { name: "Cardiology", value: 45 },
  { name: "Orthopedics", value: 15 },
  { name: "Pediatrics", value: 10 },
];

const COLORS = ["#10B981", "#2563EB", "#FFBB28", "#FF8042"];

const AppointmentStatusPieChart = () => {
  return (
    <div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppointmentStatusPieChart;
