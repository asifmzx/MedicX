import { Switch } from "antd";

const AdditionalInformation = () => {
  return (
    <div className="pt-6">
      <div>
        <h1 className="font-semibold mb-1">Additional Information</h1>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-2 pt-2">
        <label htmlFor="" className="block mb-1 font-medium">
          Notes for Pharmacist
        </label>
        <textarea
          id=""
          rows={3}
          placeholder="Enter any additional notes for the pharmacist"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black resize-none"
        ></textarea>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
        <div className="flex items-center gap-x-2 font-semibold text-sm sm:text-base">
          <Switch />
          <p>Save as Template</p>
        </div>
      </div>
      <div className="col-span-1">
        <label htmlFor="" className="block mb-1 font-medium">
          Template Name
        </label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter a name for this template"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
        />
      </div>
    </div>
  );
};

export default AdditionalInformation;
