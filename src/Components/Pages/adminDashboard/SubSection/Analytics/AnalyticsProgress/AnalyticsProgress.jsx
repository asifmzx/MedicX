import ProgressBar from "@/Components/UI/ProgressBar/ProgressBar";
import React from "react";

const AnalyticsProgress = () => {
  const feedbacks = [
    { label: "Overall Experience", percent: 87 },
    { label: "Wait Times", percent: 72 },
    { label: "Staff Friendliness", percent: 94 },
    { label: "Treatment Effectiveness", percent: 89 },
  ];
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="max-w-xl  space-y-4">
        <div className="mb-6 text-left">
          <h1 className="text-lg font-semibold text-gray-800 md:text-xl">
            Patient Satisfaction
          </h1>
          <p className="text-sm text-gray-500">Based on feedback surveys</p>
        </div>
        {feedbacks.map((feedback, index) => (
          <ProgressBar
            key={index}
            label={feedback.label}
            percent={feedback.percent}
          />
        ))}
      </div>
    </div>
  );
};

export default AnalyticsProgress;
