import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { BsThreeDots } from "react-icons/bs";

const Maintenance = () => {
  const data = [
    {
      callId: "AC003",
      registration: "DEF-9012",
      model: "Mercedes Sprinter",
      year: "2021",
      type: "Critical Care Unit",
      location: "Downtown Station",
      status: "Maintenance",
      driver: "James Miller",
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

export default Maintenance;
