import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Pending = () => {
  const data = [
    {
      callId: "AC002",
      patient: "John Smith",
      patientNo: "+1 (555) 987-6543",
      location: "456 Oak Ave, Springville",
      reason: "Fractured Leg",
      status: "pending",
      ambulanceNo: "AMB-002",
      driver: "Sarah Lee",
      date: "2023-04-23",
      time: "11:15 AM",
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

export default Pending;
