import Status from '@/Components/UI/Status/Status';
import PTable from '@/Components/UI/Table/PTable';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const InProgress = () => {
    const data = [

    {
        callId: "AC006",
        patient: "Noah Thompson",
        patientNo: "+1 (555) 567-8910",
        location: "987 Cedar Blvd, Greenfield",
        reason: "Unconscious",
        status: "inProgress",
        ambulanceNo: "AMB-006",
        driver: "Ava Robinson",
        date: "2023-04-27",
        time: "07:10 AM",
      },]

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

export default InProgress;