import React from "react";
import Status from "@/Components/UI/Status/Status";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { assets } from "@/assets/index";
import Image from "next/image";

const TodaysPatients = () => {
  const patients = [
    {
      name: "Emma Thompson",
      age: "42 Yrs",
      gender: "Female",
      type: "Check-up",
      variant: "check_up",
      img: assets.prof,
    },
    {
      name: "Michael Chen",
      age: "35 Yrs",
      gender: "Male",
      type: "Follow-up",
      variant: "follow_up",
      img: assets.prof,
    },
    {
      name: "Sophia Rodriguez",
      age: "28 Yrs",
      gender: "Female",
      type: "Regular",
      variant: "regular",
      img: assets.prof,
    },
    {
      name: "James Wilson",
      age: "67 Yrs",
      gender: "Male",
      type: "Urgent",
      variant: "urgent",
      img: assets.prof,
    },
    {
      name: "Olivia Parker",
      age: "8 Yrs",
      gender: "Female",
      type: "Regular",
      variant: "regular",
      img: assets.prof,
    },
  ];

  return (
    <div className="w-full sm:px-2 mt-2 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Today's Patients
        </h1>
        <p className="text-gray-600 mt-4">Patients you're seeing today</p>
      </div>

      <div className="space-y-4">
        {patients.map((patient, index) => (
          <div
            key={index}
            className="border border-gray-200 pb-4 rounded-md p-2 hover:bg-gray-100"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-row justify-center items-center gap-3">
                <div>
                  <Image
                    src={patient.img}
                    width={150}
                    height={16}
                    className="border rounded-full size-10"
                    alt={patient.name}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {patient.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600 flex justify-center items-center gap-1">
                      {patient.age} • {patient.gender}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex flex-col sm:flex-col items-end justify-end gap-2">
                <Status variant={patient.variant} text={patient.type} />
                <div className="flex gap-2">
                  <Buttonv2
                    className="border rounded-md border-gray-300 text-[15px] px-3 py-1"
                    text="History"
                  />
                  <Buttonv2
                    variant="secondary"
                    className="border rounded-md border-gray-300 text-[15px] px-3 py-1"
                    text="Examine"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysPatients;
