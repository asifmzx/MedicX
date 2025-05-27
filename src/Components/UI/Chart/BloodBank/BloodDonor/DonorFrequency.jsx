"use client";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts";
import React from "react";
const data = [
    { frequency: "First Time", times: 98 },
    { frequency: "2-4 Times", times: 107 },
    { frequency: "5-9 Times", times: 24 },
    { frequency: "10-24 Times", times: 12 },
    { frequency: "25+ Times", times: 20 },
];

const PatientVisitBarChart = () => {
    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 0,
                        right: 20,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <XAxis
                        dataKey="frequency"
                        tick={{ fill: '#000000', fontSize: 14 }}
                        axisLine={{ stroke: '#000000' }}
                        tickLine={{ stroke: '#000000' }}
                    />

                    <Bar dataKey="times" shape={(props) => {
                        const { x, y, width, height, payload } = props;
                        return (
                            <>
                                <rect
                                    x={x}
                                    y={y}
                                    width={width}
                                    height={height}
                                    fill="#65758c"
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
                                    {payload.times}
                                </text>
                            </>
                        );
                    }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PatientVisitBarChart;