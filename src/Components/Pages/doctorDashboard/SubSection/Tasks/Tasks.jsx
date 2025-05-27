import React from "react";
import PendingTasks from "./PendingTasks/PendingTasks";
import RecentPrescriptions from "./RecentPrescriptions/RecentPrescriptions";

const Tasks = () => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 ">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <PendingTasks />
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <RecentPrescriptions />
        </div>
      </div>
    </>
  );
};

export default Tasks;
