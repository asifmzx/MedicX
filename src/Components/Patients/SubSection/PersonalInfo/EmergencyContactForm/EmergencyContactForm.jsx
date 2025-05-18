import React from 'react';

const EmergencyContactForm = () => {
    return (
      <div>
        <div className="py-4">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
            Emergency Contact
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
          <div>
            <div className="col-span-1">
              <label htmlFor="" className="block mb-1 font-medium">
                Contact Name
              </label>
              <input
                type="text"
                placeholder="Enter emergency contact name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
          <div>
            <div className="col-span-1">
              <label htmlFor="" className="block mb-1 font-medium">
                Relationship
              </label>
              <input
                type="text"
                placeholder="Enter Relationship"
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
                Email (Optional)
              </label>
              <input
                type="email"
                placeholder="Enter emergency contact email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default EmergencyContactForm;