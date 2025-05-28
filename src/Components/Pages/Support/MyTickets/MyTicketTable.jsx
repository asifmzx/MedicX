import React from "react";
import { columns, tickets } from "./MyTicketsData";
import PTable from "@/Components/UI/Table/PTable";

const MyTicketTable = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-[700px]  ">
          <PTable columns={columns} data={tickets} />
        </div>
      </div>
    </div>
  );
};

export default MyTicketTable;
