import Button from "@/Components/UI/Button/Button";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiFilter, CiImport } from "react-icons/ci";

// Status color configuration
const statusColors = {
  Confirmed: "green",
  "In Progress": "blue",
  Completed: "purple",
  Cancelled: "red",
  Pending: "yellow",
};

const AllAppointments = () => {
  const data = [
    {
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Emily Davis",
      doctor: "Dr. Michael Chen",
      dateTime: "2023-07-15 10:30 AM",
      status: "Confirmed",
      type: "Check-up",
      duration: "30 mins",
      condition: "Diabetes Type 2",
      age: 32,
      gender: "Female",
      lastVisit: "2023-07-02",
    },
    {
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "John Smith",
      doctor: "Dr. Sarah Johnson",
      dateTime: "2023-07-16 02:15 PM",
      status: "In Progress",
      type: "Consultation",
      duration: "45 mins",
      condition: "Hypertension",
      age: 45,
      gender: "Male",
      lastVisit: "2023-06-15",
    },
    {
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Robert Wilson",
      doctor: "Dr. Lisa Patel",
      dateTime: "2023-07-14 09:00 AM",
      status: "Completed",
      type: "Follow-up",
      duration: "60 mins",
      condition: "Arthritis",
      age: 58,
      gender: "Male",
      lastVisit: "2023-05-20",
    },
    {
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Jessica Brown",
      doctor: "Dr. James Wilson",
      dateTime: "2023-07-17 11:45 AM",
      status: "Confirmed",
      type: "Dental Cleaning",
      duration: "30 mins",
      condition: "Asthma",
      age: 27,
      gender: "Female",
      lastVisit: "2023-07-10",
    },
    {
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Michael Johnson",
      doctor: "Dr. Emily Rodriguez",
      dateTime: "2023-07-18 03:30 PM",
      status: "Pending",
      type: "X-Ray",
      duration: "45 mins",
      condition: "Migraine",
      age: 41,
      gender: "Male",
      lastVisit: "2023-06-28",
    },
    {
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Sarah Miller",
      doctor: "Dr. David Kim",
      dateTime: "2023-07-19 01:00 PM",
      status: "Cancelled",
      type: "Therapy Session",
      duration: "60 mins",
      condition: "Allergies",
      age: 35,
      gender: "Female",
      lastVisit: "2023-06-10",
    },
    {
      img: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Daniel Garcia",
      doctor: "Dr. Olivia Martinez",
      dateTime: "2023-07-20 10:00 AM",
      status: "Confirmed",
      type: "Annual Physical",
      duration: "30 mins",
      condition: "High Cholesterol",
      age: 52,
      gender: "Male",
      lastVisit: "2023-07-05",
    },
    {
      img: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Jennifer Lee",
      doctor: "Dr. William Brown",
      dateTime: "2023-07-21 04:15 PM",
      status: "In Progress",
      type: "Vaccination",
      duration: "45 mins",
      condition: "Anxiety",
      age: 29,
      gender: "Female",
      lastVisit: "2023-06-22",
    },
    {
      img: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Thomas Wilson",
      doctor: "Dr. Sophia Taylor",
      dateTime: "2023-07-22 08:30 AM",
      status: "Completed",
      type: "Check-up",
      duration: "60 mins",
      condition: "Back Pain",
      age: 47,
      gender: "Male",
      lastVisit: "2023-05-15",
    },
  ];

  const columns = [
    {
      label: "Patient",
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
      label: "Doctor",
      key: "doctor",
    },
    {
      label: "Date & Time",
      key: "dateTime",
      render: (row) => (
        <span className="whitespace-nowrap">{row.dateTime}</span>
      )
    },
    {
      label: "Status",
      key: "status",
      render: (row) => (
        <Status variant={statusColors[row.status]} text={row.status} />
      ),
    },
    {
      label: "Type",
      key: "type",
      render: (row) => (
        <span className="capitalize">{row.type}</span>
      )
    },
    {
      label: "Duration",
      key: "duration",
      render: (row) => (
        <span className="whitespace-nowrap">{row.duration}</span>
      )
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
            All Appointments
          </h1>
          <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
            View and manage all scheduled appointments.
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
        <PTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default AllAppointments;