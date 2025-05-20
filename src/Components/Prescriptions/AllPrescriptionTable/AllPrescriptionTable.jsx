import Button from "@/Components/UI/Button/Button";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiFilter, CiImport } from "react-icons/ci";

const AllPrescriptionTable = () => {
    const data = [
      {
        img: "https://randomuser.me/api/portraits/women/1.jpg",
        name: "Emily Davis",
        doctor: "Dr. Michael Chen",
        refills: 32,
        status: "active",
        medicine1: "Lisinopril 10mg",
        dose1: "Once daily",
        medicine2: "Metformin 500mg",
        dose2: "Twice daily",
        date: "2023-07-15",
      },
      {
        img: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "James Wilson",
        doctor: "Dr. Sarah Lee",
        refills: 12,
        status: "active",
        medicine1: "Atorvastatin 20mg",
        dose1: "Once daily",
        medicine2: "Aspirin 81mg",
        dose2: "Once daily",
        date: "2023-06-10",
      },
      {
        img: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Olivia Brown",
        doctor: "Dr. Raj Patel",
        refills: 5,
        status: "active",
        medicine1: "Levothyroxine 75mcg",
        dose1: "Once daily",
        medicine2: "Vitamin D 1000 IU",
        dose2: "Once daily",
        date: "2023-08-01",
      },
      {
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Daniel Smith",
        doctor: "Dr. Emily Zhang",
        refills: 20,
        status: "expired",
        medicine1: "Metoprolol 50mg",
        dose1: "Twice daily",
        medicine2: "Losartan 25mg",
        dose2: "Once daily",
        date: "2023-07-20",
      },
      {
        img: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Sophia Johnson",
        doctor: "Dr. Michael Chen",
        refills: 8,
        status: "active",
        medicine1: "Albuterol Inhaler",
        dose1: "As needed",
        medicine2: "Montelukast 10mg",
        dose2: "Once daily",
        date: "2023-05-05",
      },
      {
        img: "https://randomuser.me/api/portraits/men/6.jpg",
        name: "Liam Garcia",
        doctor: "Dr. Sarah Lee",
        refills: 15,
        status: "active",
        medicine1: "Insulin Glargine",
        dose1: "Once daily at bedtime",
        medicine2: "Metformin 1000mg",
        dose2: "Twice daily",
        date: "2023-09-01",
      },
      {
        img: "https://randomuser.me/api/portraits/women/7.jpg",
        name: "Ava Martinez",
        doctor: "Dr. Raj Patel",
        refills: 25,
        status: "expired",
        medicine1: "Sertraline 50mg",
        dose1: "Once daily",
        medicine2: "Melatonin 5mg",
        dose2: "At bedtime",
        date: "2023-07-25",
      },
      {
        img: "https://randomuser.me/api/portraits/men/8.jpg",
        name: "Noah Thompson",
        doctor: "Dr. Emily Zhang",
        refills: 18,
        status: "active",
        medicine1: "Amlodipine 10mg",
        dose1: "Once daily",
        medicine2: "Hydrochlorothiazide 25mg",
        dose2: "Once daily",
        date: "2023-06-18",
      },
    ];
      

  const columns = [
    {
      label: "Name",
      key: "name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.img}
            alt={row.name}
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="font-medium text-gray-900">{row.name}</span>
        </div>
      ),
    },
    { label: "Doctor", key: "doctor" },
    { label: "Date", key: "date" },
    {
      label: "Status",
      key: "status",
      render: (row) => <Status variant={row.status} text={row.status} />,
    },

    {
      label: "Contact",
      key: "contact",
      render: (row) => (
        <div className="text-sm text-gray-700">
          <p className="flex items-center gap-x-1">
            <span>{row.medicine1}</span>
            <span>({row.dose1})</span>
          </p>
          <p className="flex items-center gap-x-1">
            <span> {row.medicine2}</span>
            <span>({row.dose2})</span>
          </p>
        </div>
      ),
    },
    { label: "Refills", key: "refills" },
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
            All Prescriptions
          </h1>
          <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
            View and manage all patient prescriptions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
          <SearchInput
            placeholder="Search users..."
            icon={AiOutlineSearch}
            inputClassName="text-sm text-gray-700"
            wrapperClassName="flex-grow sm:flex-grow-0"
          />
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="primary"
              Icon={CiFilter}
              text="Filter"
              className="border border-gray-300 whitespace-nowrap"
            />
            <Button
              variant="primary"
              Icon={CiImport}
              text=""
              className="border border-gray-300"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          <PTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default AllPrescriptionTable;
