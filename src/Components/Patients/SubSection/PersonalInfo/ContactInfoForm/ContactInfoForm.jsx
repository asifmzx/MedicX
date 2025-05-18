import React from "react";

const ContactInfoForm = () => {
  return (
    <div >
      <div className="py-4">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
          Contact Information
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <div>
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        <div>
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter Phone Number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
        <div>
          <div className="col-span-1">
            <label htmlFor="" className="block mb-1 font-medium">
              Alternative Phone (Optional)
            </label>
            <input
              type="email"
              placeholder="Enter alternative phone"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3 py-4">
        <label className="block mb-2 font-medium">
          Preferred Contact Method
        </label>
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="contactMethod"
              value="Phone"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
            />
            <span>Phone</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="contactMethod"
              value="Email"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
            />
            <span>Email</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="contactMethod"
              value="SMS"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500"
            />
            <span>SMS</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
