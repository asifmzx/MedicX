import Status from "@/Components/UI/Status/Status";
import { FiMessageSquare } from "react-icons/fi";
import { GoCreditCard } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { PiScan, PiTicket } from "react-icons/pi";

export const statusColors = {
  Connected: <Status type="settings" variant="Connected" text="Connected" />,
  Available: <Status type="settings" variant="Available" text="Available" />,
};

export const IntegrationData = {
  active: [
    {
      title: "Electronic Health Records",
      description: "Sync patient records with your EHR system",
      text1: "MediSync EHR",
      text2: "Last synced: 2 hours ago",
      icon: <PiScan size={30} />,
      status: "Connected",
    },
    {
      title: "Payment Gateway",
      description: "Process payments and manage transactions",
      text1: "MediPay",
      text2: "Connected account: ****4589",
      icon: <GoCreditCard size={30} />,
      status: "Connected",
    },
    {
      title: "SMS Notifications",
      description: "Send appointment reminders via SMS",
      text1: "TextAlert",
      text2: "Credits: 2,450 remaining",
      icon: <FiMessageSquare size={30} />,
      status: "Connected",
    },
  ],
  available: [
    {
      title: "Telehealth Platform",
      description: "Conduct virtual appointments with patients",
      text1: "MediConnect",
      text2: "HIPAA compliant video calls",
      icon: <IoVideocamOutline size={30} />,
      status: "Available",
    },

    {
      title: "Insurance Verification",
      description: "Verify patient insurance eligibility",
      text1: "InsureCheck",
      text2: "Real-time eligibility verification",
      icon: <PiTicket size={30} />,
      status: "Available",
    },
    {
      title: "Lab Results",
      description: "Integrate with laboratory systems",
      text1: "LabConnect",
      text2: "Automated lab results import",
      icon: <LuCalendarCheck size={30} />,
      status: "Available",
    },
  ],
};
