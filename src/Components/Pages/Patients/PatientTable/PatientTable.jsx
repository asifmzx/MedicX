import Button from "@/Components/UI/Button/Button";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiFilter, CiImport } from "react-icons/ci";

const PatientTable = () => {
  const data = [
    {
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Emily Davis",
      age: 32,
      gender: "Female",
      status: "active",
      lastVisit: "2023-07-02",
      condition: "Diabetes Type 2",
      doctor: "Dr. Michael Chen",
    },
    {
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "John Smith",
      age: 45,
      gender: "Male",
      status: "active",
      lastVisit: "2023-06-15",
      condition: "Hypertension",
      doctor: "Dr. Sarah Johnson",
    },
    {
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Robert Wilson",
      age: 58,
      gender: "Male",
      status: "inactive",
      lastVisit: "2023-05-20",
      condition: "Arthritis",
      doctor: "Dr. Lisa Patel",
    },
    {
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Jessica Brown",
      age: 27,
      gender: "Female",
      status: "active",
      lastVisit: "2023-07-10",
      condition: "Asthma",
      doctor: "Dr. James Wilson",
    },
    {
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Michael Johnson",
      age: 41,
      gender: "Male",
      status: "inactive",
      lastVisit: "2023-06-28",
      condition: "Migraine",
      doctor: "Dr. Emily Rodriguez",
    },
    {
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Jessica Brown",
      age: 27,
      gender: "Female",
      status: "active",
      lastVisit: "2023-07-10",
      condition: "Asthma",
      doctor: "Dr. James Wilson",
    },
    {
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Michael Johnson",
      age: 41,
      gender: "Male",
      status: "inactive",
      lastVisit: "2023-06-28",
      condition: "Migraine",
      doctor: "Dr. Emily Rodriguez",
    },
    {
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Jessica Brown",
      age: 27,
      gender: "Female",
      status: "active",
      lastVisit: "2023-07-10",
      condition: "Asthma",
      doctor: "Dr. James Wilson",
    },
    {
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Michael Johnson",
      age: 41,
      gender: "Male",
      status: "inactive",
      lastVisit: "2023-06-28",
      condition: "Migraine",
      doctor: "Dr. Emily Rodriguez",
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
    {
      label: "Age/Gender",
      key: "ageGender",
      render: (row) => (
        <span>
          {row.age} <span className="mx-1">•</span> {row.gender}
        </span>
      ),
    },
    {
      label: "Status",
      key: "status",
      render: (row) => <Status variant={row.status} text={row.status} />,
    },
    { label: "Last Visit", key: "lastVisit" },
    { label: "Condition", key: "condition" },
    { label: "Doctor", key: "doctor" },
    {
      label: "Actions",
      key: "action",
      render: () => (
        <button className="text-xl text-gray-500 hover:text-gray-700 ">
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
            Patients List
          </h1>
          <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
            A list of all patients in your clinic with their details.
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

export default PatientTable;
