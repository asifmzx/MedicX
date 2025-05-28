import Task from "@/Components/Pages/Task/Task";
import Button from "@/Components/UI/Button/Button";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-semibold">Task</p>
        <Button variant="secondary" text="Add Task" Icon={FaPlus} />
      </div>
      <Task />
    </div>
  );
};

export default Page;
