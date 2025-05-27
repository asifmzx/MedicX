import React from "react";
import StatSection from "./StatsSection"

const Stats = () => {

    return (
        <div className="w-full sm:px-4 lg:px-8 bg-white px-4 py-4 rounded-md">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Performance Metrics
                </h1>
                <p className="text-gray-600 mt-4">Your clinical performance and patient outcomes</p>
            </div>
            <StatSection />
        </div>
    );
};

export default Stats;
