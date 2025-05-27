import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { BsThreeDots } from "react-icons/bs";

const AllTemplateTable = () => {
  const data = [
    {
      templateName: "Hypertension Standard",
      category: "Cardiovascular",
      medications: 6,
      createdBy: "Dr. James Wilson",
      lastUsed: "2024-03-15",
      Usage: "42 times",
    },
    {
      templateName: "Diabetes Type 2 Management",
      category: "Endocrinology",
      medications: 4,
      createdBy: "Dr. Laura Chen",
      lastUsed: "2024-05-10",
      Usage: "58 times",
    },
    {
      templateName: "Asthma Mild Protocol",
      category: "Respiratory",
      medications: 3,
      createdBy: "Dr. Robert Singh",
      lastUsed: "2024-04-22",
      Usage: "35 times",
    },
    {
      templateName: "Chronic Kidney Disease Stage 3",
      category: "Nephrology",
      medications: 5,
      createdBy: "Dr. Maria Gonzalez",
      lastUsed: "2024-05-01",
      Usage: "29 times",
    },
    {
      templateName: "Migraine Acute Treatment",
      category: "Neurology",
      medications: 2,
      createdBy: "Dr. Thomas Lee",
      lastUsed: "2024-05-17",
      Usage: "47 times",
    },
    {
      templateName: "Hyperlipidemia Standard",
      category: "Cardiovascular",
      medications: 3,
      createdBy: "Dr. Aisha Rahman",
      lastUsed: "2024-04-30",
      Usage: "39 times",
    },
  ];

  const columns = [
    {
      label: "Name",
      key: "templateName",
      render: (row) => (
        <div className="font-medium ">{row.templateName}</div>
      ),
    },
    {
      label: "Category",
      key: "category",
    },
    {
      label: "Created By",
      key: "createdBy",
      render: (row) => row.createdBy ?? "-",
    },
    {
      label: "Medications",
      key: "medications",
    },
    {
      label: "Last Used",
      key: "lastUsed",
    },
    {
      label: "Usage",
      key: "Usage",
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
      <div className="pb-6 ">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
          All Templates
        </h1>
        <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
          Browse and manage all medication templates.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default AllTemplateTable;
