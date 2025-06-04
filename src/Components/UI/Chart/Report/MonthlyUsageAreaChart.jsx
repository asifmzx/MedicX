import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ReportData } from "@/Components/Pages/Reports/ReportData";

const MonthlyUsageAreaChart = () => {
  const data = ReportData.inventoryReport.overview[0].monthlyUsage;
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="medications"
            stackId="1"
            stroke="#F1A896"
            fill="#F1A896"
          />
          <Area
            type="monotone"
            dataKey="supplies"
            stackId="1"
            stroke="#7FC4BC"
            fill="#7FC4BC"
          />
          <Area
            type="monotone"
            dataKey="equipment"
            stackId="1"
            stroke="#7D9198"
            fill="#7D9198"
          />
          <Area
            type="monotone"
            dataKey="office"
            stackId="1"
            stroke="#F1DCA4"
            fill="#F1DCA4"
          />
          <Area
            type="monotone"
            dataKey="laboratory"
            stackId="1"
            stroke="#F8C8A1"
            fill="#F8C8A1"
          />{" "}
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyUsageAreaChart;
