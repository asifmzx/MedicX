"use client";
import { GiMedicines } from "react-icons/gi";
import { CgDanger } from "react-icons/cg";
import { BsBoxSeamFill } from "react-icons/bs";

const data = [
    {
        id: 1,
        icon: <GiMedicines className="text-2xl" />,
        title: "Total Medicines",
        total: "1,248",
        value: 48,
        subtitle: "this month",
    },
    {
        id: 2,
        icon: <CgDanger className="text-2xl" />,
        title: "Low Stock Items",
        total: "42",
        subtitle: "Need reordering soon",
    },
    {
        id: 3,
        icon: <CgDanger className="text-2xl" />,
        title: "Expiring Soon",
        total: "18",
        subtitle: "Within next 30 days",
    },
    {
        id: 4,
        icon: <BsBoxSeamFill className="text-2xl" />,
        title: "Categories",
        total: "36",
        subtitle: "Medicine categories",
    },
];

const color = [
    {
        id: 1,
        iconColor: "text-[#19a075]",
        bgColor: "bg-[#d2fae5]",
        brColor: "border-gray-200",
    },
    {
        id: 2,
        iconColor: "text-[#f59f0a]",
        bgColor: "bg-[#f5eee1]",
        brColor: "border-gray-200",
    },
    {
        id: 3,
        iconColor: "text-[#f04343]",
        bgColor: "bg-[#f5e1e1]",
        brColor: "border-gray-200",
    },
    {
        id: 4,
        iconColor: "text-gray-400",
        bgColor: "bg-white",
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
                                className={`p-1.5 rounded-full ${colorItem?.bgColor} ${colorItem?.iconColor}`}
                            >
                                {item.icon}
                            </div>
                        </div>

                        <div className="mt-3">
                            <h3 className="text-2xl font-bold">{item.total}</h3>
                            <p className="text-sm mt-1">
                                {item.id === 1 ? (
                                    <>
                                        <span className={item.value >= 0 ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>
                                            {item.value >= 0 ? "+" : "-"}
                                            {Math.abs(item.value)}
                                            {item.value >= 0 ? " added" : " less"}
                                        </span>
                                        <span className="text-gray-500"> {item.subtitle}</span>
                                    </>
                                ) : (
                                    <span className="text-gray-500">{item.subtitle}</span>
                                )}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;