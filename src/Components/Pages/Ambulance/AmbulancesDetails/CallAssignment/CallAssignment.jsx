import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { BsThreeDots } from "react-icons/bs";

const CallAssignment = () => {
  const services = [
    {
      Id: "CA001",
      patient: "John Doe",
      location: "123 Main St, Anytown",
      serialNumber: "PHI-12345",
      date: "2023-03-15",
      time: "11:30",
      duration: "45 min",
      status: "Completed",
    },
    {
      Id: "CA002",
      patient: "Jane Smith",
      location: "456 Oak Ave, Somewhere",
      serialNumber: "OF-67890",
      date: "2023-04-01",
      time: "14:30",
      duration: "1 hr 20 min",
      status: "Completed",
    },
    {
      Id: "CA003",
      patient: "Robert Johnson",
      location: "789 Pine Rd, Elsewhere",
      serialNumber: "SPX-54321",
      date: "2023-03-20",
      time: "09:15",
      duration: "55 min",
      status: "Completed",
    },
    {
      Id: "CA004",
      patient: "Emily Davis",
      location: "321 Elm St, Nowhere",
      serialNumber: "VM-13579",
      date: "2023-02-28",
      time: "18:45",
      duration: "40 min",
      status: "Completed",
    },
  ];

  const columns = [
    {
      label: "ID",
      key: "Id",
      render: (row) => <p className="font-medium text-gray-900">{row.Id}</p>,
    },
    {
      label: "Patient",
      key: "patient",
    },
    {
      label: "Date & Time",
      key: "date",
      render: (row) => (
        <div>
          <p>{row.date}</p>
          <p className="text-gray-500 text-sm">{row.time}</p>
        </div>
      ),
    },
    {
      label: "Location",
      key: "location",
    },
    {
      label: "Serial Number",
      key: "serialNumber",
    },
    {
      label: "Date & Time",
      key: "date",
      render: (row) => (
        <div>
          <p className="text-gray-500 text-sm">{row.duration}</p>
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
            Call Assignment History
          </h1>
          <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
            Record of all ambulance call assignments
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

export default CallAssignment;
