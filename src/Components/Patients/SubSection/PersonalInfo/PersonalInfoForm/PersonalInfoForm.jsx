import React from "react";

const PersonalInfoForm = () => {
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
          Personal Information
        </h1>
        <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
          Enter the patient's personal details.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <div className="col-span-1">
          <label htmlFor="firstName" className="block mb-1 font-medium">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter first name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="middleName" className="block mb-1 font-medium">
            Middle Name (Optional)
          </label>
          <input
            id="middleName"
            type="text"
            placeholder="Enter middle name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="lastName" className="block mb-1 font-medium">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter last name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="dob" className="block mb-1 font-medium">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="gender" className="block mb-1 font-medium">
            Gender
          </label>
          <select
            id="gender"
            className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring focus:ring-black"
          >
            <option value="" disabled selected>
              Select gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        <div className="col-span-1">
          <label htmlFor="maritalStatus" className="block mb-1 font-medium">
            Marital Status
          </label>
          <select
            id="maritalStatus"
            className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring focus:ring-black"
          >
            <option value="" disabled selected>
              Select status
            </option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
            <option value="Separated">Separated</option>
          </select>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <label htmlFor="address" className="block mb-1 font-medium">
            Address
          </label>
          <textarea
            id="address"
            rows={3}
            placeholder="Enter address"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black resize-none"
          ></textarea>
        </div>

        <div className="col-span-1">
          <label htmlFor="city" className="block mb-1 font-medium">
            City
          </label>
          <input
            id="city"
            type="text"
            placeholder="Enter city"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="state" className="block mb-1 font-medium">
            State
          </label>
          <input
            id="state"
            type="text"
            placeholder="Enter state"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="zip" className="block mb-1 font-medium">
            Zip Code
          </label>
          <input
            id="zip"
            type="text"
            placeholder="Enter Zip Code"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
