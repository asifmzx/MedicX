import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { notificationTemplates } from "../NotificationSettingsData";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "@/Components/UI/Button/Button";
import { GoPlus } from "react-icons/go";

import { IoSyncOutline } from "react-icons/io5";

const ScheduledNotifications = () => {
  const columns = [
    { label: "Name", key: "name" },
    { label: "Type", key: "type" },
    { label: "Schedule", key: "schedule" },
    { label: "Last Run", key: "lastRun" },
    { label: "Next Run", key: "nextRun" },

    {
      label: "Status",
      key: "status",
      render: (row) => (
        <Status type="settings" variant={row.status} text={row.status} />
      ),
    },
    {
      label: "Actions",
      key: "action",
      render: () => (
        <button className="text-gray-500 hover:text-black flex items-center justify-center p-2">
          <BsThreeDots />
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-end gap-3 md:gap-4">
        <div className="w-full md:w-[480px] bg-white">
          <SearchInput
            placeholder="Search Template"
            icon={AiOutlineSearch}
            inputClassName="text-sm text-gray-700 py-2"
            wrapperClassName="w-full rounded-md"
          />
        </div>
        <Button
          variant="secondary"
          text="Schedule Notification"
          Icon={GoPlus}
          className="w-full md:w-auto"
        />

        <Button
          variant="primary"
          text="Run Now"
          className="w-full md:w-auto border border-gray-300"
          Icon={IoSyncOutline}
        />
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          <PTable
            columns={columns}
            data={notificationTemplates.scheduledNotifications}
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduledNotifications;
