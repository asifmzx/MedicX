import React from "react";
import PrimaryInsurance from "./PrimaryInsurance/PrimaryInsurance";
import Button from "@/Components/UI/Button/Button";
import SecondaryInsurance from "./SecondaryInsurance/SecondaryInsurance";
import BillingPreferences from "./BillingPreferences/BillingPreferences";

const Insurance = () => {
  return (
    <div >
      <div className="bg-white ">
        <div className="p-4 ">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
            Insurance & Billing Information
          </h1>
          <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
            Enter the patient's personal details.
          </p>
        </div>
        <div className="p-4  space-y-8">
          <PrimaryInsurance />
          <SecondaryInsurance />
          <BillingPreferences />
        </div>
      </div>
      <div className="py-4 space-x-4">
        <Button variant="primary" text="Cancel" />
        <Button variant="secondary" text="Register Patient" />
      </div>
    </div>
  );
};

export default Insurance;
