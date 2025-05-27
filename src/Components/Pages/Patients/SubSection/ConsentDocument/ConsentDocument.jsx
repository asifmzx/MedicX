import Button from "@/Components/UI/Button/Button";
import React from "react";
import RequiredConsentForms from "./RequiredConsentForms/RequiredConsentForms";
import AdditionalDocuments from "./AdditionalDocuments/AdditionalDocuments";
import CommunicationPreferences from "./CommunicationPreferences/CommunicationPreferences";

const ConsentDocument = () => {
  return (
    <div>
     
      <div className="bg-white rounded pb-4">
        <div className="p-4">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
            Consent & Documents
          </h1>
          <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
            Manage patient consent forms and documents.
          </p>
        </div>
        <div className="p-4  space-y-8">
          <RequiredConsentForms />
          <AdditionalDocuments />
          <CommunicationPreferences />
        </div>
      </div>
      <div className="py-4 space-x-4">
        <Button variant="primary" text="Cancel" />
        <Button variant="secondary" text="Register Patient" />
      </div>
    </div>
  );
};

export default ConsentDocument;
