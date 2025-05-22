import { BiTachometer } from "react-icons/bi";
import { LuClock4 } from "react-icons/lu";

const Overview = () => {
  const data = [
    {
      id: "AMB-002",
      registration: "ABC-5678",
      model: "Mercedes Sprinter",
      year: 2022,
      type: "Advanced Life Support",
      purchaseDate: "2022-01-15",
      insuranceExpiry: "2024-01-15",
      fuelType: "Diesel",
      mileage: "12,450 km",
      capacity: {
        stretchers: 2,
        seated: 3,
      },
      currentLocation: "East Wing",
      currentDriver: "Sarah Wilson",
      lastMaintenance: "2023-04-02",
      nextMaintenance: "2023-07-02",
    },
  ];
  const calls = [
    {
      title: "Total Distance",
      text: "12,450 km",
      description: "+450 km this month",
      icon: <BiTachometer />,
    },
    {
      title: "Average Response Time",
      text: "8.2 min",
      description: "-0.5 min from last month",
      icon: <LuClock4 />,
    },
    {
      title: "Fuel Efficiency",
      text: "9.8 L/100km",
      description: "Within normal range",
      icon: <BiTachometer />,
    },
  ];

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-300">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Ambulance Overview</h2>
        <p className="text-gray-600">General information and specifications</p>
      </div>

      {data.map((item, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg  mb-4 ">General Information</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              <p className="text-gray-500">ID:</p>
              <span>{item.id}</span>
              <p className="text-gray-500">Registration:</p>
              <span>{item.registration}</span>
              <p className="text-gray-500">Model:</p>
              <span>{item.model}</span>
              <p className="text-gray-500">Year:</p>
              <span>{item.year}</span>
              <p className="text-gray-500">Type:</p>
              <span>{item.type}</span>
              <p className="text-gray-500">Purchase Date:</p>
              <span>{item.purchaseDate}</span>
              <p className="text-gray-500">Insurance Expiry:</p>
              <span>{item.insuranceExpiry}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              <p className="text-gray-500">Fuel Type:</p>
              <span>{item.fuelType}</span>

              <p className="text-gray-500">Mileage:</p>
              <span>{item.mileage}</span>

              <p className="text-gray-500">Capacity:</p>
              <span>
                {item.capacity.stretchers} stretchers, {item.capacity.seated}
                seated
              </span>

              <p className="text-gray-500">Current Location:</p>
              <span>{item.currentLocation}</span>

              <p className="text-gray-500">Current Driver:</p>
              <span>{item.currentDriver}</span>

              <p className="text-gray-500">Last Maintenance:</p>
              <span>{item.lastMaintenance}</span>

              <p className="text-gray-500">Next Maintenance:</p>
              <span>{item.nextMaintenance}</span>
            </div>
          </div>
        </div>
      ))}
      <p className="text-lg my-4 pt-8">Usage Statistics</p>
      <div className=" grid gap-6 md:grid-cols-3 ">
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
    </div>
  );
};

export default Overview;
