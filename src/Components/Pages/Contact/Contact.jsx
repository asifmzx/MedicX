import React, { useState, useEffect } from "react";
import Button from "@/Components/UI/Button/Button";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import PTable from "@/Components/UI/Table/PTable";
import { AiOutlineSearch } from "react-icons/ai";
import { CiExport } from "react-icons/ci";
import { columns, Contacts } from "./ContactData";
import { Pagination } from "antd";

const PAGE_SIZE = 10;

const Contact = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [filteredContacts, setFilteredContacts] = useState(Contacts);

  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedContacts, setPaginatedContacts] = useState([]);

  useEffect(() => {
    if (selectedCategory === "All Categories") {
      setFilteredContacts(Contacts);
    } else {
      setFilteredContacts(
        Contacts.filter((contact) => contact.category === selectedCategory),
      );
    }
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    setPaginatedContacts(filteredContacts.slice(startIndex, endIndex));
  }, [filteredContacts, currentPage]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 md:p-8 bg-white rounded-md w-full">
      <div className="pb-6">
        <div className="grid gap-3 sm:grid-cols-3 w-full">
          <div className="col-span-2">
            <SearchInput
              placeholder="Search contacts..."
              icon={AiOutlineSearch}
              inputClassName="text-sm text-gray-700 py-2"
              wrapperClassName="bg-gray-50 w-full"
            />
          </div>
          <div className="flex flex-row gap-3 w-full">
            <select
              className="bg-gray-50 border border-gray-300 rounded px-4 text-sm w-full"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="All Categories">All Categories</option>
              <option value="Client">Client</option>
              <option value="Vendor">Vendor</option>
              <option value="Partner">Partner</option>
              <option value="Employee">Employee</option>
              <option value="Other">Other</option>
            </select>
            <Button
              variant="secondary"
              Icon={CiExport}
              text="Export"
              className="border border-gray-300 px-4 py-2 w-full"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          <PTable columns={columns} data={paginatedContacts} />
        </div>
      </div>

      <div className="flex justify-center md:justify-between items-center py-6">
        <span className="text-left items-center hidden md:block">
          Page {currentPage} of {Math.ceil(filteredContacts.length / PAGE_SIZE)}
        </span>
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={filteredContacts.length}
          onChange={onPageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Contact;
