import DepartmentCapacity from "./DepartmentCapacity/DepartmentCapacity";
import TreatmentProgress from "./TreatmentProgress/TreatmentProgress";

const ProgressIndicators = () => {
  return (
    <div className="pt-4">
      <p className="text-3xl font-semibold py-4">Progress Indicators</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="w-full col-span-1">
          <DepartmentCapacity />
        </div>
        <div className="w-full col-span-1">
          <TreatmentProgress />
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicators;
