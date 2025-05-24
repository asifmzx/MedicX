import PatientAdmissionBarChart from "@/Components/UI/Chart/Widgets/PatientAdmissionBarChart";

const PatientAdmissions = () => {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 h-full flex flex-col">
      <div className="pb-6">
        <p className="text-2xl font-semibold mb-1">Patient Admissions</p>
        <p className="text-gray-600 text-sm">
          Monthly trend for the current year
        </p>
      </div>
      <div>
        <PatientAdmissionBarChart />
      </div>
    </div>
  );
};

export default PatientAdmissions;
