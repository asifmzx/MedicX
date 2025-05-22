import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Completed = () => {
  const data = [
    {
      callId: "AC001",
      patient: "Emily Davis",
      patientNo: "+1 (555) 123-4567",
      location: "123 Main St, Anytown",
      reason: "Chest Pain",
      status: "completed",
      ambulanceNo: "AMB-001",
      driver: "Michael Johnson",
      date: "2023-04-22",
      time: "08:30 AM",
    },
    {
      callId: "AC004",
      patient: "Liam Wilson",
      patientNo: "+1 (555) 345-6789",
      location: "321 Maple St, Lakeview",
      reason: "Car Accident",
      status: "completed",
      ambulanceNo: "AMB-004",
      driver: "Emma Garcia",
      date: "2023-04-25",
      time: "09:00 AM",
    },
    {
      callId: "AC007",
      patient: "Isabella Clark",
      patientNo: "+1 (555) 678-9102",
      location: "135 Birch Ln, Brookside",
      reason: "Allergic Reaction",
      status: "completed",
      ambulanceNo: "AMB-007",
      driver: "Logan Martinez",
      date: "2023-04-28",
      time: "12:35 PM",
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

    {
      label: "Date & Time",
      key: "date&time",
      render: (row) => (
        <div className="text-sm text-gray-700">
          <p>{row.date}</p>
          <p>{row.time}</p>
        </div>
      ),
    },

    { label: "Location", key: "location" },
    { label: "Reason", key: "reason" },
    {
      label: "Status",
      key: "status",
      render: (row) => <Status variant={row.status} text={row.status} />,
    },
    {
      label: "Ambulance",
      key: "ambulance",
      render: (row) => (
        <div className="text-sm text-gray-700">
          <p className="font-medium text-gray-900">{row.ambulanceNo}</p>
          <p>{row.driver}</p>
        </div>
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
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-[700px] border border-gray-300 rounded-lg">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Completed;
