import React from 'react'

const BloodTypeAvailability = () => {
    const ratingBreakdown = [
        { bloodpack: "A+", units: 12 },
        { bloodpack: "A-", units: 4 },
        { bloodpack: "B+", units: 8 },
        { bloodpack: "B-", units: 2 },
        { bloodpack: "AB+", units: 3 },
        { bloodpack: "AB-", units: 1 },
        { bloodpack: "O+", units: 15 },
        { bloodpack: "O-", units: 5 },
    ];

    return (
        <div className="p-4 bg-white rounded-lg border border-gray-200 h-full flex flex-col">
            <div className="pb-4">
                <p className="text-2xl font-semibold mb-1">Blood Type Availability</p>
                <p className="text-gray-600 text-sm">Current inventory levels for each blood type</p>
            </div>

            <div className="space-y-2 mb-4 p-0 gap-2 md:p-4">
                {ratingBreakdown.map((rating, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center text-md font-semibold mb-1">
                            <span className="w-[40px]">{rating.bloodpack}</span>
                            <div className="w-[85%] h-4 bg-gray-200 rounded-full">
                                <div
                                    className={`h-full rounded-full ${rating.units >= 5
                                        ? "bg-green-500"
                                        : rating.units >= 3
                                            ? "bg-yellow-400"
                                            : "bg-red-500"
                                        }`}
                                    style={{ width: `${rating.units * 5}%` }}
                                ></div>
                            </div>
                            <span className=" flex flex-col md:flex-row w-[60px] ml-2" >{rating.units} Units</span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default BloodTypeAvailability