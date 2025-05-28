import React from "react";
import MyTicketTable from "./MyTicketTable";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from "react-icons/ai";

const MyTickets = () => {
  return (
    <div className="bg-white p-5 rounded-lg space-y-6">
      <div className="pt-5">
        <p className="font-semibold text-2xl">My Support Tickets</p>
        <p className="py-2">View and manage your support tickets</p>
      </div>
      <div className="w-full ">
        <SearchInput
          placeholder="Search tickets..."
          icon={AiOutlineSearch}
          inputClassName="text-sm text-gray-700 py-2"
          wrapperClassName=" w-full"
        />
      </div>
      <div>
        <MyTicketTable />
      </div>
    </div>
  );
};

export default MyTickets;
