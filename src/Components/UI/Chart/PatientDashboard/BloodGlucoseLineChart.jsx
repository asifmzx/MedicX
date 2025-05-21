"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "May 5",
    glucose: 120,
  },
  {
    name: "May 10",
    glucose: 115,
  },
  {
    name: "May 15",
    glucose: 120,
  },
  {
    name: "May 20",
    glucose: 120,
  },
];

const BloodGlucoseCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Blood Glucose</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Latest Reading Card */}
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-500 mb-1">Latest Reading</p>
            <p className="text-2xl font-bold text-orange-600 mb-1">120 mg/dL</p>
            <p className="text-xs text-gray-500">May 20, 2023</p>
          </div>

          {/* Average Card */}
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-500 mb-1">Average (30 days)</p>
            <p className="text-2xl font-bold text-green-600 mb-1">118 mg/dL</p>
            <p className="text-xs text-green-600 font-medium">Normal Range</p>
          </div>

          {/* Goal Card */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-500 mb-1">Target Range</p>
            <p className="text-2xl font-bold text-purple-600 mb-1">70-130 mg/dL</p>
            <p className="text-xs text-purple-600 font-medium">Within Range</p>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 0, right: 20, left: -30, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: '#64748b', fontSize: 12 }}
                axisLine={{ stroke: '#cbd5e0' }}
              />
              <YAxis
                domain={[70, 180]}
                tick={{ fill: '#64748b', fontSize: 12 }}
                axisLine={{ stroke: '#cbd5e0' }}
              />
              <Tooltip
                contentStyle={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
                formatter={(value) => [`${value} mg/dL`, 'Glucose']}
                labelStyle={{ fontWeight: 'bold' }}
              />
              <Line
                type="monotone"
                dataKey="glucose"
                stroke="#ea580c"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{
                  r: 6,
                  stroke: '#ea580c',
                  strokeWidth: 2,
                  fill: '#ffffff'
                }}
                name="Glucose (mg/dL)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BloodGlucoseCard;