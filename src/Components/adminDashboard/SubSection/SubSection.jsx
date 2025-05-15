"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button/Button";
import Overview from "./Overview/Overview";
import Analytics from "./Analytics/Analytics";
import Notifications from "./Notifications/Notifications";
import Reports from "./Reports/Reports";

const SubSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const Content = () => {
    switch (activeTab) {
      case "analytics":
        return <Analytics />;
      case "reports":
        return <Reports />;
      case "notifications":
        return <Notifications />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="space-x-2">
      <Button
        variant="primary"
        text="Overview "
        onClick={() => setActiveTab("overview")}
      />
      <Button
        variant="primary"
        text="Analytics"
        onClick={() => setActiveTab("analytics")}
      />

      <Button
        variant="primary"
        text="Reports "
        onClick={() => setActiveTab("reports")}
      />

      <Button
        variant="primary"
        text="Notifications "
        onClick={() => setActiveTab("notifications")}
      />

      <div className="pt-6 ">{Content()}</div>
    </div>
  );
};

export default SubSection;
