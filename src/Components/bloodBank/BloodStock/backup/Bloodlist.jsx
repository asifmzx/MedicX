"use client";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const BloodList = ({ filter }) => {
  const dummyBloodUnits = [
    {
      id: "BS-001",
      bloodType: "A+",
      units: 12,
      collectionDate: "2023-04-15",
      expiryDate: "2023-05-15",
      status: "Available",
      location: "Refrigerator 1",
      donor: "John Smith",
    },
    {
      id: "BS-002",
      bloodType: "O+",
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
      bloodType: "AB+",
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
      status: "Available",
      location: "Refrigerator 3",
      donor: "Another Donor",
    },
  ];

  const filteredData = filter
    ? dummyBloodUnits.filter(filter)
    : dummyBloodUnits;

  const columns = [
    { label: "ID", key: "id" },
    {
      label: "Blood Type",
      key: "bloodType",
      render: (row) => (
        <span
          className={`"font-semibold flex items-center justify-center w-14 border border-gray-200 rounded-2xl bg-black/4`}
        >
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
      render: (row) => {
        let statusVariant;

        if (row.bloodType === "O-" || row.bloodType === "AB-") {
          statusVariant = "Reserved";
        } else {
          switch (row.status) {
            case "Available":
              statusVariant = "Available";
              break;
            case "Expiring Soon":
              statusVariant = "Expiring Soon";
              break;
            default:
              statusVariant = row.status;
          }
        }

        return (
          <Status
            type="bloodBank"
            variant={statusVariant}
            text={statusVariant}
          />
        );
      },
    },
    { label: "Location", key: "location" },
    { label: "Donor", key: "donor" },
    {
      label: "Actions",
      key: "action",
      render: () => (
        <button
          className="text-xl text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="More actions"
        >
          <BsThreeDots />
        </button>
      ),
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl shadow max-w-full">
      <div className="pb-6 flex flex-col md:flex-row justify-between items-center md:items-center gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
          <SearchInput
            placeholder="Search blood units..."
            icon={AiOutlineSearch}
            inputClassName="text-sm text-gray-700"
            wrapperClassName="flex w-full h-10"
          />
          <div className="flex flex:row gap-1">
            <div>
              <select
                className="w-full h-10 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring focus:ring-black"
                defaultValue=""
              >
                <option value="" disabled>
                  All Types
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div>
              <select
                className="w-full h-10 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring focus:ring-black"
                defaultValue=""
              >
                <option value="" disabled>
                  All Status
                </option>
                <option value="Available">Available</option>
                <option value="Reserved">Reserved</option>
                <option value="Expiring Soon">Expiring Soon</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <PTable columns={columns} data={filteredData} />
      </div>
    </div>
  );
};

export default BloodList;
