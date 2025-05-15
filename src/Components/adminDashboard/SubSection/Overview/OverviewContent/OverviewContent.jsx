import AdminOverviewBarChart from "@/Components/UI/Chart/AdminDashboard/AdminOverviewBarChart";

const OverviewContent = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
        <p className="text-gray-600">
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
