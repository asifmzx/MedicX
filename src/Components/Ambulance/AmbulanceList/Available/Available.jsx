import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { BsThreeDots } from "react-icons/bs";

const Available = () => {
  const data = [
    {
      callId: "AC001",
      registration: "XYZ-1234",
      model: "Toyota HiAce",
      year: "2023",
      type: "Basic Life Support",
      location: "Main Hospital",
      status: "Available",
      driver: "Michael Johnson",
    },

    {
      callId: "AC004",
      registration: "GHI-3456",
      model: "Nissan NV350",
      year: "2024",
      type: "Basic Life Support",
      location: "Eastside Medical",
      status: "Available",
      driver: "Emma Garcia",
    },

    {
      callId: "AC006",
      registration: "MNO-1122",
      model: "Hyundai Starex",
      year: "2023",
      type: "Patient Transport",
      location: "South Health Center",
      status: "Available",
      driver: "Ava Robinson",
    },
    {
      callId: "AC007",
      registration: "PQR-3344",
      model: "Renault Master",
      year: "2022",
      type: "Critical Care Unit",
      location: "Central Depot",
      status: "Available",
      driver: "Logan Martinez",
    },
  ];

  const columns = [
    {
      label: "Call Id",
      key: "callId",
      render: (row) => (
        <p className="font-medium text-gray-900">{row.callId}</p>
      ),
    },
    { label: "Registration", key: "registration" },
    {
      label: "Model",
      key: "model",
      render: (row) => (
        <div className="text-sm text-gray-700">
          <p>{row.model}</p>
          <p className="text-xs text-gray-500">{row.year}</p>
        </div>
      ),
    },

    { label: "Type", key: "type" },

    {
      label: "Status",
      key: "status",
      render: (row) => <Status variant={row.status} text={row.status} />,
    },
    { label: "Driver", key: "driver" },
    { label: "Location", key: "location" },

    {
      label: "Actions",
      key: "action",
      render: () => (
        <button className="text-xl text-gray-500 hover:text-gray-700">
          <BsThreeDots />
        </button>
      ),
    },
  ];
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-[700px] border border-gray-300 rounded-lg">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Available;
