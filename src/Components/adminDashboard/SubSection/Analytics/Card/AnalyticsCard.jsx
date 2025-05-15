import AppointmentTypesPieChart from "@/Components/UI/Chart/AdminDashboard/AppointmentTypesPieChart";
import PatientDemographicsBarChart from "@/Components/UI/Chart/AdminDashboard/PatientDemographicsBarChart";
import RevenueSourcesBarChart from "@/Components/UI/Chart/AdminDashboard/RevenueSourcesBarChart";

const AnalyticsCard = () => {
  const chartDetails = [
    {
      title: "Patient Demographics",
      description: "Age and gender distribution of patients",
      Component: PatientDemographicsBarChart,
    },
    {
      title: "Appointment Types",
      description: "Distribution by service category",
      Component: AppointmentTypesPieChart,
    },
    {
      title: "Revenue Sources",
      description: "Breakdown by department",
      Component: RevenueSourcesBarChart,
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chartDetails.map(({ title, description, Component }, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm h-[350px]"
          >
            <div className="mb-3">
              <h2 className="text-lg font-semibold text-gray-800 md:text-xl">
                {title}
              </h2>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
            <div className="flex-1 h-[100%]">
              <Component />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsCard;
