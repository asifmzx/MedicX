"use client";
import { useState } from "react";

import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";

const tabs = [
    { id: "all", label: "All Issues" },
    { id: "patient", label: "Patient" },
    { id: "external", label: "External" },
    { id: "emergency", label: "Emergency" },
];

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const dummyIssuances = [
    {
        issueId: "ISS-2023-001",
        recipient: {
            name: "John Smith",
            id: "PT-10045",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        bloodType: "O+",
        units: 2,
        issueDate: "2023-04-15 09:30 AM",
        requestingDoctor: "Dr. Sarah Johnson",
        purpose: "Surgery - Appendectomy",
        status: "Delivered",
        category: "patient"
    },
    {
        issueId: "ISS-2023-002",
        recipient: {
            name: "Emily Davis",
            id: "PT-10089",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        bloodType: "A-",
        units: 1,
        issueDate: "2023-04-16 02:15 PM",
        requestingDoctor: "Dr. Michael Chen",
        purpose: "Anemia Treatment",
        status: "Delivered",
        category: "patient"
    },
    {
        issueId: "ISS-2023-003",
        recipient: {
            name: "Robert Wilson",
            id: "PT-10124",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        bloodType: "B+",
        units: 3,
        issueDate: "2023-04-17 11:45 AM",
        requestingDoctor: "Dr. Lisa Patel",
        purpose: "Emergency - Trauma",
        status: "Delivered",
        category: "emergency"
    },
    {
        issueId: "ISS-2023-004",
        recipient: {
            name: "City Hospital",
            id: "EXT-0023",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg"
        },
        bloodType: "AB+",
        units: 2,
        issueDate: "2023-04-18 10:00 AM",
        requestingDoctor: "Dr. James Wilson",
        purpose: "External Request",
        status: "In Transit",
        category: "external"
    },
    {
        issueId: "ISS-2023-005",
        recipient: {
            name: "Maria Garcia",
            id: "PT-10156",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg"
        },
        bloodType: "O-",
        units: 1,
        issueDate: "2023-04-19 03:30 PM",
        requestingDoctor: "Dr. David Kim",
        purpose: "Childbirth - Hemorrhage",
        status: "Delivered",
        category: "emergency"
    },
    {
        issueId: "ISS-2023-006",
        recipient: {
            name: "James Brown",
            id: "PT-10178",
            avatar: "https://randomuser.me/api/portraits/men/6.jpg"
        },
        bloodType: "A+",
        units: 2,
        issueDate: "2023-04-20 08:45 AM",
        requestingDoctor: "Dr. Emily White",
        purpose: "Surgery - Heart Bypass",
        status: "Delivered",
        category: "patient"
    },
    {
        issueId: "ISS-2023-007",
        recipient: {
            name: "Linda Martinez",
            id: "PT-10203",
            avatar: "https://randomuser.me/api/portraits/women/7.jpg"
        },
        bloodType: "B-",
        units: 1,
        issueDate: "2023-04-21 01:30 PM",
        requestingDoctor: "Dr. Robert Lee",
        purpose: "Chemotherapy Support",
        status: "Delivered",
        category: "patient"
    },
    {
        issueId: "ISS-2023-008",
        recipient: {
            name: "County Medical Center",
            id: "EXT-0045",
            avatar: "https://randomuser.me/api/portraits/men/8.jpg"
        },
        bloodType: "O+",
        units: 4,
        issueDate: "2023-04-22 09:15 AM",
        requestingDoctor: "Dr. Thomas Brown",
        purpose: "External Request",
        status: "In Transit",
        category: "external"
    },
    {
        issueId: "ISS-2023-009",
        recipient: {
            name: "William Taylor",
            id: "PT-10234",
            avatar: "https://randomuser.me/api/portraits/men/9.jpg"
        },
        bloodType: "AB-",
        units: 1,
        issueDate: "2023-04-23 11:00 AM",
        requestingDoctor: "Dr. Jennifer Garcia",
        purpose: "Kidney Transplant",
        status: "Delivered",
        category: "patient"
    },
    {
        issueId: "ISS-2023-010",
        recipient: {
            name: "Sarah Johnson",
            id: "PT-10267",
            avatar: "https://randomuser.me/api/portraits/women/10.jpg"
        },
        bloodType: "O+",
        units: 2,
        issueDate: "2023-04-24 02:45 PM",
        requestingDoctor: "Dr. Mark Wilson",
        purpose: "Emergency - Accident",
        status: "Delivered",
        category: "emergency"
    },

];

const StatusBadge = ({ status }) => {
    const getStatusStyles = () => {
        switch (status) {
            case "Delivered":
                return "bg-green-100 text-green-800 border-green-200";
            case "In Transit":
                return "bg-orange-100 text-orange-800 border-orange-200";
            case "Pending":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "Cancelled":
                return "bg-red-100 text-red-800 border-red-200";
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
                return "bg-green-100 text-green-700 border-green-200";
            case "O-":
                return "bg-green-100 text-green-700 border-green-200";
            case "A+":
                return "bg-red-100 text-red-700 border-red-200";
            case "A-":
                return "bg-red-100 text-red-700 border-red-200";
            case "B+":
                return "bg-blue-100 text-blue-700 border-blue-200";
            case "B-":
                return "bg-blue-100 text-blue-700 border-blue-200";
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

const IssuedBloodManagement = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedBloodType, setSelectedBloodType] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const filters = {
        all: () => true,
        patient: (item) => item.category === "patient",
        external: (item) => item.category === "external",
        emergency: (item) => item.category === "emergency",
    };

    const departments = [...new Set(dummyIssuances.map(item => item.purpose.split(' ')[0]))].sort();

    const filteredData = dummyIssuances.filter((item) => {
        const matchesTab = filters[activeTab](item);
        const matchesBloodType = selectedBloodType
            ? item.bloodType === selectedBloodType
            : true;
        const matchesDepartment = selectedDepartment
            ? item.purpose.split(' ')[0] === selectedDepartment
            : true;
        const matchesStatus = selectedStatus
            ? item.status === selectedStatus
            : true;
        const matchesSearch =
            searchQuery === "" ||
            [item.issueId, item.recipient.name, item.recipient.id, item.requestingDoctor].some((field) =>
                field.toLowerCase().includes(searchQuery.toLowerCase())
            );
        return matchesTab && matchesBloodType && matchesStatus && matchesSearch && matchesDepartment;
    });

    return (
        <div className="p-6 bg-white rounded-xl shadow-sm max-w-full mt-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="flex flex-col md:flex-row md:flex-wrap w-full md:w-2/3 items-center justify-between gap-2 ">
                    <SearchInput
                        type="text"
                        placeholder="Search issuances..."
                        icon={AiOutlineSearch}
                        inputClassName="text-sm text-gray-700"
                        wrapperClassName="flex h-10 w-full md:w-[60%]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <div className="flex items-center gap-2 w-full md:w-auto">
                        {/* Blood Type Filter */}
                        <select
                            className="bg-white px-3 py-3 border truncate border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm w-full md:w-31"
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

                        {/* All Status Filter */}
                        <select
                            className="px-3 py-3 border truncate border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm w-full md:w-30"
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                        >
                            <option value="">All Status</option>
                            <option value="Delivered">Delivered</option>
                            <option value="In Transit">In Transit</option>
                        </select>

                        {/* All Departments Filter */}
                        <select
                            className="px-3 py-3 border truncate border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm w-full md:w-37"
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                        >
                            <option value="">All Departments</option>
                            {departments.map((dept) => (
                                <option key={dept} value={dept}>
                                    {dept}
                                </option>
                            ))}
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
                            text="All Issues"
                            onClick={() => setActiveTab("all")}
                            className="flex items-center justify-center sm:w-[100px]"
                            isActive={activeTab === "all"}
                        />
                        <Buttonv2
                            variant="primary"
                            text="Patient"
                            onClick={() => setActiveTab("patient")}
                            className="flex items-center justify-center sm:w-[120px]"
                            isActive={activeTab === "patient"}
                        />
                        <Buttonv2
                            variant="primary"
                            text="External"
                            onClick={() => setActiveTab("external")}
                            className="flex items-center justify-center sm:w-[120px]"
                            isActive={activeTab === "external"}
                        />

                        <Buttonv2
                            variant="primary"
                            text="Emergency"
                            onClick={() => setActiveTab("emergency")}
                            className="flex items-center justify-center sm:w-[100px]"
                            isActive={activeTab === "emergency"}
                        />
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Issue ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Recipient
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Blood Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Issue Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Requesting Doctor
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Purpose
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredData.map((issuance) => (
                            <tr key={issuance.issueId} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {issuance.issueId}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={issuance.recipient.avatar}
                                            alt={issuance.recipient.name}
                                            className="w-9 h-9 rounded-full object-cover"
                                        />
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{issuance.recipient.name}</div>
                                            <div className="text-sm text-gray-500">{issuance.recipient.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <BloodTypeBadge bloodType={issuance.bloodType} />
                                        <span className="text-sm text-gray-600">{issuance.units} unit(s)</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {issuance.issueDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {issuance.requestingDoctor}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {issuance.purpose}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <StatusBadge status={issuance.status} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button className="text-black font-bold hover:text-gray-600 transition-colors">
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
                    Showing {Math.min(10, filteredData.length)} of {filteredData.length} issuances
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 transition-colors">
                        Previous
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 transition-colors">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IssuedBloodManagement;