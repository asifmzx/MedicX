import React from "react";

const info=[{
    "patient": {
      "id": "JS19780515",
      "firstName": "John",
      "lastName": "Smith",
      "fullName": "John Smith",
      "age": 45,
      "gender": "Male",
      "dob": "1978-05-15",
      "allergies": [
        "Penicillin",
        "Peanuts"
      ],
      "conditions": [
        "Hypertension",
        "Type 2 Diabetes"
      ],
      "location": {
        "address": "123 Main Street, Springfield, IL, USA",
        "latitude": 39.7817,
        "longitude": -89.6501
      },
      "detailsLink": "https://yourapp.com/patients/JS19780515"
    }
  }
  ]
const PatientInformation = () => {
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-md">
      <div>
        <h1 className="text-xl md:text-xl font-semibold tracking-tight mb-1">
          Patient Information
        </h1>
        <p className="text-xs text-gray-600">
          Select a patient for this prescription.
        </p>
      </div>
      <div className="pt-4">
        <div className="md:col-span-2">
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
          </div>
          <div>
              
          </div>
    </div>
  );
};

export default PatientInformation;
