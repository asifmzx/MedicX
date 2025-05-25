"use client";
import { GiMedicines } from "react-icons/gi";
import { CgDanger } from "react-icons/cg";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdOutlineBloodtype } from "react-icons/md";

const data = [
    {
        id: 1,
        icon: <MdOutlineBloodtype className="text-3xl" />,
        title: "Total Blood Units",
        total: "50",
        subtitle: "Units available across all blood types",
    },
    {
        id: 2,
        icon: <MdOutlineBloodtype className="text-3xl" />,
        title: "Blood Type Distribution",
        total: "42",
        subtitle: "Need reordering soon",
        "A+": 12,
        "A-": 4,
        "B+": 8,
        "B-": 2,
        "AB+": 3,
        "AB-": 1,
        "O+": 15,
        "O-": 5,
    },
    {
        id: 3,
        icon: <CgDanger className="text-2xl" />,
        title: "Expiring Soon",
        total: "18",
        subtitle: "Units expiring within the next 7 days",
    },
    {
        id: 4,
        icon: <BsBoxSeamFill className="text-2xl" />,
        title: "Critical Levels",
        total: "2",
        subtitle: "Blood types with critically low inventory",
    },
];

const color = [
    {
        id: 1,
        iconColor: "text-[#f04343]",
        bgColor: "bg-white",
        brColor: "border-gray-200",
    },
    {
        id: 2,
        iconColor: "text-[#f04343]",
        bgColor: "bg-white",
        brColor: "border-gray-200",
        "B-": "bg-[#f04343] text-white",
        "AB-": "bg-[#f04343] text-white"
    },
    {
        id: 3,
        iconColor: "text-[#f59f0a]",
        bgColor: "bg-[#f5eee1]",
        brColor: "border-gray-200",
    },
    {
        id: 4,
        iconColor: "text-[#f04343]",
        bgColor: "bg-[#f5e1e1]",
        brColor: "border-gray-200",
    },
];

const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {data.map((item) => {
                const colorItem = color.find(c => c.id === item.id);
                return (
                    <div
                        key={item.id}
                        className={`bg-white rounded-lg p-4 shadow-sm border ${colorItem?.brColor} hover:shadow-md transition duration-300 ease-in-out`}
                    >
                        <div className="flex items-center justify-between gap-2 text-gray-500 font-semibold">
                            <span>{item.title}</span>
                            <div
                                className={`rounded-full ${colorItem?.bgColor} ${colorItem?.iconColor}`}
                            >
                                {item.icon}
                            </div>
                        </div>

                        <div className="text-sm mt-10">
                            {item.id !== 2 ? (<>
                                <h3 className="text-2xl font-bold">{item.total}</h3>
                                <span className="text-gray-500">{item.subtitle}</span>
                            </>) : (
                                <>
                                    <div className="flex flex-wrap justify-start items-center gap-4">
                                        <span className="flex rounded-2xl bg-black/4 font-semibold w-12 md:w-14 h-6 justify-center items-center">A+: {item["A+"]}</span>
                                        <span className="flex rounded-2xl bg-black/4 font-semibold w-12 md:w-14 h-6 justify-center items-center">A-: {item["A-"]}</span>
                                        <span className="flex rounded-2xl bg-black/4 font-semibold w-12 md:w-14 h-6 justify-center items-center">B+: {item["B+"]}</span>
                                        <span className="flex rounded-2xl bg-black/4 font-semibold w-12 md:w-14 h-6 justify-center items-center">B-: {item["B-"]}</span>
                                        <span className="flex rounded-2xl bg-black/4 font-semibold w-12 md:w-14 h-6 justify-center items-center">AB+: {item["AB+"]}</span>
                                        <span className={`flex rounded-2xl font-semibold ${colorItem["AB-"]} w-12 md:w-14 h-6 justify-center items-center`}>AB-: {item["AB-"]}</span>
                                        <span className="flex rounded-2xl bg-black/4 font-semibold w-12 md:w-14 h-6 justify-center items-center">O+: {item["A+"]}</span>
                                        <span className={`flex rounded-2xl font-semibold ${colorItem["B-"]} w-12 md:w-14 h-6 justify-center items-center`}>O-: {item["O-"]}</span>
                                    </div>

                                </>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;