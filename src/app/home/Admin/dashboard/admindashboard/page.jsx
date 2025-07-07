"use client";
import Card from "@/Components/Pages/adminDashboard/Card";
import SubSection from "@/Components/Pages/adminDashboard/SubSection/SubSection";
import Button from "@/Components/UI/Button/Button";

import { TfiImport } from "react-icons/tfi";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";

const Page = () => {
  const { RangePicker } = DatePicker;
  const dateFormat = "DD/MM/YYYY";

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
            Dashboard
          </h1>
          <p className="text-sm">
            Welcome back, Dr. Johnson! Here's what's happening today.
          </p>
        </div>

        <div className="flex flex-row  sm:items-center gap-2 sm:gap-3">
          <div className="w-full sm:w-auto">
            <RangePicker
              format={dateFormat}
              defaultValue={[
                dayjs("01/01/2025", dateFormat),
                dayjs("31/01/2025", dateFormat),
              ]}
              className="w-full sm:w-auto"
            />
          </div>
          <div className="w-auto">
            <Button
              variant="primary"
              text="Export"
              Icon={TfiImport}
              className="inline-block"
            />
          </div>
        </div>
      </div>

      <div className="py-6">
        <Card />
      </div>

      <div>
        <SubSection />
      </div>
    </div>
  );
};

export default Page;
