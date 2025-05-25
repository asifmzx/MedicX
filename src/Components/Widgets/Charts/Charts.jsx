import React from "react";
import AppointmentStatus from "./AppointmentStatus/AppointmentStatus";
import DepartmentDistribution from "./DepartmentDistribution/DepartmentDistribution";
import MonthlyFinancialComparison from "./MonthlyFinancialComparison/MonthlyFinancialComparison";
import PatientAdmissions from "./PatientAdmissions/PatientAdmissions";
import PaymentMethods from "./PaymentMethods/PaymentMethods";
import RevenueByService from "./RevenueByService/RevenueByService";

const Charts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
      <PatientAdmissions />
      <DepartmentDistribution />
      <RevenueByService />
      <AppointmentStatus />
      <MonthlyFinancialComparison />
      <PaymentMethods />
    </div>
  );
};

export default Charts;
