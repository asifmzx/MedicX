import { ReportData } from "@/Components/Pages/Reports/ReportData";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const AppointmentStatusDistributionPieChart = () => {
  const data = ReportData.appointmentReport.overview[0].overviewPieChart;

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
                      data={data}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={110}
                      label={name => `${name.name} (${name.value})`}
          >
            {data.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppointmentStatusDistributionPieChart;
