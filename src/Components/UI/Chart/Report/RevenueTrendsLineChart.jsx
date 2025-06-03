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

const RevenueTrendsLineChart = () => {
  const data = ReportData.financialReport.overview[0].revenueTrends;
  return (
    <div style={{ width: "100%", height: 400 }}>
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
            dataKey="consultations"
            stackId="1"
            stroke="#F1A896"
            fill="#F1A896"
          />
          <Area
            type="monotone"
            dataKey="procedures"
            stackId="1"
            stroke="#7FC4BC"
            fill="#7FC4BC"
          />
          <Area
            type="monotone"
            dataKey="tests"
            stackId="1"
            stroke="#7D9198"
            fill="#7D9198"
          />
          <Area
            type="monotone"
            dataKey="surgeries"
            stackId="1"
            stroke="#F1DCA4"
            fill="#F1DCA4"
          />
          <Area
            type="monotone"
            dataKey="therapy"
            stackId="1"
            stroke="#F8C8A1"
            fill="#F8C8A1"
          />   <Legend />
        </AreaChart>
     
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueTrendsLineChart;
