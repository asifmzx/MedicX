import Button from "@/Components/UI/Button/Button";
import { CiImport } from "react-icons/ci";
import FinancialReports from "./FinancialReports/FinancialReports";
import OperationalReports from "./OperationalReports/OperationalReports";
import PatientReports from "./Patient Reports/PatientReports";
import RecentReportActivity from "./RecentReportActivity/RecentReportActivity";

const Report = () => {
  return (
    <div className="rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Available Reports
          </h1>
          <p className="text-gray-600">Access and generate detailed reports</p>
        </div>
        <Button
          variant="secondary"
          text="Generate New Report"
          Icon={CiImport}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <FinancialReports />
        <PatientReports />
        <OperationalReports />
      </div>
      <div className="pt-5">
        
        <RecentReportActivity />
      </div>
    </div>
  );
};

export default Report;
