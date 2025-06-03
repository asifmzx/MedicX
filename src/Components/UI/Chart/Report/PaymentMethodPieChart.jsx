import { ReportData } from "@/Components/Pages/Reports/ReportData";
import { PieChart, Pie, ResponsiveContainer, Legend } from "recharts";



const PaymentMethodPieChart = () => {
  const data = ReportData.financialReport.overview[0].paymentMethod;
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(1)}%`
            }
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentMethodPieChart;
