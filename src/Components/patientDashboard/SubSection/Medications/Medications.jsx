import React from "react";
import ActiveMedications from "./ActiveMedications";
import MedicationHistory from "./MedicationHistory";

const Medications = () => {
    const activeMeds = [
        {
            name: "Lisinopril",
            dosage: "10mg",
            schedule: "Once daily",
            time: "Morning",
            prescribedBy: "Dr. Johnson",
            startDate: "January 15, 2023",
            refillsRemaining: 3,
            nextRefillDate: "June 15, 2023",
            status: "Active"
        },
        {
            name: "Metformin",
            dosage: "500mg",
            schedule: "Three daily",
            time: "Morning and Evening",
            prescribedBy: "Dr. Khal",
            startDate: "February 10, 2023",
            refillsRemaining: 2,
            nextRefillDate: "May 25, 2023",
            status: "Active"
        }
    ];

    const historyMeds = [
        {
            name: "Amoxicillin",
            dosage: "500mg",
            schedule: "Three times daily",
            time: "With meals",
            prescribedBy: "Dr. Martinez",
            startDate: "December 15, 2022",
            endDate: "December 13, 2022",
        }
    ];

    return (
        <div className="bg-white px-6 py-6 rounded-xl shadow-md border border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Active Medications</h2>
                    <div className="space-y-4">
                        {activeMeds.map((med, idx) => (
                            <div key={`active-${idx}`}>
                                <ActiveMedications medication={med} />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Medication History</h2>
                    <div className="space-y-4">
                        {historyMeds.map((med, idx) => (
                            <div key={`history-${idx}`} className="border-b pb-4 last:border-b-0">
                                <MedicationHistory medication={med} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medications;