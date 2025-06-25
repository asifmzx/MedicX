import Card from "@/Components/Pages/doctorDashboard/Card";
import SubSection from "@/Components/Pages/doctorDashboard/SubSection/SubSection";

const Page = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Welcome back, Dr. Sarah
          </h1>
          <p className="text-gray-700">
            Here's what's happening with your patients today.
          </p>
        </div>
      </div>
      <div className="py-6">
        <Card />
      </div>
      <div>
        <SubSection />
      </div>
    </div>
  );
};

export default Page;
