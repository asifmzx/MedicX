"use client";
import React, { useState } from "react";

import BackButton from "@/Components/UI/Button/BackButton";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";

import Employment from "./Employment";
import PersonalInfo from "./Personalnfo";
import Professional from "./Professional";
import Access_and_Roles from "./Access_and_Roles";

const addStaff = () => {
  const [activeTab, setActiveTab] = useState("personal_info");

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal_info":
        return <PersonalInfo />;
      case "professional":
        return <Professional />;
      case "employment":
        return <Employment />;
      case "access_and_roles":
        return <Access_and_Roles />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div className="flex items-center gap-4">
          <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md flex-shrink-0" />
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Add New Staff
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Create a new staff member profile
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full md:w-auto">
          <Buttonv2
            variant="primary"
            text="Personal Info"
            onClick={() => setActiveTab("personal_info")}
            className="flex items-center justify-center h-10 text-sm"
            isActive={activeTab === "personal_info"}
          />
          <Buttonv2
            variant="primary"
            text="Professional"
            onClick={() => setActiveTab("professional")}
            className="flex items-center justify-center h-10 text-sm"
            isActive={activeTab === "professional"}
          />
          <Buttonv2
            variant="primary"
            text="Employment"
            onClick={() => setActiveTab("employment")}
            className="flex items-center justify-center h-10 text-sm"
            isActive={activeTab === "employment"}
          />
          <Buttonv2
            variant="primary"
            text="Access & Roles"
            onClick={() => setActiveTab("access_and_roles")}
            className="flex items-center justify-center h-10 text-sm"
            isActive={activeTab === "access_and_roles"}
          />
        </div>
      </div>
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
};

export default addStaff;
