import AgeDistributionBarChart from "@/Components/UI/Chart/Report/AgeDistributionBarChart";


const AgeDistribution = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Age Distribution</p>
        <p className="text-gray-500 mt-3">Patient visits by age group</p>
      </div>
      <div>
        <AgeDistributionBarChart />
      </div>
    </div>
  );
};

export default AgeDistribution;
