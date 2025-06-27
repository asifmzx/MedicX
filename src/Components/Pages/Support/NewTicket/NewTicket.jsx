import Button from "@/Components/UI/Button/Button";
import React from "react";

const NewTicket = () => {
  return (
    <div className="p-5 bg-white rounded-md">
      <div className="pb-6 ">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
          Personal Information
        </h1>
        <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
          Enter the doctor's personal details.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="" className="block mb-1 font-medium">
            Subject
          </label>
          <input
            id=""
            type="text"
            placeholder="Brief description of the issue"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <label htmlFor="" className="block mb-1 font-medium">
            Category
          </label>
          <select
            id=""
            defaultValue=""
            className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring focus:ring-black"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Technical Issue">Technical Issue</option>
            <option value="Billing Questions">Billing Questions</option>
            <option value="Account Management">Account Management</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="" className="block mb-1 font-medium">
            Priority
          </label>
          <select
            id=""
            defaultValue=""
            className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring focus:ring-black"
          >
            <option value="" disabled>
              Select Priority
            </option>
            <option value="Low">Low-General Questions or request</option>
            <option value="Medium">medium-Issue affecting workflow</option>
            <option value="High">
              High-Critical issues affecting operations
            </option>
            <option value="Urgent">Urgent-System down or inaccessible</option>
          </select>
        </div>
        <div className="col-span-2  w-full">
          <label
            htmlFor="Description"
            className="block mb-1 font-medium text-sm"
          >
            Description
          </label>
          <textarea
            id="Description"
            rows={5}
            placeholder="Please provide detailed information about your issue"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
          ></textarea>
        </div>

        <div className="col-span-2 w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Attachments (optional)
          </label>

          <div className="w-full border border-gray-300 rounded py-2 pl-6 pr-0 text-sm text-gray-500 cursor-pointer">
            <input
              type="file"
              name="upload"
              id="fileUpload"
              className="w-full cursor-pointer"
            />
          </div>

          <p className="mt-1 text-xs text-gray-500">
            You can upload screenshots or documents to help explain your issue
            (max 5MB per file)
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center pt-5">
        <Button
          variant="primary"
          text="Cancel"
          className="border border-gray-300 px-4"
        />
        <Button variant="secondary" text="Submit Ticket" />
      </div>
    </div>
  );
};

export default NewTicket;
