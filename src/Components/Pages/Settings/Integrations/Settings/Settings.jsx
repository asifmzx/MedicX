import React from "react";
import APISettings from "./APISettings/APISettings";
import IntegrationDocumentation from "./IntegrationDocumentation/IntegrationDocumentation";

const Settings = () => {
  return (
    <div className="space-y-4 ">
      <APISettings />
      <IntegrationDocumentation />
    </div>
  );
};

export default Settings;
