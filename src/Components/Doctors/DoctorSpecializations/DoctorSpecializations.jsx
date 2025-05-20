import Button from "@/Components/UI/Button/Button";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import DoctorSpecializationsModal from "@/Components/UI/Modal/DoctorSpecializationsModal";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const DoctorSpecializations = () => {
  const data = [
    {
      name: "Cardiology",
      description: "Diagnosis and treatment of heart disorders",
      doctors: 6,
      specialty: "Cardiology",
      department: "Internal Medicine",
      status: "active",
      patients: 120,
      experience: "10 years",
      email: "cardiology@hospital.com",
      phone: "+1234567890",
      img: "https://randomuser.me/api/portraits/med/men/1.jpg",
    },
    {
      name: "Dermatology",
      description: "Diagnosis and treatment of disorders of the nervous system",
      doctors: 2,
      specialty: "Dermatology",
      department: "Neuroscience",
      status: "active",
      patients: 80,
      experience: "8 years",
      email: "dermatology@hospital.com",
      phone: "+1234567891",
      img: "https://randomuser.me/api/portraits/med/women/2.jpg",
    },
    {
      name: "Neurology",
      description: "Medical care of infants, children, and adolescents",
      doctors: 4,
      specialty: "Neurology",
      department: "Child Health",
      status: "inactive",
      patients: 50,
      experience: "12 years",
      email: "neurology@hospital.com",
      phone: "+1234567892",
      img: "https://randomuser.me/api/portraits/med/men/3.jpg",
    },
    {
      name: "Pediatrics",
      description: "Treatment of the musculoskeletal system",
      doctors: 7,
      specialty: "Pediatrics",
      department: "Surgery",
      status: "active",
      patients: 200,
      experience: "15 years",
      email: "pediatrics@hospital.com",
      phone: "+1234567893",
      img: "https://randomuser.me/api/portraits/med/women/4.jpg",
    },
    {
      name: "Orthopedics",
      description: "Diagnosis and treatment of skin disorders",
      doctors: 3,
      specialty: "Orthopedics",
      department: "Skin Health",
      status: "inactive",
      patients: 70,
      experience: "9 years",
      email: "orthopedics@hospital.com",
      phone: "+1234567894",
      img: "https://randomuser.me/api/portraits/med/men/5.jpg",
    },
    {
      name: "Oncology",
      description: "Diagnosis, prevention, and treatment of mental disorders",
      doctors: 5,
      specialty: "Oncology",
      department: "Mental Health",
      status: "active",
      patients: 90,
      experience: "11 years",
      email: "oncology@hospital.com",
      phone: "+1234567895",
      img: "https://randomuser.me/api/portraits/med/women/6.jpg",
    },
    {
      name: "Psychiatry",
      description: "Diagnosis and treatment of eye disorders",
      doctors: 4,
      specialty: "Psychiatry",
      department: "Eye Care",
      status: "active",
      patients: 60,
      experience: "13 years",
      email: "psychiatry@hospital.com",
      phone: "+1234567896",
      img: "https://randomuser.me/api/portraits/med/men/7.jpg",
    },
    {
      name: "Gynecology",
      description: "Health of the female reproductive system",
      doctors: 5,
      specialty: "Gynecology",
      department: "Women's Health",
      status: "onLeave",
      patients: 100,
      experience: "14 years",
      email: "gynecology@hospital.com",
      phone: "+1234567897",
      img: "https://randomuser.me/api/portraits/med/women/8.jpg",
    },
  ];

  const columns = [
    {
      label: "Name",
      key: "name",
      render: (row) => (
        <div className="font-medium text-gray-900">{row.name}</div>
      ),
    },
    {
      label: "Description",
      key: "description",
    },
    {
      label: "Doctors",
      key: "doctors",
      render: (row) => row.doctors ?? row.doctor ?? "-",
    },
    {
      label: "Department",
      key: "department",
    },
    {
      label: "Status",
      key: "status",
      render: (row) => <Status variant={row.status} text={row.status} />,
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
            placeholder="Search Doctors..."
            icon={AiOutlineSearch}
            inputClassName="text-sm text-gray-700"
            wrapperClassName="flex-grow sm:flex-grow-0"
          />
          <div className="flex items-center gap-3 flex-shrink-0">
            <DoctorSpecializationsModal />
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

export default DoctorSpecializations;
