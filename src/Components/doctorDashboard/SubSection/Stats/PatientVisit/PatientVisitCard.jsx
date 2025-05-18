"use client";
import { MdOutlineArrowOutward, MdOutlineSouthEast } from "react-icons/md";

const data = [
    {
        title: "Avg.Daily",
        changeType: "daily",
        changeSign: "+",
        changeValue: 2.1,
        total: 12.4,
        subtitle: "from last month",
        brColor: "border-[#dbebff]",
    },
    {
        title: "Total Monthly",
        changeType: "monthly",
        changeSign: "+",
        changeValue: 42,
        total: 248,
        subtitle: "from last month",
        brColor: "border-[#d2fae5]",
    },
    {
        title: "Yearly Trend",
        changeType: "yearly",
        changeSign: "+",
        total: 8.3,
        subtitle: "Year over year growth",
        brColor: "border-[#fff4c7]",
    },
];

const PatientVisitCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.map((item, index) => {
                const isYearly = item.changeType === "yearly";
                const isPositive = item.changeSign === "+";
                const changeColor = isPositive ? "text-green-600" : "text-red-600";
                const ChangeIcon = isPositive ? MdOutlineArrowOutward : MdOutlineSouthEast;

                return (
                    <div
                        key={index}
                        className={`bg-white rounded-lg p-5 shadow-sm border ${item.brColor} hover:shadow-md transition duration-300 ease-in-out`}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <div className="text-gray-600 font-semibold">{item.title}</div>
                        </div>

                        {/* Content */}
                        <div className="mt-6">
                            <h3 className={`text-3xl font-bold ${isYearly ? changeColor : "text-black"}`}>
                                {isYearly ? `${item.changeSign}${item.total}%` : item.total}
                            </h3>
                            <div className="flex justify-start gap-2 items-center mt-1">
                                {!isYearly && (
                                    <div className={`flex items-center gap-1 text-sm font-medium ${changeColor}`}>
                                        {item.changeSign}
                                        {item.changeValue}
                                        <ChangeIcon />
                                    </div>
                                )}
                                <p className="text-sm text-gray-500">{item.subtitle}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PatientVisitCard;
