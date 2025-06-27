import { Flex, Progress } from "antd";

const TreatmentProgress = () => {
  const progressData = [
    { label: "Physical", percent: 80, color: "#171717" },
    { label: "Mental", percent: 50, color: "#3B82F6" },
    { label: "Overall", percent: 70, color: "#22C55E" },
  ];

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200 h-full flex flex-col">
      <div className="pb-4 sm:pb-6">
        <p className="text-xl sm:text-2xl font-semibold mb-1">
          Treatment Progress
        </p>
        <p className="text-gray-600 text-sm">Patient recovery tracking</p>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full justify-items-center">
          {progressData.map(({ label, percent, color }, index) => (
            <div key={index} className="text-center">
              <Progress
                type="dashboard"
                percent={percent}
                strokeColor={color}
                size={10}
                width={120}
              />
              <p className="mt-2 text-sm font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreatmentProgress;
