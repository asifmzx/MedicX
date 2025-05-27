import RevenueByServiceRadarChart from "@/Components/UI/Chart/Widgets/RevenueByServiceRadarChart";

const RevenueByService = () => {
  return (
    <div className="bg-white p-8 rounded-xl">
      <div className="space-y-2 pb-8">
        <p className="text-3xl font-semibold ">Revenue by Service</p>
        <p className="text-lg text-gray-500">
          Revenue breakdown by service category
        </p>
      </div>
      <div>
        <RevenueByServiceRadarChart />
      </div>
    </div>
  );
};

export default RevenueByService;
