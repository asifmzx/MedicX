"use client";
import { MdOutlineArrowOutward, MdOutlineSouthEast } from "react-icons/md";

const data = [
    {
        title: "Current Rating",
        changeType: "currentrating",
        changeSign: "+",
        changeValue: 0.1,
        total: 4.8,
        subtitle: "from last month",
        brColor: "border-[#dbebff]",
    },
    {
        title: "Total Reviews",
        changeType: "totalreviews",
        changeSign: "+",
        changeValue: 156,
        total: 1248,
        subtitle: "from last month",
        brColor: "border-[#d2fae5]",
    },
    {
        title: "Recommendation",
        changeType: "Recommendation",
        changeSign: "+",
        total: 92,
        subtitle: "Would recommend to others",
        brColor: "border-[#fff4c7]",
    },
];

const PatientVisitCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.map((item, index) => {
                const isRecommendation = item.changeType === "Recommendation";
                const isRating = item.changeType === "currentrating";
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
                            <h3 className={`text-3xl font-bold ${isRecommendation ? changeColor : "text-black"}`}>
                                {isRecommendation
                                    ? `${item.total}%`
                                    : isRating
                                        ? `${item.total}/5`
                                        : item.total}
                            </h3>
                            <div className="flex justify-start gap-2 items-center mt-1">
                                {!isRecommendation && (
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
