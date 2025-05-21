const UsageStatistics = () => {
  const statistics = [
    { users: "42", lastUsed: "2024-05-20", created: "2024-05-20" },
  ];

  return (
    <div>
      {statistics.map((statistic, index) => (
        <div key={index} className="flex justify-between gap-2 md:gap-4">
          <div className="border border-gray-200 rounded-lg p-3 flex-1">
            <p className="font-bold md:font-bold text-sm md:text-2xl ">{statistic.users}</p>
            <p className="text-sm text-gray-500">Total Users</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-3 flex-1">
            <p className="font-bold md:font-bold text-sm md:text-2xl">
              {statistic.lastUsed}
            </p>
            <p className="text-sm text-gray-500">Last Used</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-3 flex-1">
            <p className="font-bold md:font-bold text-sm md:text-2xl">{statistic.created}</p>
            <p className="text-sm text-gray-500">Created On</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsageStatistics;
