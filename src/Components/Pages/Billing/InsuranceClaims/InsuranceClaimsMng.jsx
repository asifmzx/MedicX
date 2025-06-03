"use client";
import { useState } from "react";

import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineFileDownload, MdFilterList } from "react-icons/md";
import { insuranceClaimsData } from '../data/billingData';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import ClaimDetails from './ClaimDetails';

const { RangePicker } = DatePicker;
const dateFormat = 'MMM DD, YYYY';
const StatusBadge = ({ status }) => {
    let style = "";
    let text = status;

    switch (status) {
        case "Approved":
            style = "bg-green-100 text-green-700 border-green-200";
            break;
        case "Pending":
            style = "bg-yellow-100 text-yellow-700 border-yellow-200";
            break;
        case "Rejected":
            style = "bg-red-100 text-red-700 border-red-200";
            break;
        case "Submitted":
            style = "bg-blue-100 text-blue-700 border-blue-200";
            break;
        case "Draft":
            style = "bg-gray-100 text-gray-700 border-gray-200";
            break;
        default:
            style = "bg-gray-100 text-gray-700 border-gray-200";
    }

    return (
        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${style}`}>
            {text}
        </span>
    );
};

const InsuranceClaimsMng = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedClaimId, setSelectedClaimId] = useState(null);

    const dummyClaims = insuranceClaimsData;

    const filters = {
        all: () => true,
        approved: (item) => item.status.toLowerCase() === "approved",
        pending: (item) => item.status.toLowerCase() === "pending",
        rejected: (item) => item.status.toLowerCase() === "rejected",
        draft: (item) => item.status.toLowerCase() === "draft",
    };

    const filteredData = dummyClaims.filter((item) => {
        const matchesTab = filters[activeTab](item);
        const matchesSearch =
            searchQuery === "" ||
            [item.claimId, item.patient.name, item.patient.id, item.provider, item.policyNumber, item.amount, item.status, item.type, item.submitted]
                .map((field) => field?.toString() || "")
                .some((field) =>
                    field.toLowerCase().includes(searchQuery.toLowerCase())
                );
        return matchesTab && matchesSearch;
    });

    const handleClaimClick = (claimId) => {
        setSelectedClaimId(claimId);
    };

    const handleBackToList = () => {
        setSelectedClaimId(null);
    };

    if (selectedClaimId) {
        return (
            <div className="max-w-full mt-6">
                <div className="mb-4">
                    <Buttonv2 text="Back to All Claims" onClick={handleBackToList} className="mb-4" />
                </div>
                <ClaimDetails id={selectedClaimId} />
            </div>
        );
    }

    return (
        <div className="max-w-full mt-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <div className="flex items-center gap-4">
                    <SearchInput
                        type="text"
                        placeholder="Search claims..."
                        icon={AiOutlineSearch}
                        inputClassName="text-sm text-gray-700"
                        wrapperClassName="flex h-10 w-80 bg-white rounded-md border border-gray-300"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Buttonv2
                        Icon={MdFilterList}
                        variant="secondary"
                        className="flex w-10 h-10 border border-gray-300"
                    />
                    <Buttonv2
                        Icon={MdOutlineFileDownload}
                        variant="secondary"
                        className="flex w-10 h-10 border border-gray-300"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <RangePicker
                        defaultValue={[dayjs('2025-01-01'), dayjs('2025-06-01')]}
                        format={dateFormat}
                        style={{
                            width: '280px',
                            height: '40px',
                            borderRadius: '6px',
                            border: '1px solid #d1d5db'
                        }}
                    />
                </div>
            </div>

            <div className="w-full md:w-fit mb-6">
                <div className="grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-2">
                    <Buttonv2
                        variant="primary"
                        text="All Claims"
                        onClick={() => setActiveTab("all")}
                        className="flex items-center justify-center h-10 text-sm w-full"
                        isActive={activeTab === "all"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Approved"
                        onClick={() => setActiveTab("approved")}
                        className="flex items-center justify-center h-10 text-sm w-full"
                        isActive={activeTab === "approved"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Pending"
                        onClick={() => setActiveTab("pending")}
                        className="flex items-center justify-center h-10 text-sm w-full"
                        isActive={activeTab === "pending"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Rejected"
                        onClick={() => setActiveTab("rejected")}
                        className="flex items-center justify-center h-10 text-sm w-full"
                        isActive={activeTab === "rejected"}
                    />
                    <Buttonv2
                        variant="primary"
                        text="Draft"
                        onClick={() => setActiveTab("draft")}
                        className="flex items-center justify-center h-10 text-sm w-full"
                        isActive={activeTab === "draft"}
                    />
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">All Insurance Claims</h2>
                    <p className="text-sm text-gray-600 mt-1">View and manage all insurance claims</p>
                </div>
                <Buttonv2
                    text="Newest First"
                    variant="secondary"
                    className="h-10 px-4 border border-gray-300"
                />
            </div>

            <div className="overflow-x-auto bg-white shadow-sm border border-gray-200 rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Claim ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredData.map((claim) => (
                            <tr key={claim.claimId} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        onClick={() => handleClaimClick(claim.claimId)}
                                        className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                                    >
                                        {claim.claimId}
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={claim.patient.avatar}
                                            alt={claim.patient.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{claim.patient.name}</div>
                                            <div className="text-sm text-gray-500">{claim.patient.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <div className="text-sm text-gray-900">{claim.provider}</div>
                                        <div className="text-sm text-gray-500">Policy: {claim.policyNumber}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {claim.submitted || "Not submitted"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    ${claim.amount.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <StatusBadge status={claim.status} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {claim.type}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                        <span className="text-lg">⋯</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InsuranceClaimsMng;