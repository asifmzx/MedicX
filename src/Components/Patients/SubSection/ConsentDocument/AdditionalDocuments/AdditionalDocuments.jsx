import React from "react";

const AdditionalDocuments = () => {
  return (
    <div className=" pb-2 border-b border-gray-200">
      <div className="pb-4">
        <h1 className="text-xl md:text-xl font-semibold tracking-tight mb-1">
          Additional Documents
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
        <div className="col-span-2">
          <div>
            <label htmlFor="" className="block mb-1 font-medium">
              Document Type
            </label>
            <select
              id=""
              className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring focus:ring-black"
            >
              <option value="" disabled selected>
                Select Document Type
              </option>
              <option value="Identification">Identification</option>
              <option value="Insurance Card">Insurance Card</option>
              <option value="Previous Medical Records">
                Previous Medical Records
              </option>
              <option value="lab Results">lab Results</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <div className=" w-full sm:w-auto flex  items-center gap-x-4 py-3">
              <div>
                <label
                  htmlFor="fileUpload"
                  className="inline-block bg-transparent text-black px-2 md:px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-300 transition"
                >
                  Upload File
                </label>
                <input
                  type="file"
                  name="upload"
                  id="fileUpload"
                  className="hidden"
                />
              </div>

              <div>
                <p className="text-xs text-gray-600 max-w-[150px] md:max-w-full">
                  Upload additional patient documents. PDF, JPG, or PNG. Max
                  10MB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDocuments;
