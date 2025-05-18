// 'use client'
import PatientTable from "@/Components/Patients/PatientTable/PatientTable";
import Button from "@/Components/UI/Button/Button";
import { GoPlus } from "react-icons/go";

const Page = () => {
  return (
    <div className="p-4 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
            Patients
          </h1>
          <p className="text-gray-600">
            Manage your patients and their medical records.
          </p>
        </div>
        <Button variant="secondary" text="Add Patient" Icon={GoPlus} />
      </div>
      <div>
        <PatientTable/>
      </div>
    </div>
  );
};

export default Page;
