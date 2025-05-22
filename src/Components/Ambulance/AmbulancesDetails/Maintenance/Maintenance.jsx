import Button from "@/Components/UI/Button/Button";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiFilter, CiImport } from "react-icons/ci";

const Maintenance = () => {
  const services = [
    {
      Id: "M001",
      date: "2023-04-02",
      type: "Tire Replacement",
      description: "Oil change, filter replacement, brake inspection",
      technician: "Michael Johnson",
      cost: "$350",
      status: "completed",
    },
    {
      Id: "M002",
      date: "2023-05-12",
      type: "Engine Repair",
      description: "Replaced spark plugs, cleaned injectors, fixed oil leak",
      technician: "Sarah Lee",
      cost: "$750",
      status: "completed",
    },
    {
      Id: "M003",
      date: "2023-06-20",
      type: "Battery Replacement",
      description: "Installed new battery, checked charging system",
      technician: "David Kim",
      cost: "$200",
      status: "completed",
    },
    {
      Id: "M004",
      date: "2023-07-15",
      type: "Brake Service",
      description: "Replaced brake pads and rotors, tested brake fluid",
      technician: "Emily Zhang",
      cost: "$450",
      status: "completed",
    },
    {
      Id: "M005",
      date: "2023-08-01",
      type: "Transmission Check",
      description: "Diagnosed transmission issues, fluid replacement",
      technician: "Carlos Ramirez",
      cost: "$620",
      status: "completed",
    },
  ];

  const columns = [
    {
      label: "ID",
      key: "Id",
      render: (row) => <p className="font-medium text-gray-900">{row.Id}</p>,
    },
    {
      label: "Date",
      key: "date",
    },
    {
      label: "Type",
      key: "type",
    },
    {
      label: "Description",
      key: "description",
    },
    {
      label: "Technician",
      key: "technician",
    },
    {
      label: "Cost",
      key: "cost",
    },
    {
      label: "Status",
      key: "status",
      render: (row) => <Status variant={row.status} text={row.status} />,
    },
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
    <div className="p-4 md:p-6 bg-white rounded-xl shadow max-w-full">
      <div className="pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
            Maintenance History
          </h1>
          <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
            Record of all maintenance activities
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          <PTable columns={columns} data={services} />
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
