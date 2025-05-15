"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Consultation", value: 25 },
  { name: "Follow Up", value: 20 },
  { name: "Procedure 1", value: 10 },
  { name: "Emergency", value: 5 },
  { name: "Other", value: 5 },
  { name: "Check-up", value: 35 },
];

const COLORS = [
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
  "#2563EB",
];

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#333"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {data[index].name}
    </text>
  );
};

export default function AppointmentTypesPieChart() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="30%"
            outerRadius={70}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
