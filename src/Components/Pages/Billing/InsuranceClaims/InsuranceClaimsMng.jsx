"use client";
import { useState } from "react";

import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { getPaymentData } from '../data/billingData';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
const dateFormat = 'MMM DD, YYYY';


const StatusBadge = ({ status }) => {
    let style = "";
    let text = status;

    switch (status) {
        case "Completed":
            style = "bg-green-100 text-green-700 border-green-200";
            break;
        case "Processing":
            style = "bg-blue-100 text-blue-700 border-blue-200";
            break;
        case "Failed":
            style = "bg-red-100 text-red-700 border-red-200";
            break;
        case "Pending":
            style = "bg-yellow-100 text-yellow-700 border-yellow-200";
            break;
        case "Partially Paid":
            style = "bg-orange-100 text-orange-700 border-orange-200";
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

const method = ["Bank Transfer", "Cash", "Check", "Credit Card", "Debit Card", "Insurance"];

const InsuranceClaimsMng = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedMethod, setselectedMethod] = useState("");

    const dummyPayments = getPaymentData();

    const filters = {
        all: () => true,
        completed: (item) => item.status.toLowerCase() === "completed",
        failed: (item) => item.status.toLowerCase() === "failed",
        pending: (item) => item.status.toLowerCase() === "pending" || item.status.toLowerCase() === "partially paid" || item.status.toLowerCase() === "processing",
    };

    const filteredData = dummyPayments.filter((item) => {
        const matchesTab = filters[activeTab](item);
        const matchesMethod = selectedMethod
            ? item.method === selectedMethod
            : true;
        const matchesSearch =
            searchQuery === "" ||
            [item.invoiceId, item.paymentID, item.recipient.name, item.recipient.id, item.dueDate, item.amount, item.balance, item.status, item.insurance, item.method]
                .map((field) => field?.toString() || "")
                .some((field) =>
                    field.toLowerCase().includes(searchQuery.toLowerCase())
                );
        return matchesTab && matchesSearch && matchesMethod;
    });

    return (
        <div className="max-w-full mt-6">
            <div className="flex flex-col gap-4 mb-4">
                {/* Top Row: Search and Date Range */}
                <div className="flex flex-wrap md:justify-between w-full gap-2">
                    <div className="flex w-full md:w-[25%] gap-2 items-center">
                        <SearchInput
                            type="text"
                            placeholder="Search payments..."
                            icon={AiOutlineSearch}
                            inputClassName="text-sm text-gray-700 truncate"
                            wrapperClassName="flex h-10 w-full bg-white rounded-xl"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <select
                            className="w-full md:w-auto h-10 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring focus:ring-black"
                            value={selectedMethod}
                            onChange={(e) => setselectedMethod(e.target.value)}
                            style={{ padding: '0 10px', backgroundColor: 'white' }}
                        >
                            <option value="">All Methods</option>
                            {method.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                        <Buttonv2
                            Icon={MdOutlineFileDownload}
                            variant="secondary_main"
                            className="flex w-14 h-10"
                        />
                    </div>
                    <div className="flex w-full md:w-[25%] items-center">
                        <RangePicker
                            defaultValue={[dayjs('2025-03-03'), dayjs('2025-05-31')]}
                            format={dateFormat}
                            style={{ 
                                width: '100%', 
                                height: '40px', 
                                maxWidth: '600px',
                                borderRadius: '8px',
                                border: '1px solid #d1d5db'
                            }}
                        />
                    </div>
                </div>

                <div className="w-full md:w-fit">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2">
                        <Buttonv2
                            variant="primary"
                            text="All Payments"
                            onClick={() => setActiveTab("all")}
                            className="flex items-center justify-center h-10 text-sm"
                            isActive={activeTab === "all"}
                        />
                        <Buttonv2
                            variant="primary"
                            text="Completed"
                            onClick={() => setActiveTab("completed")}
                            className="flex items-center justify-center h-10 text-sm"
                            isActive={activeTab === "completed"}
                        />
                        <Buttonv2
                            variant="primary"
                            text="Pending"
                            onClick={() => setActiveTab("pending")}
                            className="flex items-center justify-center h-10 text-sm"
                            isActive={activeTab === "pending"}
                        />
                        <Buttonv2
                            variant="primary"
                            text="Failed"
                            onClick={() => setActiveTab("failed")}
                            className="flex items-center justify-center h-10 text-sm"
                            isActive={activeTab === "failed"}
                        />
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto bg-white shadow-sm border border-gray-200 rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredData.map((payment) => (
                            <tr key={payment.paymentID} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.paymentID}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={payment.recipient.avatar}
                                            alt={payment.recipient.name}
                                            className="w-9 h-9 rounded-full object-cover"
                                        />
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{payment.recipient.name}</div>
                                            <div className="text-sm text-gray-500">{payment.recipient.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.invoiceId}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {payment.paymentDate || payment.invoiceDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    ${payment.amount.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {payment.method || "N/A"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <StatusBadge status={payment.status} />
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
        </div>
    );
};

export default InsuranceClaimsMng;