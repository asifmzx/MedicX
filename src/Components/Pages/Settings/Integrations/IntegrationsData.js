import { FiMessageSquare } from "react-icons/fi";
import { GoCreditCard } from "react-icons/go";

const { PiScan } = require("react-icons/pi");

export const IntegrationData = {
  active: [
    {
      title: "Electronic Health Records",
      description: "Sync patient records with your EHR system",
      text1: "MediSync EHR",
      text2: "Last synced: 2 hours ago",
      icon: <PiScan />,
      status: "Connected",
    },
    {
      title: "Payment Gateway",
      description: "Process payments and manage transactions",
      text1: "MediPay",
      text2: "Connected account: ****4589",
      icon: <GoCreditCard />,
      status: "Connected",
    },
    {
      title: "SMS Notifications",
      description: "Send appointment reminders via SMS",
      text1: "TextAlert",
      text2: "Credits: 2,450 remaining",
      icon: <FiMessageSquare />,
      status: "Connected",
    },
  ],
  available: [
    {
      title: "Telehealth Platform",
      description: "Conduct virtual appointments with patients",
      text1: "MediConnect",
      text2: "HIPAA compliant video calls",
      icon: <PiScan />,
      status: "Available",
    },

    {
      title: "Insurance Verification",
      description: "Verify patient insurance eligibility",
      text1: "InsureCheck",
      text2: "Real-time eligibility verification",
      icon: <FiMessageSquare />,
      status: "Available",
    },
    {
      title: "Lab Results",
      description: "Integrate with laboratory systems",
      text1: "LabConnect",
      text2: "Automated lab results import",
      icon: <GoCreditCard />,
      status: "Available",
    },
  ],
};
