import React from "react";
import { BsDot } from "react-icons/bs";

const info = [
  {
    patient: {
      id: 1,
      img: "https://medixpro.vercel.app/colorful-abstract-shapes.png",
      fullName: "John Smith",
      age: 45,
      gender: "Male",
      dob: "1978-05-15",
      allergies: ["Penicillin", "Peanuts"],
      conditions: ["Hypertension", "Type 2 Diabetes"],
    },
  },
];

const PatientInformation = () => {
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-md">
      <div>
        <h1 className="text-xl font-semibold tracking-tight mb-1">
          Patient Information
        </h1>
        <p className="text-xs text-gray-600">
          Select a patient for this prescription.
        </p>
      </div>

      <div className="pt-4 mb-4">
        <label htmlFor="medication-search" className="block mb-1 font-medium">
          Search Medication
        </label>
        <div className="relative">
          <input
            type="search"
            id="medication-search"
            name="medicationSearch"
            placeholder="Type to search..."
            className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring focus:ring-black"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>
      </div>

      {info.map(({ patient }) => (
        <div
          key={patient.id}
          className="p-4 border border-gray-200 rounded-lg mb-4"
        >
          <div className="flex items-center gap-x-3">
            <div>
              <img
                src={patient.img}
                alt="patient img"
                className="rounded-full w-10 h-10"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{patient.fullName}</h2>
              <div>
                <p className="text-sm text-gray-700 flex items-center">
                  <span> {patient.age}</span>
                  <BsDot />
                  <span>{patient.gender}</span>
                  <BsDot />
                  <span>{patient.dob}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3">
            <label className="text-sm">Allergies:</label>
            <p>
              {patient.allergies.map((allergy, index) => (
                <span
                  key={index}
                  className="text-xs text-[#72326a] bg-[#FDECEC] px-3 mr-2 py-1  mt-1 rounded-md inline-block"
                >
                  {allergy}
                </span>
              ))}
            </p>
          </div>
          <div className="pt-3">
            <label className="text-sm">Conditions:</label>
            <p>
              <span>
                {patient.conditions.map((condition, index) => (
                  <span
                    key={index}
                    className="text-xs text-blue-700 bg-blue-100 px-3 py-1 mr-2 mt-1 rounded-md inline-block"
                  >
                    {condition}
                  </span>
                ))}
              </span>
            </p>
          </div>

          <p className="text-sm hover:underline mt-4 cursor-pointer">
            View Patient Details
          </p>
        </div>
      ))}
    </div>
  );
};

export default PatientInformation;
