"use client";

import DoctorsListTable from "@/Components/Doctors/DoctorsListTable/DoctorsListTable";
import PatientTable from "@/Components/Patients/PatientTable/PatientTable";
import Button from "@/Components/UI/Button/Button";
import { useRouter } from "next/navigation";
import { GoPlus } from "react-icons/go";

const DoctorList = () => {
  const router = useRouter();

  return (
    <div className="p-4 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
            Doctors
          </h1>
          <p className="text-gray-600">
            Manage your medical staff and their information.
          </p>
        </div>
        <Button
          variant="secondary"
          text="Add Doctor"
          Icon={GoPlus}
          onClick={() => router.push("/home/doctors/add_doctor")}
        />
      </div>
      <div>
        <DoctorsListTable />
      </div>
    </div>
  );
};

export default DoctorList;
