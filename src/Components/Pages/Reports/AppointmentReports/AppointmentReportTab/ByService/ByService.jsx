import React from "react";
import ServiceType from "./ServiceType/ServiceType";
import ServicePopularity from "./ServicePopularity/ServicePopularity";

const ByService = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="col-span-1 sm:col-span-2">
            <ServiceType />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <ServicePopularity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByService;
