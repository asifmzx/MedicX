"use client";

import React from "react";
import BackButton from "@/Components/UI/Button/BackButton";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { Button, Dropdown, Space } from "antd";

import { FaPlus } from "react-icons/fa6";

import StaffMng from "./StaffMng";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const AllStaff = () => {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
          <div className="flex flex-col w-full">
            <h1 className="text-2xl font-bold text-gray-900">
              Staff Management
            </h1>
            <p className="text-xm text-gray-600 mt-1">
              Manage clinic staff, roles, and permissions
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-fit items-center gap-2">
          <Buttonv2
            Icon={FaPlus}
            variant="secondary_main"
            text="Add New Staff"
            className="border border-gray-300 h-10 w-full md:w-auto"
          />
          <Space direction="vertical">
            <Space wrap>
              <Dropdown
                menu={{ items }}
                placement="bottomRight"
                arrow
                className="w-full h-90"
              >
                <Button className="border border-gray-300 size-40">
                  Actions
                </Button>
              </Dropdown>
            </Space>
          </Space>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <StaffMng />
      </div>
    </div>
  );
};

export default AllStaff;
