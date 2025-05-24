import DepartmentDistributionPieChart from "@/Components/UI/Chart/Widgets/DepartmentDistributionPieChart";

const DepartmentDistribution = () => {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 h-full flex flex-col">
      <div className="pb-6">
        <p className="text-2xl font-semibold mb-1">Department Distribution</p>
        <p className="text-gray-600 text-sm">
          Patient distribution by department
        </p>
      </div>
      <div>
        <DepartmentDistributionPieChart />
      </div>
    </div>
  );
};

export default DepartmentDistribution;
