import BackButton from "@/Components/UI/Button/BackButton";
import React from "react";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";
import PrescriptionDetails from "./PrescriptionDetails/PrescriptionDetails";
import Medications from "./Medications/Medications";
import PrescriptionOptions from "./PrescriptionOptions/PrescriptionOptions";
import PrescriptionHistory from "./PrescriptionHistory/PrescriptionHistory";
import PatientInformation from "./PatientInformation/PatientInformation";

const CreatePrescription = () => {
  return (
    <div className="py-5">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="pt-4 sm:col-span-2 lg:col-span-2 bg-white p-4 rounded-lg">
            <PrescriptionDetails />
            <Medications />
            <AdditionalInformation />
          </div>
          <div className=" sm:col-span-2 lg:col-span-1">
            <PatientInformation />
            <PrescriptionHistory />
            <PrescriptionOptions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePrescription;
