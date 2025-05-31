"use client";
import { useState } from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { TfiFilter } from "react-icons/tfi";
import { SlCalender } from "react-icons/sl";

const tabs = [
  { id: "all", label: "All" },
  { id: "available", label: "Available" },
  { id: "reserved", label: "Reserved" },
  { id: "expiringsoon", label: "Expiring Soon" },
];

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const dummyBlood = [
  {
    id: "BS-001",
    bloodType: "A+",
    units: 5,
    collectionDate: "2024-03-15",
    expiryDate: "2024-04-10",
    status: "Available",
    location: "Main Bank",
    donor: "John Doe",
  },
  {
    id: "BS-002",
    bloodType: "O-",
    units: 5,
    collectionDate: "2023-04-16",
    expiryDate: "2023-05-16",
    status: "Reserved",
    location: "Refrigerator 2",
    donor: "Emily Johnson",
  },
  {
    id: "BS-003",
    bloodType: "B+",
    units: 8,
    collectionDate: "2023-04-10",
    expiryDate: "2023-05-10",
    status: "Expiring Soon",
    location: "Refrigerator 1",
    donor: "Michael Brown",
  },
  {
    id: "BS-004",
    bloodType: "AB+",
    units: 3,
    collectionDate: "2023-04-12",
    expiryDate: "2023-05-12",
    status: "Available",
    location: "Refrigerator 3",
    donor: "Sarah Davis",
  },
  {
    id: "BS-005",
    bloodType: "A+",
    units: 4,
    collectionDate: "2023-04-14",
    expiryDate: "2023-05-14",
    status: "Available",
    location: "Refrigerator 2",
    donor: "Robert Wilson",
  },
  {
    id: "BS-006",
    bloodType: "O+",
    units: 15,
    collectionDate: "2023-04-13",
    expiryDate: "2023-05-13",
    status: "Available",
    location: "Refrigerator 1",
    donor: "Jennifer Taylor",
  },
  {
    id: "BS-007",
    bloodType: "B+",
    units: 2,
    collectionDate: "2023-04-08",
    expiryDate: "2023-05-08",
    status: "Expiring Soon",
    location: "Refrigerator 3",
    donor: "David Martinez",
  },
  {
    id: "BS-008",
    bloodType: "AB-",
    units: 1,
    collectionDate: "2023-04-11",
    expiryDate: "2023-05-11",
    status: "Reserved",
    location: "Refrigerator 2",
    donor: "Lisa Anderson",
  },
  {
    id: "BS-009",
    bloodType: "O-",
    units: 7,
    collectionDate: "2023-04-17",
    expiryDate: "2023-05-17",
    status: "Available",
    location: "Refrigerator 4",
    donor: "Test Donor",
  },
  {
    id: "BS-010",
    bloodType: "AB-",
    units: 2,
    collectionDate: "2023-04-18",
    expiryDate: "2023-05-18",
    status: "Reserved",
    location: "Refrigerator 3",
    donor: "Another Donor",
  },
];

const BloodManagement = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = {
    all: () => true,
    available: (item) => item.status === "Available",
    reserved: (item) =>
      item.status === "Reserved" || ["O-", "AB-"].includes(item.bloodType),
    expiringsoon: (item) => {
      const today = new Date();
      const expiryDate = new Date(item.expiryDate);
      const diffDays = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
      return diffDays <= 7;
    },
  };

  const filteredData = dummyBlood.filter((item) => {
    const matchesTab = filters[activeTab](item);
    const matchesBloodType = selectedBloodType
      ? item.bloodType === selectedBloodType
      : true;
    const matchesSearch =
      searchQuery === "" ||
      [item.id, item.bloodType, item.donor].some((field) =>
        field.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesTab && matchesBloodType && matchesSearch;
  });

  const columns = [
    { label: "ID", key: "id" },
    {
      label: "Blood Type",
      key: "bloodType",
      render: (row) => (
        <span className="font-semibold flex items-center justify-center w-14 border border-gray-200 rounded-2xl bg-black/4">
          {row.bloodType}
        </span>
      ),
    },
    { label: "Units", key: "units" },
    { label: "Collection Date", key: "collectionDate" },
    { label: "Expiry Date", key: "expiryDate" },
    {
      label: "Status",
      key: "status",
      render: (row) => (
        <Status type="bloodBank" variant={row.status} text={row.status} />
      ),
    },
    { label: "Location", key: "location" },
    { label: "Donor", key: "donor" },
    {
      label: "Actions",
      key: "action",
      render: () => (
        <button className="text-xl text-gray-500 hover:text-gray-700 transition-colors">
          <BsThreeDots />
        </button>
      ),
    },
  ];

  return (
    <div className="p-2 md:p-6 bg-white rounded-xl shadow max-w-full mt-6">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-2">
        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="w-full flex gap-2">
            <SearchInput
              placeholder="Search blood..."
              icon={AiOutlineSearch}
              inputClassName="text-sm text-gray-700"
              wrapperClassName="flex w-full h-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Buttonv2
              variant="primary_main"
              Icon={TfiFilter}
              className="border border-black/10 h-10 w-15"
            />
            <Buttonv2
              variant="primary_main"
              Icon={SlCalender}
              className="border border-black/10 h-10 w-15"
            />
          </div>
          <div className="flex flex-row gap-2 w-full md:w-auto">
            <select
              className="w-full md:w-auto h-10 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring focus:ring-black"
              value={selectedBloodType}
              onChange={(e) => setSelectedBloodType(e.target.value)}
              style={{ padding: '0 10px' }}
            >
              <option value="">All Types</option>
              {bloodTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <select
              className="w-full md:w-auto h-10 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
              style={{ padding: '0 10px' }}
            >
              <option value="">All Status</option>
              <option value="Available">Available</option>
              <option value="Reserved">Reserved</option>
              <option value="Expiring Soon">Expiring Soon</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row justify-between md:justify-end md:gap-4 items-center w-full text-xs">
          <Buttonv2
            variant="primary_main"
            Icon={TfiFilter}
            text="Refresh"
            className="border border-black/4 h-10 w-[90px]"
          />
          <Buttonv2
            variant="primary_main"
            Icon={SlCalender}
            text="Export"
            className="border border-black/4 h-10 w-[90px]"
          />
          <Buttonv2
            variant="secondary_main"
            Icon={SlCalender}
            text="Add Blood Units"
            className="border border-black/4 h-10 w-[150px]"
          />
        </div>
      </div>

      <div className="sm:w-[290px] mt-4 mb-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:flex sm:flex-row sm:items-center sm:justify-startrounded-mdsm:h-10 sm:gap-2">
          {tabs.map(({ id, label }) => (
            <Buttonv2
              key={id}
              variant="primary"
              text={label}
              onClick={() => setActiveTab(id)}
              isActive={activeTab === id}
            />
          ))}
        </div>
      </div>
      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <PTable columns={columns} data={filteredData} />
      </div>
    </div>
  );
};

export default BloodManagement;
