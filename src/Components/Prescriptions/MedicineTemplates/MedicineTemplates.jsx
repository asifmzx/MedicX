"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import AllTemplates from "./AllTemplates/AllTemplates";
import RecentlyUsed from "./RecentlyUsed/RecentlyUsed";
import MyTemplates from "./MyTemplates/MyTemplates";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";

import NewMedicineTemplateModal from "@/Components/UI/Modal/NewMedicineTemplateModal";

const MedicineTemplates = () => {
  const [activeTab, setActiveTab] = useState("PersonalInfo");

  const tabs = [
    { key: "AllTemplates", label: "All Templates" },
    { key: "RecentlyUsed", label: "Recently Used" },
    { key: "MyTemplates", label: "My Templates" },
  ];

  const Content = () => {
    switch (activeTab) {
      case "RecentlyUsed":
        return <RecentlyUsed />;
      case "MyTemplates":
        return <MyTemplates />;

      default:
        return <AllTemplates />;
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
    
        <div className="flex flex-wrap gap-2 w-full sm:flex-1">
          {tabs.map((tab, index) => (
            <Button
              key={index}
              variant="primary"
              text={tab.label}
              onClick={() => setActiveTab(tab.key)}
              className={`${
                activeTab === tab.key
                  ? "bg-gray-100 text-black"
                  : "bg-white hover:bg-gray-100 text-black"
              }`}
            />
          ))}
        </div>

       
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto sm:justify-end">
          <SearchInput
            placeholder="Search templates..."
            icon={AiOutlineSearch}
            inputClassName="text-sm text-gray-700"
            wrapperClassName="w-full sm:w-auto"
          />
          <NewMedicineTemplateModal />
        </div>
      </div>

      <div className="pt-4">{Content()}</div>
    </div>
  );
};

export default MedicineTemplates;
