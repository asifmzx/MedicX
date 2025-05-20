import React from "react";

const tips = [
    {
        title: "Heart Health",
        content: "Try to get 30 minutes of moderate exercise at least 5 days a week to improve your cardiovascular health.",
        icon: "❤️",
    },
    {
        title: "Stress Management",
        content: "Practice deep breathing exercises for 5 minutes daily to help reduce stress and lower blood pressure.",
        icon: "💆",
    },
    {
        title: "Nutrition",
        content: "Based on your profile, increasing your intake of omega-3 fatty acids could help improve your cholesterol levels.",
        icon: "🥦",
    },
];

const HealthTips = () => {
    return (
        <div className="bg-white shadow-sm p-6 rounded-xl w-full ">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Tips</h2>
            <p className="text-sm text-gray-600 mb-4">Personalized recommendations</p>

            {tips.map((tip, idx) => (
                <div key={idx} className="mb-4 p-2">
                    <h1 className="font-medium text-gray-800 flex items-center gap-2">
                        <span>{tip.icon}</span> {tip.title}
                    </h1>
                    <p className="text-sm text-gray-600 mt-2">{tip.content}</p>
                </div>
            ))}
        </div>
    );
};

export default HealthTips;
