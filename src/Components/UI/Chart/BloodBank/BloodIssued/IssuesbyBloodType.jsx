import React from 'react';

const BloodTypeIssuesChart = () => {
    const data = [
        { bloodType: "A+", units: 2, color: "#EF4444" },
        { bloodType: "A-", units: 1, color: "#DC2626" },
        { bloodType: "AB+", units: 2, color: "#8B5CF6" },
        { bloodType: "AB-", units: 1, color: "#7C3AED" },
        { bloodType: "B+", units: 3, color: "#3B82F6" },
        { bloodType: "B-", units: 1, color: "#2563EB" },
        { bloodType: "O+", units: 6, color: "#10B981" },
        { bloodType: "O-", units: 1, color: "#059669" },
    ];

    const maxUnits = Math.max(...data.map(item => item.units));

    return (
        <div className="p-2 space-y-4">
            {data.map((item) => (
                <div key={item.bloodType} className="space-y-1">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">
                            {item.bloodType}
                        </span>
                        <span className="text-sm text-gray-500">
                            {item.units} unit{item.units !== 1 ? 's' : ''}
                        </span>
                    </div>

                    <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                            className="h-2 rounded-full transition-all duration-300 ease-out"
                            style={{
                                backgroundColor: item.color,
                                width: `${(item.units / maxUnits) * 100}%`
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BloodTypeIssuesChart;