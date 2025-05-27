import React from "react";
import RecentTestResults from "./RecentTestResults";
import MedicalHistory from "./MedicalHistory";

const Records = () => {
    const testResults = [
        {
            name: "Blood Work Results",
            description: "Complete Blood Count (CBC)",
            date: "May 15, 2025",
            orderedBy: "Dr. Johnson",
            status: "New"
        },
        {
            name: "Lipid Panel",
            description: "Cholesterol and Triglycerides",
            date: "May 10, 2025",
            orderedBy: "Dr. Smith",
            status: "New"
        },
        {
            name: "Comprehensive Metabolic Panel",
            description: "Electrolytes, Kidney & Liver Function",
            date: "May 5, 2025",
            orderedBy: "Dr. Lee",
            status: "Completed"
        },
        {
            name: "Thyroid Function Test",
            description: "TSH, Free T4, and T3 Levels",
            date: "April 28, 2025",
            orderedBy: "Dr. Garcia",
            status: "Reviewed"
        },
    ];

    const medicalHistory = [
        {
            title: "Allergies",
            items: [
                { name: "Penicillin", details: "Severe - Anaphylaxis" },
                { name: "Peanuts", details: "Moderate - Hives" }
            ]
        },
        {
            title: "Conditions",
            items: [
                { name: "Hypertension", details: "Diagnosed: 2020" },
                { name: "Type 2 Diabetes", details: "Diagnosed: 2021" }
            ]
        },
        {
            title: "Procedures",
            items: [
                { name: "Appendectomy", details: "2015" }
            ]
        }
    ];

    return (
        <div className="bg-white px-6 py-6 rounded-xl shadow-md border border-gray-300">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Medical Records</h1>
            <p className="text-gray-600 mb-6">Your health history and documents</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Test Results</h2>
                    <div className="space-y-4">
                        {testResults.map((test, idx) => (
                            <RecentTestResults key={`test-${idx}`} test={test} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Medical History</h2>
                    <div className="space-y-4">
                        {medicalHistory.map((section, idx) => (
                            <MedicalHistory key={`section-${idx}`} section={section} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Records;