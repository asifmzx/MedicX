import React from "react";
import MedicalInfoForm from "./MedicalInfoForm/MedicalInfoForm";
import MedicalHistoryForm from "./MedicalHistoryForm/MedicalHistoryForm";
import LifeStyleInfoForm from "./LifeStyleInfoForm/LifeStyleInfoForm";
import Button from "@/Components/UI/Button/Button";

const MedicalInfo = () => {
  return (
    <div>
      <div className="space-y-6  p-4 bg-white rounded">
        <MedicalInfoForm />
        <MedicalHistoryForm />
        <LifeStyleInfoForm />
      </div>
      <div className="py-4 space-x-4">
        <Button variant="primary" text="Cancel" />
        <Button variant="secondary" text="Register Patient" />
      </div>
    </div>
  );
};

export default MedicalInfo;
