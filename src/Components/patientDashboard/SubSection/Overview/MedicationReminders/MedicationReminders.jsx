import React from "react";
import Status from "@/Components/UI/Status/Status";
import { RiCapsuleLine } from "react-icons/ri";

const medications = [
    { name: "Lisinopril", dosage: "10mg", schedule: "Once daily", time: "8:00 AM" },
    { name: "Metformin", dosage: "500mg", schedule: "Twice daily", time: "2:00 PM" },
    { name: "Atorvastatin", dosage: "20mg", schedule: "Once daily", time: "8:00 PM" },
    { name: "Paracetamol", dosage: "500mg", schedule: "Thrice daily", time: "8:00 AM" },
];

const icons = [
    { dosage: "10mg", iconColor: "text-[#2664eb]", iconBgColor: "[#dbebff]" },
    { dosage: "500mg", iconColor: "text-[#15a349]", iconBgColor: "[#dcfce7]" },
    { dosage: "20mg", iconColor: "text-[#9234eb]", iconBgColor: "[#f3e8ff]" },
];

const MedicationReminders = () => {
    return (
        <div className="bg-white shadow-sm p-4 rounded-xl w-full ">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Medication Reminders</h2>
            <p className="text-sm text-gray-600 mb-4">Your daily medication schedule</p>

            {medications.map((med, idx) => {
                const icon = icons.find((i) => i.dosage === med.dosage);

                return (
                    <div key={idx} className={`flex justify-between items-center mb-3 border rounded-xl border-gray-200 p-3`}>
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full bg-${icon?.iconBgColor}`}>
                                <RiCapsuleLine className={`text-2xl ${icon?.iconColor}`} />
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-800">{med.name}</h3>
                                <p className="text-sm text-gray-500">{med.dosage} • {med.schedule}</p>
                            </div>
                        </div>
                        <Status
                            variant="secondary"
                            text={med.time}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default MedicationReminders;
