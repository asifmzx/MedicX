import React from "react";
import TemplateDetails from "../AllTemplates/TemplateDetails/TemplateDetails";
import PTable from "@/Components/UI/Table/PTable";
import { ImFilesEmpty } from "react-icons/im";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "@/Components/UI/Button/Button";

const MyTemplates = () => {
  const data = [
    {
      templateName: "Hypertension Standard",
      category: "Cardiovascular",
      medications: 6,
      created: "2024-01-25",
      lastUsed: "2024-03-15",
    },
    {
      templateName: "Diabetes Type 2 Management",
      category: "Endocrinology",
      medications: 4,
      created: "2024-04-10",
      lastUsed: "2024-05-10",
    },
  ];

  const columns = [
    {
      label: "Name",
      key: "templateName",
      render: (row) => <div className="font-medium ">{row.templateName}</div>,
    },
    {
      label: "Category",
      key: "category",
    },

    {
      label: "Medications",
      key: "medications",
    },
    {
      label: "Created On",
      key: "created",
    },
    {
      label: "Last Used",
      key: "lastUsed",
    },

    {
      label: "Actions",
      key: "action",
      render: () => (
        <div className="flex items-center gap-x-2">
          <Button
            variant="primary"
            text=""
            Icon={BiEdit}
            className="border border-gray-200"
          />
          <Button
            variant="primary"
            text=""
            Icon={ImFilesEmpty}
            className="border border-gray-200"
          />
          <Button
            variant="primary"
            text=""
            Icon={AiOutlineDelete}
            className="text-red-500 border border-gray-200"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="pb-6 h-[40vh] bg-white rounded-xl p-4 flex flex-col justify-center">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
          Recently Used Templates
        </h1>
        <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
          Templates that have been used in the last 30 days.
        </p>
        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            <PTable columns={columns} data={data} />
          </div>
        </div>
      </div>
      <div>
        <TemplateDetails />
      </div>
    </div>
  );
};

export default MyTemplates;
