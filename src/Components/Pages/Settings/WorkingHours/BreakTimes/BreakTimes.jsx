import Button from "@/Components/UI/Button/Button";

import { FiPlus } from "react-icons/fi";

const BreakTimes = () => {
  const daysOfWeek = ["Lunch Break", "Coffee Break"];

  const timeOptions = [
    "12 am",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
    "6 pm",
    "7 pm",
    "8 pm",
    "9 pm",
    "10 pm",
    "11 pm",
  ];
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-full">
      <div>
        <p className="text-3xl font-semibold">Clinic Hours</p>
        <p className="text-gray-500 text-sm mt-2">
          Set your clinic's regular operating hours for each day of the week
        </p>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full p-1 rounded-md"
          >
            <span className="text-sm font-medium">{day}</span>

            <div className="flex flex-col sm:flex-row items-center gap-2 flex-1 w-full">
              <select
                className="w-full sm:w-auto flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                defaultValue=""
              >
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <p className="text-sm whitespace-nowrap">to</p>
              <select
                className="w-full sm:w-auto flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                defaultValue=""
              >
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="primary"
        text="Add Break Time"
        Icon={FiPlus}
        className="w-full md:w-auto border border-gray-300 mt-4"
      />
    </div>
  );
};

export default BreakTimes;
