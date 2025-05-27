import React from "react";
import FirstMedication from "./FirstMedication/FirstMedication";
import SecondMedication from "./SecondMedication/SecondMedication";
import Button from "@/Components/UI/Button/Button";
import { FiPlus } from "react-icons/fi";


const Medications = () => {
  return (
    <div className="py-3">
      <div className="flex justify-between items-center py-6">
              <p className="font-semibold">Medications</p>
              
        <Button variant="secondary" text="Add Medication" Icon={FiPlus} />
      </div>
      <div className="space-y-4">
        <FirstMedication />
        <SecondMedication />
      </div>
    </div>
  );
};

export default Medications;
