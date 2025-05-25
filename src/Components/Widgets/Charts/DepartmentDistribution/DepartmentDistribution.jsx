import DepartmentDistributionBarChart from "@/Components/UI/Chart/Widgets/DepartmentDistributionBarChart";

const DepartmentDistribution = () => {
  return (
    <div className="bg-white p-8 rounded-xl">
      <div className="space-y-2 pb-8">
        <p className="text-3xl font-semibold ">Department Distribution</p>
        <p className="text-lg text-gray-500">
          Patient distribution by department
        </p>
      </div>
      <div>
        <DepartmentDistributionBarChart />
      </div>
    </div>
  );
};

export default DepartmentDistribution;
