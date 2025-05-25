import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";

const data = [
  { name: "Completed", value: 45 },
  { name: "Scheduled", value: 30 },
  { name: "Cancelled", value: 15 },
  { name: "No Show", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PaymentMethodsPieChart = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="60%"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>{" "}
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentMethodsPieChart;
