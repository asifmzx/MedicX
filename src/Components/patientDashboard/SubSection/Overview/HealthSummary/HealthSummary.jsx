import React from "react";

const healthMetrics = [
    {
        label: "Heart Rate",
        value: "72 BPM",
        normalRange: "Normal range: 60–100 BPM",
        progress: 72,
        icon: "❤️",
    },
    {
        label: "Blood Pressure",
        value: "118/78 mmHg",
        normalRange: "Normal range: Below 120/80 mmHg",
        progress: 95, // arbitrary percentage for UI representation
        icon: "📅",
    },
    {
        label: "Glucose Level",
        value: "98 mg/dL",
        normalRange: "Normal range: 70–140 mg/dL",
        progress: 60,
        icon: "🧪",
    },
];

const HealthSummary = () => {
    return (
        <div className="w-full p-4 md:p-6 border border-gray-300 rounded-xl bg-white shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Summary</h2>
            <p className="text-sm text-gray-600 mb-6">Your recent health metrics and goals</p>

            <div className="space-y-6">
                {healthMetrics.map((metric, index) => (
                    <div key={index}>
                        <div className="flex items-center gap-2 mb-1 font-medium text-gray-700">
                            <span>{metric.icon}</span>
                            <span>{metric.label}</span>
                            <span className="ml-auto font-semibold text-gray-900">{metric.value}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded">
                            <div
                                className="h-full bg-blue-500 rounded"
                                style={{ width: `${metric.progress}%` }}
                            ></div>
                        </div>
                        <p className="text-xs text-gray-500 mb-9.5">{metric.normalRange}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthSummary;
