"use client";
import Contact from "@/Components/Pages/Contact/Contact";
import Button from "@/Components/UI/Button/Button";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="p-5 space-y-8">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-semibold">Task</p>
        <Button variant="secondary" text="Add Contact" Icon={FaPlus} />
      </div>
      <div >
        <Contact />
      </div>
    </div>
  );
};

export default Page;
