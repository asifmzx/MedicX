import Button from "@/Components/UI/Button/Button";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { BsThreeDots } from "react-icons/bs";
import { GoPlus } from "react-icons/go";

const Equipment = () => {
  const services = [
    {
      Id: "E001",
      equipment: "Defibrillator",
      model: "Philips HeartStart FR3",
      serialNumber: "PHI-12345",
      lastInspection: "2023-03-15",
      nextInspection: "2023-06-15",
      status: "Operational",
    },
    {
      Id: "E002",
      equipment: "Oxygen Tank",
      model: "OxyFlow 5000",
      serialNumber: "OF-67890",
      lastInspection: "2023-04-01",
      nextInspection: "2023-07-01",
      status: "Operational",
    },
    {
      Id: "E003",
      equipment: "Stretcher",
      model: "Stryker Power-PRO XT",
      serialNumber: "SPX-54321",
      lastInspection: "2023-03-20",
      nextInspection: "2023-06-20",
      status: "Operational",
    },
    {
      Id: "E004",
      equipment: "Suction Unit",
      model: "VacuMed 3000",
      serialNumber: "VM-13579",
      lastInspection: "2023-02-28",
      nextInspection: "2023-05-28",
      status: "Needs Inspection",
    },
    {
      Id: "E005",
      equipment: "Blood Pressure Monitor",
      model: "Omron Pro",
      serialNumber: "OP-24680",
      lastInspection: "2023-03-10",
      nextInspection: "2023-06-10",
      status: "Operational",
    },
  ];

  const columns = [
    {
      label: "ID",
      key: "Id",
      render: (row) => <p className="font-medium text-gray-900">{row.Id}</p>,
    },
    {
      label: "Equipment",
      key: "equipment",
    },
    {
      label: "Model",
      key: "model",
    },
    {
      label: "Serial Number",
      key: "serialNumber",
    },
    {
      label: "Last Inspection",
      key: "lastInspection",
      render: (row) => (
        <div>
          <p>{row.lastInspection}</p>
          <p className="text-gray-500 text-sm">Next: {row.nextInspection}</p>
        </div>
      ),
    },
    {
      label: "Status",
      key: "status",
      render: (row) => (
        <Status type="ambulance" variant={row.status} text={row.status} />
      ),
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
      <div className="pt-4 flex justify-end">
        <Button variant="secondary" text="Add Equipment" Icon={GoPlus} />
      </div>
    </div>
  );
};

export default Equipment;
