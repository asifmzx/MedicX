import MonthlyUsage from "./MonthlyUsage/MonthlyUsage";
import TopUsedItem from "./TopUsedItem/TopUsedItem";
import UsageDepartment from "./UsageDepartment/UsageDepartment";



const UsageTrends = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1 ">
        <MonthlyUsage />
      </div>
      <div className="col-span-1">
        <TopUsedItem
        />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <UsageDepartment />
      </div>
    </div>
  );
};

export default UsageTrends;
