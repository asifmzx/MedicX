import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Cardiology", patients: 45 },
  { name: "Neurology", patients: 38 },
  { name: "Orthopedics", patients: 32 },
  { name: "Pediatrics", patients: 28 },
  { name: "Oncology", patients: 25 },
  { name: "Emergency", patients: 20 },
];

const DepartmentDistributionBarChart = () => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="patients" barSize={40} fill="#82CA9D" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepartmentDistributionBarChart;
