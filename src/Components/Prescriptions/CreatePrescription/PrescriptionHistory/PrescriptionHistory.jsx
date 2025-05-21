import Button from "@/Components/UI/Button/Button";
import { BsDot } from "react-icons/bs";
import { FaRegFileLines } from "react-icons/fa6";

const prescriptions = [
  {
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    duration: "30 days",
    date: "2023-07-15",
  },
  {
    medication: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    duration: "30 days",
    date: "2023-07-15",
  },
  {
    medication: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily at bedtime",
    duration: "30 days",
    date: "2023-08-22",
  },
];

const PrescriptionHistory = () => {
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-md">
      <div>
        <h1 className="text-xl font-semibold tracking-tight mb-1">
          Prescription History
        </h1>
        <p className="text-xs text-gray-600">
          Recent prescriptions for this patient.
        </p>
      </div>
      <div>
        {prescriptions.map((prescription, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md p-3 my-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">
                  <span className="pr-2 ">{prescription.medication}</span>
                  <span>{prescription.dosage}</span>
                </p>
                <p className="flex items-center text-xs">
                  <span>{prescription.frequency}</span>
                  <BsDot />
                  <span>{prescription.duration}</span>
                </p>
                <p className="text-xs">Prescribed on: {prescription.date}</p>
              </div>
              <div>
                <Button variant="primary" text="" Icon={FaRegFileLines} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Button variant="secondary" text="View All Prescription" />
      </div>
    </div>
  );
};

export default PrescriptionHistory;
