"use client";

import React from "react";
import BackButton from "@/Components/UI/Button/BackButton";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";

import { GoPlus } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";

import Card from "./Card";
import SuppliersListMng from "./SuppliersListMng";
import RecentOrders from "./RecentOrders";
import FeatureSuppliers from "./FeatureSuppliers";

const SuppliersList = () => {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
          <div className="flex flex-col w-full">
            <h1 className="text-2xl font-bold text-gray-900">Suppliers</h1>
            <p className="text-xm text-gray-600 mt-1">
              Manage your inventory suppliers and vendors
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-fit items-center justify-start gap-4">
          <Buttonv2
            Icon={GoPlus}
            variant="secondary_main"
            text="Add Supplier"
            className="border border-gray-300 h-10 w-full md:w-auto"
          />
          <Buttonv2
            Icon={MdOutlineFileDownload}
            variant="primary_main"
            className="border border-gray-300 h-10 w-full md:w-auto"
            text="Export"
          />
        </div>
      </div>
      <Card />
      <SuppliersListMng />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="col-span-2">
          <FeatureSuppliers />
        </div>
        <div className="col-span-1">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
};

export default SuppliersList;
