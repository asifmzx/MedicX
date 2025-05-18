"use client";

import { useState } from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import PatientVisit from "./PatientVisit/PatientVisit";
import PatientSatisfaction from "./PatientSatisfaction/PatientSatisfaction";

const SubSection = () => {
  const [activeTab, setActiveTab] = useState("patientvisit");

  const Content = () => {
    switch (activeTab) {
      case "patientsatisfaction":
        return <PatientSatisfaction />;
      default:
        return <PatientVisit />;
    }
  };

  return (
    <>
      <div className="space-x-2 flex items-center justify-center bg-black/10 rounded-md w-85 h-10">
        <Buttonv2
          variant="primary"
          text="Patient Visit"
          onClick={() => setActiveTab("patientvisit")}
          className="w-40 flex items-center justify-center"
          isActive={activeTab === "patientvisit"}
        />
        <Buttonv2
          variant="primary"
          text="Patient Satisfaction"
          onClick={() => setActiveTab("patientsatisfaction")}
          className="w-40 flex items-center justify-center"
          isActive={activeTab === "patientsatisfaction"}
        />
      </div>
      <div className="pt-6">{Content()}</div>
    </>
  );
};

export default SubSection;
