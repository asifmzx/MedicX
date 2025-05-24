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

const PatientAdmissionBarChart = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 0, right: 10, bottom:20, left: -30 }} // negative left margin
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" padding={{ left: 0, right: 0 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="admission" barSize={30} fill="#8884D8" />
          <Line type="monotone" dataKey="admission" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientAdmissionBarChart;
