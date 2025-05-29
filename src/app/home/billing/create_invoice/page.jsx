import React from "react";
import CreateInvoice from "@/Components/Pages/Billing/CreateInvoice/createInvoice";
import BackButton from "@/Components/UI/Button/BackButton";


const Page = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-row justify-center items-center mb-4  gap-5">
        <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
        <div className="flex-1">
          <h1 className="text-2xl md:text-2xl font-bold tracking-tight mb-1">
            Create Invoice
          </h1>
          <p className="text-gray-600 mb-2">
            Create a new invoice for a patient.
          </p>
        </div>
      </div>
      <CreateInvoice />
    </div>
  );
};

export default Page;