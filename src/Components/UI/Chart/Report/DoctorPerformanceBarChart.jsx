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

const DoctorPerformanceBarChar = () => {
  const data = ReportData.appointmentReport.overview[0].doctorPerformance;
  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <BarChart
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: -30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="completed" stackId="a" fill="#82CA9D" />
        <Bar dataKey="canceled" stackId="a" fill="#FF7300" />
        <Bar dataKey="notShows" stackId="a" fill="#8884D8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default DoctorPerformanceBarChar;
