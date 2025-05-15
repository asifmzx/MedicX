import ProgressBar from "@/Components/UI/ProgressBar/ProgressBar";
import React from "react";

const AnalyticsProgress = () => {
  const feedback = [
    { label: "Overall Experience", percent: 87 },
    { label: "Wait Times", percent: 72 },
    { label: "Staff Friendliness", percent: 94 },
    { label: "Treatment Effectiveness", percent: 89 },
  ];
  return (
    <div className="w-full">
      
      <div className="max-w-xl  px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="mb-6 text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-800">
            Detailed Analytics
          </h1>
          <p className="text-gray-600">
            Insights and trends from your clinic data
          </p>
        </div>
        {feedback.map((skill, index) => (
          <ProgressBar
            key={index}
            label={skill.label}
            percent={skill.percent}
          />
        ))}
      </div>
    </div>
  );
};

export default AnalyticsProgress;
