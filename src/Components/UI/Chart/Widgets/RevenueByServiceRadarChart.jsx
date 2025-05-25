import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Consultations", A: 100, fullMark: 100 },
  { subject: "Diagnostics", A: 75, fullMark: 100 },
  { subject: "Surgeries", A: 86, fullMark: 100 },
  { subject: "Therapies", A: 70, fullMark: 100 },
  { subject: "Medications", A: 80, fullMark: 100 },
  { subject: "Emergency", A: 95, fullMark: 100 },
];

const RevenueByServiceRadarChart = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="#D8D8D8" />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Patients"
            dataKey="A"
            stroke="#4F46E5"
            fill="#4F46E5"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueByServiceRadarChart;
