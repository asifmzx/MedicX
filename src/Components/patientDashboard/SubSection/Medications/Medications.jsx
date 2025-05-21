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
            schedule: "Twice daily",
            time: "Morning and Evening",
            prescribedBy: "Dr. Patel",
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
            startDate: "December 5, 2022",
            endDate: "December 15, 2022",
        }
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Medications</h2>

            {activeMeds.map((med, idx) => (
                <ActiveMedications key={`active-${idx}`} medication={med} />
            ))}

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Medication History</h2>

            {historyMeds.map((med, idx) => (
                <MedicationHistory key={`history-${idx}`} medication={med} />
            ))}
        </div>
    );
};

export default Medications;