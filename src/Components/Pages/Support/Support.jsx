import React from "react";
import SupportTab from "./SupportTab/SupportTab";

const Support = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-3xl font-semibold">Support Center</p>
        <p>
          Get help with your clinic management system or submit a support
          ticket.
        </p>
      </div>
      <div>
        <SupportTab />
      </div>
    </div>
  );
};

export default Support;
