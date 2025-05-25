import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", revinue: 120000, expenses: 80000 },
  { name: "Page B", revinue: 135000, expenses: 85000 },
  { name: "Page C", revinue: 150000, expenses: 90000 },
  { name: "Page D", revinue: 165000, expenses: 95000 },
  { name: "Page E", revinue: 195000, expenses: 105000 },
];

const MonthlyFinancialComparisonBarChart = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: -30 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revinue" barSize={100} fill="#8884D8" />
          <Line
            type="monotone"
            dataKey="expenses"
            strokeWidth={1.5}
            stroke="#ff7300"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyFinancialComparisonBarChart;
