"use client";
import React from "react";
import DonorsbyBloodType from "@/Components/UI/Chart/BloodBank/DonorsbyBloodType";
import DonorFrequency from "@/Components/UI/Chart/BloodBank/DonorFrequency";

const ItembtypeItembDeptCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition duration-300 ease-in-out">
                <div className=" bg-white rounded-lg border-gray-200 h-full flex flex-col">
                    <div className="mb-4">
                        <p className="text-xl font-semibold mb-1">Issues by Blood Type</p>
                    </div>
                    <DonorsbyBloodType />
                </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition duration-300 ease-in-out">
                <div className=" bg-white rounded-lg border-gray-200 h-full flex flex-col">
                    <div className="mb-4">
                        <p className="text-xl font-semibold mb-1">Issues by Department</p>
                    </div>
                    <DonorFrequency />
                </div>
            </div>
        </div>
    );
};

export default ItembtypeItembDeptCard;