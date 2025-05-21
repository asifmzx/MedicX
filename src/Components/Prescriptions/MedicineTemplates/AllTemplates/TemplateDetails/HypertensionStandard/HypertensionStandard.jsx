import Button from "@/Components/UI/Button/Button";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { ImFilesEmpty } from "react-icons/im";
import { useRouter } from "next/navigation";

const HypertensionStandard = () => {
  const router = useRouter();
  const medications = [
    {
      name: "Zynapril",
      dose: "250 mg",
      route: "Oral",
      frequency: "Twice daily",
      duration: "10 days",
      instruction: "Take on an empty stomach, avoid dairy products.",
    },
    {
      name: "Virexol",
      dose: "100 mg",
      route: "Intravenous",
      frequency: "Once daily",
      duration: "5 days",
      instruction:
        "Administer slowly over 30 minutes, monitor for allergic reactions.",
    },
  ];

  return (
    <div>
      <div className="pb-6 flex justify-between items-center">
        <div>
          <h1 className="text-lg md:text-lg font-semibold  mb-1">
            Hypertension Standard
          </h1>
          <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
            Cardiovascular • Created by Dr. Sarah Johnson
          </p>
        </div>
        <div className="space-x-4">
          <Button
            variant="primary"
            text="Edit"
            Icon={FaRegEdit}
            className="border border-gray-300"
          />
          <Button
            variant="secondary"
            text="Use Template"
            Icon={ImFilesEmpty}
            onClick={() =>
              router.push("/home/prescriptions/create_prescription")
            }
          />
        </div>
      </div>
      <p className="font-semibold">Medications</p>
      {/* medicine */}
      <div>
        {medications.map((medication, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl my-6 p-4"
          >
            <div className="pb-4 text-xl font-semibold">
              <p>
                <span>{medication.name}</span> <span>{medication.dose}</span>
              </p>
            </div>
            <div className="max-w-[700px] ">
              <div className="flex justify-between pb-2">
                <div>
                  <p className="font-semibold">Route</p>
                  <p className="text-sm">{medication.route}</p>
                </div>

                <div>
                  <p className="font-semibold">Frequency</p>
                  <p className="text-sm">{medication.frequency}</p>
                </div>
                <div>
                  <p className="font-semibold">Duration</p>
                  <p className="text-sm">{medication.duration}</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">Instructions</p>
                <p className="text-sm">{medication.instruction}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HypertensionStandard;
