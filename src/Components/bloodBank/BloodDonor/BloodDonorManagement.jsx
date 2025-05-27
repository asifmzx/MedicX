"use client";
import { useState } from "react";

import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";
import { assets } from "@/assets";

const tabs = [
  { id: "all", label: "All Donors" },
  { id: "eligible", label: "Eligible" },
  { id: "ineligible", label: "Ineligible" },
  { id: "new", label: "New" },
];

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const dummyDonors = [
  {
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    id: "D-1001",
    name: "John Smith",
    bloodType: "O+",
    contact: "+1 (555) 123-4567",
    email: "john.smith@example.com",
    lastDonation: "3/15/2023",
    status: "Eligible",
    totalDonations: 8,
    nextEligible: "7/15/2023",
    donorLevel: "Silver Donor",
  },
  {
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    id: "D-1002",
    name: "Sarah Johnson",
    bloodType: "A-",
    contact: "+1 (555) 987-6543",
    email: "sarah.j@example.com",
    lastDonation: "5/22/2023",
    status: "Ineligible",
    totalDonations: 3,
    nextEligible: "9/22/2023",
    donorLevel: "",
  },
  {

    img: "https://randomuser.me/api/portraits/women/4.jpg",
    id: "D-1003",
    name: "Michael Chen",
    bloodType: "B+",
    contact: "+1 (555) 456-7890",
    email: "mchen@example.com",
    lastDonation: "1/10/2023",
    status: "Eligible",
    totalDonations: 12,
    nextEligible: "5/10/2023",
    donorLevel: "Gold Donor",
  },
  {
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    id: "D-1004",
    name: "Emily Rodriguez",
    bloodType: "AB+",
    contact: "+1 (555) 234-5678",
    email: "emily.r@example.com",
    lastDonation: "Never donated",
    status: "New Donor",
    totalDonations: 0,
    nextEligible: "N/A",
    donorLevel: "",
  },
  {
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    id: "D-1005",
    name: "David Wilson",
    bloodType: "O-",
    contact: "+1 (555) 876-5432",
    email: "dwilson@example.com",
    lastDonation: "4/5/2023",
    status: "Eligible",
    totalDonations: 25,
    nextEligible: "8/5/2023",
    donorLevel: "Platinum Donor",
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    id: "D-1006",
    name: "Lisa Thompson",
    bloodType: "A+",
    contact: "+1 (555) 345-6789",
    email: "lisa.t@example.com",
    lastDonation: "6/18/2023",
    status: "Ineligible",
    totalDonations: 5,
    nextEligible: "10/18/2023",
    donorLevel: "Silver Donor",
  },
];

const StatusBadge = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "Eligible":
        return "bg-green-100 text-green-800 border-green-200";
      case "Ineligible":
        return "bg-red-100 text-red-800 border-red-200";
      case "New Donor":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusStyles()}`}>
      {status}
    </span>
  );
};

const BloodTypeBadge = ({ bloodType }) => {
  const getBloodTypeColor = () => {
    switch (bloodType) {
      case "O+":
        return "bg-red-100 text-red-700 border-red-200";
      case "O-":
        return "bg-red-100 text-red-700 border-red-200";
      case "A+":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "A-":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "B+":
        return "bg-green-100 text-green-700 border-green-200";
      case "B-":
        return "bg-green-100 text-green-700 border-green-200";
      case "AB+":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "AB-":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getBloodTypeColor()}`}>
      {bloodType}
    </span>
  );
};

const DonorLevelBadge = ({ level }) => {
  if (!level) return null;

  const getLevelColor = () => {
    switch (level) {
      case "Silver Donor":
        return "bg-gray-100 text-gray-600";
      case "Gold Donor":
        return "bg-yellow-100 text-yellow-700";
      case "Platinum Donor":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded ${getLevelColor()}`}>
      {level}
    </span>
  );
};

const BloodDonorManagement = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = {
    all: () => true,
    eligible: (item) => item.status === "Eligible",
    ineligible: (item) => item.status === "Ineligible",
    new: (item) => item.status === "New Donor",
  };

  const filteredData = dummyDonors.filter((item) => {
    const matchesTab = filters[activeTab](item);
    const matchesBloodType = selectedBloodType
      ? item.bloodType === selectedBloodType
      : true;
    const matchesStatus = selectedStatus
      ? item.status === selectedStatus
      : true;
    const matchesSearch =
      searchQuery === "" ||
      [item.id, item.name, item.email].some((field) =>
        field.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesTab && matchesBloodType && matchesStatus && matchesSearch;
  });

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm max-w-full mt-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-2 md:w-2/3">
          <div className="flex items-center w-full gap-2 ">
            <SearchInput
              type="text"
              placeholder="Search blood..."
              icon={AiOutlineSearch}
              inputClassName="text-sm text-gray-700"
              wrapperClassName="flex h-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Buttonv2 Icon={LuRefreshCw} className="h-10 w-10" />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <select
              className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm w-full md:w-30"
              value={selectedBloodType}
              onChange={(e) => setSelectedBloodType(e.target.value)}
            >
              <option value="">Blood Types</option>
              {bloodTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <select
              className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm w-full md:w-30"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="Eligible">Eligible</option>
              <option value="Ineligible">Ineligible</option>
              <option value="New Donor">New Donor</option>
            </select>
          </div>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex w-full md:w-fit gap-2">
          <Buttonv2
            Icon={LuRefreshCw}
            variant="primary_main"
            text="Refresh"
            className="flex border border-black/20 w-full text-md h-10"
          />
          <Buttonv2
            Icon={MdOutlineFileDownload}
            variant="secondary_main"
            text="Export"
            className="flex border border-black/20 w-full h-10"
          />
        </div>
      </div>


      <div className="w-full">
        <div className="sm:w-[510px]">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:flex sm:flex-row sm:items-center sm:justify-start rounded-md sm:h-10 sm:gap-2 mb-2">
            <Buttonv2
              variant="primary"
              text="All Donors"
              onClick={() => setActiveTab("all")}
              className="flex items-center justify-center sm:w-[100px]"
              isActive={activeTab === "all"}
            />
            <Buttonv2
              variant="primary"
              text="Eligible"
              onClick={() => setActiveTab("eligible")}
              className="flex items-center justify-center sm:w-[120px]"
              isActive={activeTab === "eligible"}
            />
            <Buttonv2
              variant="primary"
              text="Ineligible"
              onClick={() => setActiveTab("ineligible")}
              className="flex items-center justify-center sm:w-[120px]"
              isActive={activeTab === "ineligible"}
            />

            <Buttonv2
              variant="primary"
              text="New"
              onClick={() => setActiveTab("new")}
              className="flex items-center justify-center sm:w-[100px]"
              isActive={activeTab === "new"}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Donor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Blood Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Donation
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Donations
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Next Eligible
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((donor) => (
              <tr key={donor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img
                      src={donor.img}
                      alt={donor.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{donor.name}</div>
                      <div className="text-sm text-gray-500">{donor.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <BloodTypeBadge bloodType={donor.bloodType} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{donor.contact}</div>
                  <div className="text-sm text-gray-500">{donor.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {donor.lastDonation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={donor.status} />
                </td>
                <td className="px-6 py-4 flex flex-col md:flex-row gap-2 items-center whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{donor.totalDonations}</div>
                  <DonorLevelBadge level={donor.donorLevel} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {donor.nextEligible}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <div className="w-4 h-4">⋯</div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <div>
          Showing 1 to {filteredData.length} of {dummyDonors.length} donors
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BloodDonorManagement;