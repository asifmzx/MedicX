"use client";

import { useState } from "react";
import Sent from "../Content/Sent/Sent";
import Draft from "../Content/Draft/Draft";
import Bin from "../Content/Bin/Bin";
import Archive from "../Content/Archive/Archive";
import Important from "../Content/Important/Important";
import Starred from "../Content/Starred/Starred";
import Inbox from "../Content/Inbox/Inbox";
import { HiOutlineInbox } from "react-icons/hi2";
import { FiSend } from "react-icons/fi";
import { MdErrorOutline, MdOutlineInsertDriveFile } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoArchiveOutline, IoSearchOutline } from "react-icons/io5";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import Button from "@/Components/UI/Button/Button";
import { GoChevronLeft, GoChevronRight, GoDotFill } from "react-icons/go";
import EmailComposeModal from "@/Components/UI/Modal/EmailComposeModal";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Inbox");

  const tabs = [
    { key: "Inbox", label: "Inbox", icon: <HiOutlineInbox size={16} /> },
    { key: "Sent", label: "Sent", icon: <FiSend size={16} /> },
    {
      key: "Drafts",
      label: "Drafts",
      icon: <MdOutlineInsertDriveFile size={16} />,
    },
    { key: "Bin", label: "Bin", icon: <RiDeleteBin6Line size={16} /> },
    { key: "Archive", label: "Archive", icon: <IoArchiveOutline size={16} /> },
    {
      key: "Important",
      label: "Important",
      icon: <MdErrorOutline size={16} />,
    },
    { key: "Starred", label: "Starred", icon: <HiOutlineInbox size={16} /> },
  ];

  const labels = [
    { name: "Patient", color: "text-blue-500" },
    { name: "Admin", color: "text-red-500" },
    { name: "Lab", color: "text-yellow-500" },
    { name: "Pharmacy", color: "text-green-500" },
    { name: "Insurance", color: "text-purple-500" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "Inbox":
        return <Inbox />;
      case "Sent":
        return <Sent />;
      case "Drafts":
        return <Draft />;
      case "Bin":
        return <Bin />;
      case "Archive":
        return <Archive />;
      case "Important":
        return <Important />;
      case "Starred":
        return <Starred />;
      default:
        return <Inbox />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <p className="text-2xl sm:text-3xl font-semibold">Email</p>
        <EmailComposeModal />
      </div>

      <div className="flex flex-col lg:flex-row flex-1 min-h-0 border-t border-gray-300">
        {/* Sidebar */}
        <div className="p-4 border-b lg:border-b-0 lg:border-r border-gray-300 overflow-y-auto lg:w-1/4">
          <div className="flex flex-col items-start space-y-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full px-4 py-2 text-left rounded ${
                  activeTab === tab.key
                    ? "bg-[#F5F5F5] text-black"
                    : "hover:bg-[#F5F5F5] text-black"
                }`}
              >
                <span className="flex items-center gap-x-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-300 mt-4 hidden md:block">
            <p className="pb-4 ps-4">Label</p>
            <div className="space-y-2 ps-4">
              {labels.map((label, index) => (
                <p key={index} className="flex items-center space-x-2">
                  <GoDotFill className={label.color} />
                  <span>{label.name}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Search */}
          <div className="border-b border-gray-300 p-4">
            <SearchInput
              placeholder="Search emails"
              icon={IoSearchOutline}
              className="w-full sm:w-[60%] md:w-[40%] lg:w-[30%]"
            />
          </div>

          {/* Email list content */}
          <div className="flex-1 overflow-auto p-4">{Content()}</div>

          {/* Footer */}
          <div className="flex justify-between items-center px-4 py-2 border-t border-gray-300 text-sm">
            <p>Page 1 of 1</p>
            <div className="space-x-2">
              <Button
                variant="primary"
                Icon={GoChevronLeft}
                text=""
                className="border border-gray-300"
              />
              <Button
                variant="primary"
                Icon={GoChevronRight}
                text=""
                className="border border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
