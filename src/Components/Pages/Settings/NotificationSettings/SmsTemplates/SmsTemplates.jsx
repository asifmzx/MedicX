import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable"; // adjust path if needed
import { notificationTemplates } from "../NotificationSettingsData";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "@/Components/UI/Button/Button";
import { GoPlus } from "react-icons/go";
import { TfiExport, TfiImport } from "react-icons/tfi";

const SmsTemplates = () => {
  const columns = [
    { label: "Name", key: "name" },
    { label: "Date", key: "date" },
    { label: "content", key: "content" },
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
          text="Create Template"
          Icon={GoPlus}
          className="w-full md:w-auto"
        />
        <div className="flex md:flex-none gap-x-2">
          <Button
            variant="primary"
            text="Import"
            className="w-full md:w-auto border border-gray-300"
            Icon={TfiImport}
          />
          <Button
            variant="primary"
            text="Export"
            Icon={TfiExport}
            className="w-full md:w-auto border border-gray-300"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          <PTable columns={columns} data={notificationTemplates.smsTemplates} />
        </div>
      </div>
    </div>
  );
};

export default SmsTemplates;
