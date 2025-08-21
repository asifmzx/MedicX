"use client";

import PatientTable from "@/Components/Pages/Patients/PatientTable/PatientTable";
import Button from "@/Components/UI/Button/Button";
import { useRouter } from "next/navigation";
import { GoPlus } from "react-icons/go";

const addPatientPage = () => {
  const router = useRouter();

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
        <Button
          variant="secondary"
          text="Add Patient"
          Icon={GoPlus}
          onClick={() => router.push("/home/Admin/patient/addPatient")}
        />
      </div>
      <div>
        <PatientTable />
      </div>
    </div>
  );
};

export default addPatientPage;
