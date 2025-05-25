import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", admission: 120 },
  { name: "Fev", admission: 135 },
  { name: "Mar", admission: 150 },
  { name: "Apr", admission: 165 },
  { name: "May", admission: 185 },
  { name: "Jun", admission: 195 },
  { name: "Jul", admission: 210 },
  { name: "Aug", admission: 225 },
  { name: "Sep", admission: 240 },
  { name: "Oct", admission: 255 },
  { name: "Nov", admission: 270 },
  { name: "Dec", admission: 285 },
];

const PatientAdmissionLineChart = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 0, right: 20, bottom: 20, left: -30 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="admission"
            stroke="#D7B0FC"
            strokeWidth={1.5}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientAdmissionLineChart;
