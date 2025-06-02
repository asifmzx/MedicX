import ServiceTypeLineChart from "@/Components/UI/Chart/Report/ServiceTypeLineChart";
import React from "react";

const ServiceType = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div>
        <p className="text-3xl font-semibold">Service Popularity</p>
        <p className="text-gray-500 mt-3">
          Most requested services ranked by volume
        </p>
      </div>
      <div>
        <ServiceTypeLineChart />
      </div>
    </div>
  );
};

export default ServiceType;
