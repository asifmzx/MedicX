import AmbulanceCallList from "@/Components/Pages/Ambulance/AmbulanceCallList/AmbulanceCallList";
import { LuAmbulance } from "react-icons/lu";
import { FiPhone, FiPlus } from "react-icons/fi";
import { LuClock4 } from "react-icons/lu";
import Button from "@/Components/UI/Button/Button";

const Page = () => {
  const calls = [
    {
      title: "Total Calls",
      text: "127",
      description: "+5.2% from last month",
      icon: <LuAmbulance />,
    },
    {
      title: "Active Calls",
      text: "3",
      description: "2 pending, 1 in progress",
      icon: <FiPhone />,
    },
    {
      title: "Average Response Time",
      text: "8.5 min",
      description: "-1.2 min from last month",
      icon: <LuClock4 />,
    },
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-2xl font-bold">Ambulance Call List</p>
          <p className="text-sm text-gray-600">
            Manage and track all ambulance calls and dispatches
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
        <AmbulanceCallList />
      </div>
    </div>
  );
};

export default Page;
