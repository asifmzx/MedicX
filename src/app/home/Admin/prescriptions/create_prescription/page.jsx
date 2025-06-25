import CreatePrescription from "@/Components/Pages/Prescriptions/CreatePrescription/CreatePrescription";
import BackButton from "@/Components/UI/Button/BackButton";
import Button from "@/Components/UI/Button/Button";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-x-4">
        <div>
          <BackButton />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
            Create Prescription
          </h1>
          <p className="text-gray-600">
            Create a new prescription for a patient.
          </p>
        </div>
      </div>
      <div>
        <CreatePrescription />
        <div className="py-4 space-x-4">
          <Button variant="primary" text="Cancel" />
          <Button variant="secondary" text="Create Prescription" />
        </div>
      </div>
    </div>
  );
};

export default Page;
