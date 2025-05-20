import React from "react";

const RequiredConsentForms = () => {
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-xl md:text-xl font-semibold tracking-tight mb-1 ">
          Required Consent Forms
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-2 flex justify-between items-center border border-gray-200 p-4 rounded">
          <div>
            <p className="text-sm font-semibold">HIPAA Consent Form</p>
            <p className="text-xs text-gray-500 max-w-[150px] md:max-w-full">
              Patient consent for use and disclosure of health information
            </p>
          </div>
          <div className="space-y-2">
            <div>
              <label
                htmlFor="fileUpload"
                className="inline-block bg-transparent text-black px-3 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-200 transition text-xs md:text-sm"
              >
                Upload File
              </label>
              <input
                type="file"
                id="fileUpload"
                name="upload"
                className="hidden"
                aria-label="Upload HIPAA consent form"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-between items-center border border-gray-200 p-4 rounded">
          <div>
            <p className="text-sm font-semibold">Treatment Consent</p>
            <p className="text-xs text-gray-500 max-w-[150px] md:max-w-full">
              Consent to receive medical treatment
            </p>
          </div>
          <div className="space-y-2">
            <div>
              <label
                htmlFor="fileUpload"
                className="inline-block bg-transparent text-black px-3 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-200 transition text-xs md:text-sm"
              >
                Upload File
              </label>
              <input
                type="file"
                id="fileUpload"
                name="upload"
                className="hidden"
                aria-label="Upload HIPAA consent form"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-between items-center border border-gray-200 p-4 rounded">
          <div>
            <p className="text-sm font-semibold">Financial Agreement</p>
            <p className="text-xs text-gray-500 max-w-[200px] md:max-w-full">
              Agreement to pay for services
            </p>
          </div>
          <div className="space-y-2">
            <div>
              <label
                htmlFor="fileUpload"
                className="inline-block bg-transparent text-black px-3 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-200 transition text-xs md:text-sm"
              >
                Upload File
              </label>
              <input
                type="file"
                id="fileUpload"
                name="upload"
                className="hidden"
                aria-label="Upload HIPAA consent form"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequiredConsentForms;
