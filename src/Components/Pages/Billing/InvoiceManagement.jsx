"use client";
import { useState } from "react";

import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineFilterAlt } from "react-icons/md";

// Import the invoice data from the separate data file
import { dummyIssuances } from './data/invoiceData';

const StatusBadge = ({ status }) => {
    let style = "";
    let text = status;

    switch (status) {
        case "Unpaid":
            style = "bg-red-100 text-red-700 border-red-200";
            break;
        case "Partially Paid":
            style = "bg-yellow-100 text-yellow-700 border-yellow-200";
            break;
        case "Paid":
            style = "bg-green-100 text-green-700 border-green-200";
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

const InsuranceBadge = ({ insurance }) => {
    let style = "";
    switch (insurance) {
        case "Not Submitted":
            style = "bg-gray-300 text-gray-800";
            break;
        case "Submitted":
            style = "bg-blue-50 text-blue-600 border border-blue-200";
            break;
        case "Pending":
            style = "bg-blue-50 text-blue-600 border border-blue-200";
            break;
        case "Approved":
            style = "bg-green-100 text-green-700 border border-green-200";
            break;
        default:
            style = "bg-gray-100 text-gray-700 border border-gray-200";
    }
    return (
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${style}`}>
            {insurance}
        </span>
    );
};

const InvoiceManagement = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filters = {
        all: () => true,
        unpaid: (item) => item.status.toLowerCase() === "unpaid",
        paid: (item) => item.status.toLowerCase() === "paid",
        partially_paid: (item) => item.status.toLowerCase() === "partially paid",
    };

    const filteredData = dummyIssuances.filter((item) => {
        const matchesTab = filters[activeTab](item);
        const matchesSearch =
            searchQuery === "" ||
            [item.invoiceId, item.recipient.name, item.recipient.id, item.date, item.amount, item.balance, item.status, item.insurance]
                .map((field) => field.toString())
                .some((field) =>
                    field.toLowerCase().includes(searchQuery.toLowerCase())
                );
        return matchesTab && matchesSearch;
    });

    return (
        <div className="max-w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="flex flex-col md:flex-row md:flex-wrap w-full md:w-2/3 items-center justify-between gap-2 ">
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <div className="w-full">
                            <div className="sm:w-[410px]">
                                <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:flex sm:flex-row sm:items-center sm:justify-start rounded-md sm:h-10 sm:gap-2 mb-2">
                                    <Buttonv2
                                        variant="primary"
                                        text="All Invoices"
                                        onClick={() => setActiveTab("all")}
                                        className="flex items-center justify-center sm:w-[130px]"
                                        isActive={activeTab === "all"}
                                    />
                                    <Buttonv2
                                        variant="primary"
                                        text="Unpaid"
                                        onClick={() => setActiveTab("unpaid")}
                                        className="flex items-center justify-center sm:w-[120px]"
                                        isActive={activeTab === "unpaid"}
                                    />
                                    <Buttonv2
                                        variant="primary"
                                        text="Paid"
                                        onClick={() => setActiveTab("paid")}
                                        className="flex items-center justify-center sm:w-[120px]"
                                        isActive={activeTab === "paid"}
                                    />
                                    <Buttonv2
                                        variant="primary"
                                        text="Partially Paid"
                                        onClick={() => setActiveTab("partially_paid")}
                                        className="flex items-center justify-center sm:w-[150px]"
                                        isActive={activeTab === "partially_paid"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side: Buttons */}
                <div className="flex w-full md:w-fit gap-2">
                    <SearchInput
                        type="text"
                        placeholder="Search invoices..."
                        icon={AiOutlineSearch}
                        inputClassName="text-sm text-gray-700"
                        wrapperClassName="flex h-10 w-full md:w-[60%] bg-white rounded-xl"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Buttonv2
                        Icon={MdOutlineFilterAlt}
                        variant="primary_main"
                        className="flex border border-black/20 text-md w-14 h-10"
                    />
                    <Buttonv2
                        Icon={MdOutlineFileDownload}
                        variant="secondary_main"
                        className="flex border border-black/20 w-14 h-10"
                    />
                </div>
            </div>

            <div className="overflow-x-auto bg-white shadow-sm border border-gray-200 rounded-lg">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice #</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Insurance</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredData.map((invoice) => (
                            <tr key={invoice.invoiceId} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{invoice.invoiceId}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={invoice.recipient.avatar}
                                            alt={invoice.recipient.name}
                                            className="w-9 h-9 rounded-full object-cover"
                                        />
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{invoice.recipient.name}</div>
                                            <div className="text-sm text-gray-500">{invoice.recipient.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {invoice.date}
                                    <div className="text-xs text-gray-400">Due: {invoice.dueDate}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    ${invoice.amount.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    ${invoice.balance.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <StatusBadge status={invoice.status} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <InsuranceBadge insurance={invoice.insurance} />
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

            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                <div>
                    Showing {filteredData.length} of {filteredData.length} invoices
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

export default InvoiceManagement;