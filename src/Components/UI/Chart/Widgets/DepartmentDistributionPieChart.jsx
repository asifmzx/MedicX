

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Neurology", value: 38 },
  { name: "Cardiology", value: 45 },
  { name: "Orthopedics", value: 32 },
  { name: "Emergency", value: 20 },
  { name: "Oncology", value: 25 },
  { name: "Pediatrics", value: 28 },
];

const COLORS = [
  "#10B981",
  "#2563EB",
  "#FFBB28",
  "#82CA9D",
  "#8884D8",
  "#FF8042",
];

const DepartmentDistributionPieChart = () => {
  return (
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
  );
};
export default DepartmentDistributionPieChart;
