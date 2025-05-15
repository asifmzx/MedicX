import AppointmentTypesPieChart from "@/Components/UI/Chart/AdminDashboard/AppointmentTypesPieChart";
import PatientDemographicsBarChart from "@/Components/UI/Chart/AdminDashboard/PatientDemographicsBarChart";
import RevenueSourcesBarChart from "@/Components/UI/Chart/AdminDashboard/RevenueSourcesBarChart";

const AnalyticsCard = () => {
  const chartConfigs = [
    {
      title: "Patient Demographics",
      description: "Age and gender distribution",
      Component: PatientDemographicsBarChart,
      className: "h-64 md:h-72 lg:h-80",
    },
    {
      title: "Appointment Types",
      description: "Distribution by service category",
      Component: AppointmentTypesPieChart,
      className: "h-64 md:h-72 lg:h-80",
    },
    {
      title: "Revenue Sources",
      description: "Breakdown by department",
      Component: RevenueSourcesBarChart,
      className: "h-64 md:h-72 lg:h-80",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 md:flex-row md:gap-x-5">
        {chartConfigs.map(
          ({ title, description, Component, className }, index) => (
            <div key={index} className="mb-6 w-full md:w-1/3">
              <h1 className="text-xl font-bold text-gray-800 md:text-2xl">
                {title}
              </h1>
              <p className="text-gray-600">{description}</p>
              <div className={className}>
                <Component />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AnalyticsCard;
