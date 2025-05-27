import ProgressBar from "@/Components/UI/ProgressBar/ProgressBar";
import React from "react";

const DepartmentCapacity = () => {
  const feedbacks = [
    { label: "Cardiology", percent: 78 },
    { label: "Neurology", percent: 63 },
    { label: "Pediatrics", percent: 92 },
    { label: "Orthopedics", percent: 45 },
  ];

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow">
      <div className="pb-6">
        <p className="text-2xl font-semibold mb-1">Department Capacity</p>
        <p className="text-gray-600 text-sm">
          Current patient load by department
        </p>
      </div>
      <div className="space-y-4">
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

export default DepartmentCapacity;
