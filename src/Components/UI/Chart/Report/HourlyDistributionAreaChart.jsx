import { ReportData } from "@/Components/Pages/Reports/ReportData";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const HourlyDistributionAreaChart = () => {
   const data = ReportData.appointmentReport.overview[0].hourlyDistribution;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 300,
        padding: "20px 0px",
      }}
    >
      <ResponsiveContainer width="100%" height={410}>
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: -30,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="appointment"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HourlyDistributionAreaChart;
