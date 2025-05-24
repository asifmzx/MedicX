import React from "react";


const RatingSummary = () => {
  const positivePercent = 94;
  const criticalPercent = 6;

  const ratingBreakdown = [
    { stars: "5 stars", percent: 76 },
    { stars: "4 stars", percent: 28 },
    { stars: "3 stars", percent: 4 },
    { stars: "2 stars", percent: 1 },
    { stars: "1 stars", percent: 1 },
  ];

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 h-full flex flex-col">
      <div className="pb-4">
        <p className="text-2xl font-semibold mb-1">Rating Summary</p>
        <p className="text-gray-600 text-sm">Overall clinic performance</p>
      </div>

      <div className="w-full h-2 rounded-full bg-gray-200 mb-2">
        <div
          className="h-full bg-yellow-500 rounded-full"
          style={{ width: `${positivePercent}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-sm mb-6">
        <span className="text-gray-700">
          <strong>{positivePercent}%</strong> Positive
          <br />
          4–5 star ratings
        </span>
        <span className="text-gray-700 text-right">
          <strong>{criticalPercent}%</strong> Critical
          <br />
          1–3 star ratings
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {ratingBreakdown.map((rating, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span>{rating.stars}</span>
              <span>{rating.percent}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className={`h-full rounded-full ${
                  rating.percent >= 70
                    ? "bg-green-500"
                    : rating.percent >= 20
                    ? "bg-yellow-400"
                    : "bg-red-500"
                }`}
                style={{ width: `${rating.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 italic">
        Most customers are highly satisfied with our product
      </p>
    </div>
  );
};

export default RatingSummary;
