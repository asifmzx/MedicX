import ConditionDepartment from "./ConditionDepartment";
import ConditionTrends from "./ConditionTrends";
import TopConditions from "./TopConditions";

const Conditions = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1 ">
        <TopConditions />
      </div>
      <div className="col-span-1">
        <ConditionTrends />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <ConditionDepartment />
      </div>
    </div>
  );
};

export default Conditions;
