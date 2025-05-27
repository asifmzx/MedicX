"use client";

const data = [
    {
        id: 1,
        title: "Total Donors",
        total: "247",
        value: +12,
        subtitle: "from last month",
    },
    {
        id: 2,
        title: "Donations This Month",
        total: "38",
        value: +5,
        subtitle: "compared to last month",
    },
    {
        id: 3,
        title: "Eligible Donors",
        total: "183",
        subtitle: "Critical situations handled",
    },
    {
        id: 4,
        title: "Frequent Donors",
        total: "42",
        subtitle: "Compatibility verified",
    },
];

const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {data.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition duration-300 ease-in-out"
                    >
                        <div className="flex items-center justify-between gap-2 text-gray-500 font-semibold">
                            <span>{item.title}</span>

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