import React from "react";

import TemplateDetails from "./TemplateDetails/TemplateDetails";
import AllTemplateTable from "./AllTemplateTable/AllTemplateTable";

const AllTemplates = () => {
  return (
    <div className="space-y-4">
      <AllTemplateTable />
      <TemplateDetails />
    </div>
  );
};

export default AllTemplates;
