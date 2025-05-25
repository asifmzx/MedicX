import React from "react";
import Card from "@/Components/Pharmacy/Card";
import SubSection from "@/Components/Pharmacy/SubSection";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { FaPlus } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                Medicine List
              </h1>
              <p className="text-gray-600 mb-2">
                Manage and view all medicines in the pharmacy inventory
              </p>
            </div>
            <div className="flex flex-row items-stretch justify-between sm:justify-end gap-2 w-full md:w-auto">
              <Buttonv2
                variant="secondary_main"
                text="Add New Medicine"
                Icon={FaPlus}
                className="text-sm flex-1 h-[40px] sm:w-[160px] sm:flex-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <Card />
      </div>
      <div>
        <SubSection />
      </div>
    </div>
  );
};

export default Page;
