import AmbulancesDetails from "@/Components/Pages/Ambulance/AmbulancesDetails/AmbulancesDetails";
import { LuAmbulance } from "react-icons/lu";
import { FiPenTool } from "react-icons/fi";
import Button from "@/Components/UI/Button/Button";
import { BsCalendarDate } from "react-icons/bs";
import { FaRegFileLines } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { FiTool } from "react-icons/fi";
import Status from "@/Components/UI/Status/Status";

const Page = () => {
  const calls = [
    {
      title: "Status",
      text: "Available",
      description: "Last updated: Today, 9:30 AM",
      icon: <LuAmbulance />,
    },
    {
      title: "Last Maintenance",
      text: "2023-04-02",
      description: "Next: 2023-07-02",
      icon: <BsCalendarDate />,
    },
    {
      title: "Total Calls",
      text: "42",
      description: "4 calls this month",
      icon: <FaRegFileLines />,
    },
    {
      title: "Current Driver",
      text: "Sarah Wilson",
      description: "Assigned since: April 1, 2023",
      icon: <GoPerson />,
    },
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 w-full">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex items-baseline gap-x-2">
              <p className="text-sm text-gray-600">Ambulance /</p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">
                AMB-002
              </p>
            </div>
            <Status variant="Available" text="Available" />
          </div>

          <div className="w-full md:w-auto flex flex-col md:flex-row md:items-center gap-2 md:gap-x-2">
            <Button
              variant="primary"
              text="Schedule Maintenance"
              Icon={FiPenTool}
              className="w-full md:w-auto border border-gray-300"
            />
            <Button
              variant="secondary"
              text="New Ambulance Call"
              Icon={FiTool}
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </div>

      <div className=" grid gap-6 md:grid-cols-4">
        {calls.map((call, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 bg-white l"
          >
            <div>
              <p className="text-lg font-semibold">{call.title}</p>
            </div>
            <div className="flex flex-row justify-between items-center h-full gap-4 pt-4">
              <div>
                <p className="text-2xl font-bold text-gray-800">{call.text}</p>
                <p className="text-xs text-gray-600 mt-1">{call.description}</p>
              </div>
              <div className="text-2xl text-right">{call.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <AmbulancesDetails />
      </div>
    </div>
  );
};

export default Page;
