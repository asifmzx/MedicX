import Image from "next/image";
import React from "react";

const StaffPerformance = () => {
  const staffData = [
    {
      name: "Dr. Sarah Johnson",
      img: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
      designation: "Cardiologist",
      patientNumber: 132,
      rating: 4.8,
    },
    {
      name: "Dr. Kevin Patel",
      img: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
      designation: "Neurologist",
      patientNumber: 98,
      rating: 4.7,
    },
    {
      name: "Dr. Amina Chowdhury",
      img: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
      designation: "Pediatrician",
      patientNumber: 145,
      rating: 4.9,
    },
    {
      name: "Dr. Michael Roberts",
      img: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
      designation: "Dermatologist",
      patientNumber: 121,
      rating: 4.5,
    },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="max-w-xl  space-y-6">
        <div className="mb-4 pb-2 text-left">
          <h1 className="text-xl font-semibold text-gray-800">
            Patient Satisfaction
          </h1>
          <p className="text-sm text-gray-500">Top performing staff members</p>
        </div>

        {staffData.map((staff, index) => (
          <div key={index} className="flex items-center justify-between  ">
            <div className="flex-shrink-0">
              <Image
                src={staff.img}
                alt={staff.name}
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>

            <div className="flex-1 ml-4">
              <p className="text-sm font-medium text-gray-800">{staff.name}</p>
              <p className="text-xs text-gray-500">{staff.designation}</p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-700 font-semibold">
                {staff.patientNumber} patients
              </p>
              <p className="text-xs text-gray-400">
                Rating: {staff.rating} / 5
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffPerformance;
