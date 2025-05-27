import Button from "@/Components/UI/Button/Button";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiFilter, CiImport } from "react-icons/ci";

const DoctorsListTable = () => {
  const data = [
    {
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Dr. Emily Davis",
      patients: 32,
      gender: "Female",
      status: "active",
      experience: "8 year",
      doctor: "Dr. Michael Chen",
      email: "emily.davis@example.com",
      phone: "+1 (555) 123-4567",
      specialty: "Cardiology",
    },
    {
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Dr. John Smith",
      patients: 45,
      gender: "Male",
      status: "active",
      experience: "8 year",
      doctor: "Dr. Sarah Johnson",
      email: "john.smith@example.com",
      phone: "+1 (555) 234-5678",
      specialty: "Dermatology",
    },
    {
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Dr. Robert Wilson",
      patients: 58,
      gender: "Male",
      status: "inactive",
      experience: "8 year",
      doctor: "Dr. Lisa Patel",
      email: "robert.wilson@example.com",
      phone: "+1 (555) 345-6789",
      specialty: "Neurology",
    },
    {
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Dr. Jessica Brown",
      patients: 27,
      gender: "Female",
      status: "active",
      experience: "12 year",
      doctor: "Dr. James Wilson",
      email: "jessica.brown@example.com",
      phone: "+1 (555) 456-7890",
      specialty: "Pediatrics",
    },
    {
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Dr. Michael Johnson",
      patients: 41,
      gender: "Male",
      status: "inactive",
      experience: "6 year",
      doctor: "Dr. Emily Rodriguez",
      email: "michael.johnson@example.com",
      phone: "+1 (555) 567-8901",
      specialty: "Orthopedics",
    },
    {
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Dr. Sophia Martinez",
      patients: 36,
      gender: "Female",
      status: "active",
      experience: "10 year",
      doctor: "Dr. Kevin Lee",
      email: "sophia.martinez@example.com",
      phone: "+1 (555) 678-9012",
      specialty: "Oncology",
    },
    {
      img: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Dr. Daniel Anderson",
      patients: 49,
      gender: "Male",
      status: "active",
      experience: "7 year",
      doctor: "Dr. Olivia Kim",
      email: "daniel.anderson@example.com",
      phone: "+1 (555) 789-0123",
      specialty: "Psychiatry",
    },
    {
      img: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Dr Laura Thompson",
      patients: 39,
      gender: "Female",
      status: "onLeave",
      experience: "9 year",
      doctor: "Dr. Robert Green",
      email: "laura.thompson@example.com",
      phone: "+1 (555) 890-1234",
      specialty: "Gynecology",
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
    { label: "Specialty", key: "specialty" },
    {
      label: "Status",
      key: "status",
      render: (row) => <Status variant={row.status} text={row.status} />,
    },
    { label: "Patients", key: "patients" },
    { label: "Experience", key: "experience" },
    {
      label: "Contact",
      key: "contact",
      render: (row) => (
        <div className="text-sm text-gray-700">
          <p>{row.email}</p>
          <p>{row.phone}</p>
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
    <div className="p-4 md:p-6 bg-white rounded-xl shadow max-w-full">
      <div className="pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
            Doctors List
          </h1>
          <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
            A list of all doctors in your clinic with their details.
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

export default DoctorsListTable;
