"use client";

import AllPrescriptionTable from "@/Components/Pages/Prescriptions/AllPrescriptionTable/AllPrescriptionTable";
import Button from "@/Components/UI/Button/Button";
import { useRouter } from "next/navigation";
import { GoPlus } from "react-icons/go";

const Page = () => {
  const router = useRouter();
  return (
    <div className="p-4 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
            Prescriptions
          </h1>
          <p className="text-gray-600">
            Manage patient prescriptions and medications.
          </p>
        </div>
        <Button
          variant="secondary"
          text="Create Prescription"
          Icon={GoPlus}
          onClick={() => router.push("/home/Admin/prescriptions/create_prescription")}
        />
      </div>
      <div>
        <AllPrescriptionTable />
      </div>
    </div>
  );
};

export default Page;
