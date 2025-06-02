
import WeeklyDistribution from "./WeeklyDistribution/WeeklyDistribution";
import AppointmentTrends from "./AppointmentTrends/AppointmentTrends";
import HourlyDistribution from "./HourlyDistribution/HourlyDistribution";

const Trends = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="col-span-1 sm:col-span-2">
          <AppointmentTrends />
        </div>
        <div className="col-span-1">
          <WeeklyDistribution />
        </div>
        <div className="col-span-1 ">
          <HourlyDistribution />
        </div>
      </div>
    </div>
  );
};

export default Trends;
