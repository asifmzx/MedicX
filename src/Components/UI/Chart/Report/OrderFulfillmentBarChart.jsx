import { ReportData } from "@/Components/Pages/Reports/ReportData";
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

const OrderFulfillmentBarChart = () => {
  const data = ReportData.inventoryReport.overview[0].orderFulfillment;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 30,
          right:0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#E76E50" />
        <YAxis yAxisId="right" orientation="right" stroke="#2A9D90" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="Rate" fill="#E76E50" />
        <Bar yAxisId="right" dataKey="Time" fill="#2A9D90" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default OrderFulfillmentBarChart;
