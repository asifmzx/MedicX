import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { blood: "A+", percent: 38 },
    { blood: "A-", percent: 18 },
    { blood: "B+", percent: 12 },
    { blood: "B-", percent: 6 },
    { blood: "AB+", percent: 9 },
    { blood: "AB-", percent: 7 },
    { blood: "O+", percent: 6 },
    { blood: "O-", percent: 4 },
];

const bloodColorMap = {
    "A+": "#6366F1",
    "A-": "#EF4444",
    "B+": "#10B981",
    "B-": "#F59E0B",
    "AB+": "#3B82F6",
    "AB-": "#8B5CF6",
    "O+": "#EC4899",
    "O-": "#6B7280",
};

const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
    return (
        <span style={{ color }}>
            {value}
        </span>
    );
};

const DonorsbyBloodType = () => {
    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 0,
                        right: 20,
                        left: 0,
                        bottom: 20, // Increased bottom margin to accommodate legend
                    }}
                >
                    <Legend
                        layout="horizontal"
                        verticalAlign="bottom"
                        align="center"
                        formatter={renderColorfulLegendText}
                        payload={Object.keys(bloodColorMap).map(key => ({
                            value: key,
                            type: "circle",
                            id: key,
                            color: bloodColorMap[key]
                        }))}
                    />
                    <Bar
                        dataKey="percent"
                        radius={[4, 4, 0, 0]}
                        shape={(props) => {
                            const { x, y, width, height, payload } = props;
                            return (
                                <>
                                    <rect
                                        x={x}
                                        y={y}
                                        width={width}
                                        height={height}
                                        fill={bloodColorMap[payload.blood]}
                                        rx={4}
                                        ry={4}
                                    />
                                    <text
                                        x={x + width / 2}
                                        y={y + height / 2}
                                        textAnchor="middle"
                                        fontSize="12"
                                        fill="#ffffff"
                                        fontWeight="500"
                                    >
                                        {payload.percent}%
                                    </text>
                                </>
                            );
                        }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DonorsbyBloodType;