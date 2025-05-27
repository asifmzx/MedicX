import React from "react";
import BloodGlucose from "./BloodGlucose";
import BloodPressure from "./BloodPressure";
import Weight from "./Weight";

const Vitals = () => {
    return (
        <div className="bg-white px-6 py-6 rounded-xl shadow-md border border-gray-300">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Health Vitals</h1>
            <p className="text-gray-600 mb-4">Track your health metrics over time</p>

            <div className="space-y-4 mb-4">
                <BloodPressure />
                <Weight />
                <BloodGlucose />
            </div>
        </div>
    );
};

export default Vitals;