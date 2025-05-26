import React from "react";
import Card from "./Card";
import BloodTypeAvailability from "./BloodTypeAvailability";
import BloodManagement from "./BloodManagement";

const BloodBank = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                Blood Stock
              </h1>
              <p className="text-gray-600 mb-2">
                Manage and monitor blood inventory in the blood bank
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <Card />
      </div>
      <div>
        <BloodTypeAvailability />
      </div>
      <div>
        <BloodManagement />
      </div>
    </div>
  );
};

export default BloodBank;
