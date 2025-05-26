"use client";
import { GiMedicines } from "react-icons/gi";
import { CgDanger } from "react-icons/cg";
import { BsBoxSeamFill } from "react-icons/bs";

const data = [
    {
        id: 1,
        icon: <GiMedicines className="text-2xl" />,
        title: "Total Donors",
        total: "247",
        value: +12,
        subtitle: "from this month",
    },
    {
        id: 2,
        icon: <GiMedicines className="text-2xl" />,
        title: "Donations This Month",
        total: "38",
        value: +5,
        subtitle: "compared to last month",
    },
    {
        id: 3,
        title: "Eligible Donors",
        total: "183",
        subtitle: "Ready for donation",
        label: "Active", // New label property
    },
    {
        id: 4,
        title: "Frequent Donors",
        total: "42",
        value: +5,
        subtitle: "donations",
        label: "VIP", // New label property
    },
];

const colorConfig = [
    { id: 1, iconColor: "text-[#19a075] rounded-full", bgColor: "bg-[#d2fae5]" },
    { id: 2, iconColor: "text-[#f59f0a] rounded-full", bgColor: "bg-[#f5eee1]" },
    { id: 3, iconColor: "text-[#19a075] w-20", bgColor: "bg-white" },
    { id: 4, iconColor: "text-[#ae54f7] w-16", bgColor: "bg-white" },
];

const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {data.map((item) => {
                const colors = colorConfig.find((c) => c.id === item.id);

                return (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition duration-300 ease-in-out"
                    >
                        <div className="flex items-center justify-between gap-2 text-gray-500 font-semibold">
                            <span>{item.title}</span>
                            <div className={`p-1.5  ${colors?.bgColor} ${colors?.iconColor}`}>
                                {item.icon ? item.icon : (
                                    <span className="text-xs font-semibold flex items-center border rounded-2xl h-6 justify-center uppercase">
                                        {item.label}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="mt-3">
                            <h3 className="text-2xl font-bold">{item.total}</h3>
                            <p className="text-sm mt-1">
                                {item.value !== undefined && (
                                    <span className={`font-semibold ${item.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {item.value >= 0 ? '+' : '-'}{Math.abs(item.value)}{' '}
                                    </span>
                                )}
                                <span className="text-gray-500">
                                    {item.subtitle}
                                </span>
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;