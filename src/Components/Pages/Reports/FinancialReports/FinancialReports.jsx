"use client";
import Button from "@/Components/UI/Button/Button";
import { DatePicker, Space } from "antd";
import { LiaSyncSolid } from "react-icons/lia";
import { TfiExport } from "react-icons/tfi";
import FinancialReportCard from "./FinancialReportCard/FinancialReportCard";
import FinancialReportTab from "./FinancialReportTab/FinancialReportTab";

const { RangePicker } = DatePicker;
const FinancialReports = () => {
  return (
    <div className="p-5">
      <div>
        <p className="text-3xl font-semibold">Financial Reports</p>
        <p className="text-gray-500 mt-3">
          Track revenue, expenses, and financial performance metrics
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-y-4 mt-5">
        <div className="flex flex-col md:flex-row md:items-end gap-3 w-full">
          <Space>
            <RangePicker className="h-[42px] w-full " />
          </Space>
          <select
            id="department"
            className="bg-white text-gray-400 h-[42px] w-full md:max-w-[200px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            defaultValue=""
          >
            <option value="" disabled>
              All Services
            </option>
            <option value="Consultation">Consultation</option>
            <option value="Procedures">Procedures</option>
            <option value="Tests">Tests</option>
            <option value="Therapy">Therapy</option>
          </select>
          <select
            id="doctor"
            className="bg-white text-gray-400 h-[42px] w-full md:max-w-[200px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            defaultValue=""
          >
            <option value="" disabled>
              All Doctors
            </option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Asif">Dr. Asif</option>
            <option value="Dr Rakib">Dr Rakib</option>
          </select>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <Button
            variant="primary"
            text="Refresh"
            Icon={LiaSyncSolid}
            className="h-[42px] w-full md:w-auto border border-gray-300"
          />
          <Button
            variant="primary"
            text="Export"
            Icon={TfiExport}
            className="h-[42px] w-full md:w-auto border border-gray-300"
          />
        </div>
      </div>
      <div className="mt-5">
        <FinancialReportCard />
      </div>
      <div className="mt-5"><FinancialReportTab /></div>
    </div>
  );
};

export default FinancialReports;
