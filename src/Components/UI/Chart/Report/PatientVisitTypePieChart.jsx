"use client";

import { ReportData } from "@/Components/Pages/Reports/ReportData";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const PatientVisitTypePieChart = () => {
  const data = ReportData.patientReport.visitTypesPieChart;

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(1)}%)`
            }
          >
            {data.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [`${value} appointments`, name]}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientVisitTypePieChart;