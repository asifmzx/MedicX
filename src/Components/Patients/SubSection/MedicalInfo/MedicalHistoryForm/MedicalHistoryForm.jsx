import React from "react";

const MedicalHistoryForm = () => {
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
          Medical History
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <label htmlFor="" className="block mb-1 font-medium">
            Past Surgeries
          </label>
          <textarea
            rows={3}
            placeholder="list any past surgeries with dates"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
          ></textarea>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <label htmlFor="" className="block mb-1 font-medium">
            Previous Hospitalizations
          </label>
          <textarea
            rows={3}
            placeholder="list any previous hospitalizations with dates"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
          ></textarea>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <p className="py-2 font-semibold">Family Medical History</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex gap-x-1.5">
              <input type="checkbox" name="diabetes" />
              <label>Diabetes</label>
            </div>
            <div className="flex gap-x-1.5">
              <input type="checkbox" name="Hypertension" />
              <label>Hypertension</label>
            </div>
            <div className="flex gap-x-1.5">
              <input type="checkbox" name="Asthma" />
              <label>Asthma</label>
            </div>
            <div className="flex gap-x-1.5">
              <input type="checkbox" name="Heart Disease" />
              <label>Heart Disease</label>
            </div>
            <div className="flex gap-x-1.5">
              <input type="checkbox" name="Cancer" />
              <label>Cancer</label>
            </div>
            <div className="flex gap-x-1.5">
              <input type="checkbox" name="Mental Health Conditions" />
              <label>Mental Health Conditions</label>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <label htmlFor="" className="block mb-1 font-medium">
            Additional Family History Notes
          </label>
          <textarea
            rows={3}
            placeholder="list any Additional Family Medical History "
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistoryForm;
