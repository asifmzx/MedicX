import AdminOverviewBarChart from "@/Components/UI/Chart/AdminDashboard/AdminOverviewBarChart";

const OverviewContent = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Patient visits and revenue for the current period.
        </p>
      </div>
      <div className="h-80">
        <AdminOverviewBarChart />
      </div>
    </div>
  );
};

export default OverviewContent;
