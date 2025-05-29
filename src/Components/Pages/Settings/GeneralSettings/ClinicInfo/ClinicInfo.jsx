import Button from "@/Components/UI/Button/Button";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const ClinicInfo = () => {
  return (
    <div className="space-y-8 ">
      {/* Clinic Info */}
      <div className="bg-white p-4  rounded-lg space-y-8">
        <div className="space-y-2">
          <p className="text-2xl font-semibold flex items-center gap-x-2">
            <HiOutlineBuildingOffice />
            Clinic Information
          </p>
          <p className="text-sm text-gray-600">
            Update your clinic's basic information and contact details
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="clinicName" className="block mb-1 font-medium">
              Clinic Name
            </label>
            <input
              id="clinicName"
              type="text"
              defaultValue="Medicx Health Care"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="clinicId" className="block mb-1 font-medium">
              Clinic ID/Registration Number
            </label>
            <input
              id="clinicId"
              type="text"
              defaultValue="MX-12345-XYZ"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="address" className="block mb-1 font-medium">
              Address
            </label>
            <textarea
              id="address"
              rows={3}
              defaultValue="123 Medical Plaza, Healthcare District, City, State, 12345"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black resize-none"
            ></textarea>
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium ">
              <p className="flex items-center gap-x-1">
                <span>
                  <MdOutlineEmail />
                </span>
                <span> Email Address</span>
              </p>
            </label>
            <input
              id="email"
              type="email"
              defaultValue="contact@medicxhealth.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">
              <p className="flex items-center gap-x-1">
                <span>
                  <IoCallOutline />
                </span>
                <span> Phone Number</span>
              </p>
            </label>
            <input
              id="phone"
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="taxId" className="block mb-1 font-medium">
              Tax ID
            </label>
            <input
              id="taxId"
              type="text"
              defaultValue="TAX-987654321"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="website" className="block mb-1 font-medium ">
              <p className="flex items-center gap-x-1">
                <span>
                  <BsGlobe />
                </span>
                <span>Website</span>
              </p>
            </label>
            <input
              id="website"
              type="text"
              defaultValue="https://medixpro-clinic.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
          <div className="md:col-span-2 pt-4 text-lg font-semibold border-t border-gray-300">
            <p>Opening Hours</p>
          </div>
          <div>
            <label htmlFor="weekdays" className="block mb-1 font-medium">
              Weekdays
            </label>
            <input
              id="weekdays"
              type="text"
              defaultValue="8:00 AM - 6:00 PM"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="weekends" className="block mb-1 font-medium">
              Weekends
            </label>
            <input
              id="weekends"
              type="text"
              defaultValue="9:00 AM - 2:00 PM"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-2 sm:space-y-0">
          <Button
            variant="primary"
            text="Cancel"
            className="border border-gray-300"
          />
          <Button variant="secondary" text="Save Changes" />
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-white p-4 sm:p-6 rounded-lg space-y-8">
        <div className="space-y-2">
          <p className="text-2xl font-semibold">Emergency Contact</p>
          <p className="text-sm text-gray-600">
            Set up emergency contact information for your clinic
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="emergencyName" className="block mb-1 font-medium">
              Contact Name
            </label>
            <input
              id="emergencyName"
              type="text"
              defaultValue="Dr. Sarah Johnson"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="emergencyPhone" className="block mb-1 font-medium">
              Emergency Phone
            </label>
            <input
              id="emergencyPhone"
              type="tel"
              defaultValue="+1 (555) 987-6543"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="emergencyInstructions"
              className="block mb-1 font-medium"
            >
              Emergency Instructions
            </label>
            <textarea
              id="emergencyInstructions"
              rows={3}
              defaultValue="In case of system failure, contact the emergency number immediately. For power outages, the backup generator should activate automatically."
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black resize-none"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-2 sm:space-y-0">
          <Button
            variant="primary"
            text="Cancel"
            className="border border-gray-300"
          />
          <Button variant="secondary" text="Save Changes" />
        </div>
      </div>
    </div>
  );
};

export default ClinicInfo;
