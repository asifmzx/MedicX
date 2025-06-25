import AmbulanceList from "@/Components/Pages/Ambulance/AmbulanceList/AmbulanceList";
import { LuAmbulance } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LiaCarSideSolid } from "react-icons/lia";
import { LiaToolsSolid } from "react-icons/lia";
import Button from "@/Components/UI/Button/Button";

const Page = () => {
  const calls = [
    {
      title: "Total Ambulances",
      text: "7",
      description: "+1 from last month",
      icon: <LuAmbulance />,
    },
    {
      title: "Available Ambulances",
      text: "4",
      description: "2 on call, 1 in maintenance",
      icon: <LiaCarSideSolid />,
    },
    {
      title: "Maintenance Due",
      text: "2",
      description: "Next scheduled: May 20, 2023",
      icon: <LiaToolsSolid />,
    },
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-2xl font-bold">Ambulance List</p>
          <p className="text-sm text-gray-600">
            Manage and track all ambulances in the fleet
          </p>
        </div>
        <div className="w-full md:w-auto">
          <Button
            variant="secondary"
            text="New Ambulance Call"
            Icon={FiPlus}
            className="w-full md:w-auto"
          />
        </div>
      </div>

      <div className=" grid gap-6 md:grid-cols-3">
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
                <p className="text-4xl font-bold text-gray-800">{call.text}</p>
                <p className="text-xs text-gray-600 mt-1">{call.description}</p>
              </div>
              <div className="text-2xl text-right">{call.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <AmbulanceList />
      </div>
    </div>
  );
};

export default Page;
