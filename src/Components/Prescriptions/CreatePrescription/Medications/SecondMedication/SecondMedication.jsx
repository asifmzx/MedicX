import Button from "@/Components/UI/Button/Button";
import { Switch } from "antd";
import { RiDeleteBin7Line } from "react-icons/ri";

const SecondMedication = () => {
  return (
    <div>
      <div className="p-4 border border-gray-300 rounded-lg w-full">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Medication #2</p>

          <Button
            variant="primary"
            text=""
            Icon={RiDeleteBin7Line}
            className="text-red-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
          <div className="md:col-span-2">
            <label
              htmlFor="medication-search"
              className="block mb-1 font-medium"
            >
              Search Medication
            </label>
            <div className="relative">
              <input
                type="search"
                id="medication-search"
                name="medicationSearch"
                placeholder="Type to search..."
                className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring focus:ring-black"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="dosage" className="block mb-1 font-medium">
              Dosage
            </label>
            <select
              id="dosage"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="" disabled>
                Select Dosage
              </option>
              <option value="5mg">5mg</option>
              <option value="10mg">10mg</option>
              <option value="15mg">15mg</option>
            </select>
          </div>

          <div>
            <label htmlFor="route" className="block mb-1 font-medium">
              Route
            </label>
            <select
              id="route"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="" disabled>
                Select route
              </option>
              <option value="Oral">Oral</option>
              <option value="Topical">Topical</option>
              <option value="Rectal">Rectal</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
          <div>
            <label htmlFor="frequency" className="block mb-1 font-medium">
              Frequency
            </label>
            <select
              id="frequency"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="" disabled>
                Select frequency
              </option>
              <option value="Once Daily">Once Daily</option>
              <option value="Twice Daily">Twice Daily</option>
              <option value="Three Times Daily">Three Times Daily</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex-1">
              <label htmlFor="" className="block mb-1 font-medium">
                Duration
              </label>
              <input
                id="Duration"
                type="number"
                placeholder="Enter Duration"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              />
            </div>

            <div className="flex-1">
              <label htmlFor="period" className="block mb-1 font-medium">
                Period
              </label>
              <select
                id="period"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
                defaultValue=""
              >
                <option value="" disabled>
                  Select period
                </option>
                <option value="7">7 Days</option>
                <option value="14">14 Days</option>
                <option value="30">30 Days</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 pt-2">
          <label htmlFor="" className="block mb-1 font-medium">
            Special Instructions
          </label>
          <textarea
            id=""
            rows={3}
            placeholder="Take with meals to reduce gastrointestinal side effects."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black resize-none"
          ></textarea>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
          <div className="flex items-center gap-x-2 font-semibold text-sm sm:text-base">
            <Switch />
            <p>Allow Refills</p>
          </div>

          <div className="flex items-center gap-x-2 text-sm sm:text-base">
            <label htmlFor="refills">Number of Refills:</label>
            <input
              type="number"
              id="refills"
              name="refills"
              className="w-20 px-2 py-1 border rounded text-gray-500"
              defaultValue={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondMedication;
