import React from "react";

const EducationAndTrainingForm = () => {
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-xl md:text-xl font-semibold tracking-tight mb-1">
          Education & Training
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
     
        <div className="md:col-span-2">
          <label htmlFor="" className="block mb-1 font-medium">
            Education
          </label>
          <textarea
            id=""
            rows={3}
            placeholder="Enter education details"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="" className="block mb-1 font-medium">
            Certifications
          </label>
          <textarea
            id=""
            rows={3}
            placeholder="Enter Certifications"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default EducationAndTrainingForm;
