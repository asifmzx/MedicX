import Button from "@/Components/UI/Button/Button";
import { BiLineChart } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { GoCalendar } from "react-icons/go";
import { LuUsers } from "react-icons/lu";

export const ReportData = {
  overview: [
    {
      id: 1,
      title: "Appointment Reports",
      description: "Track appointment metrics, trends, and patient attendance",
      name: ["Total Appointments", "Completion Rate", "No-Show Rate"],
      value: ["1,248", "70.2%", "6.8%"],
      icon: <GoCalendar />,
      btn: (
        <Button variant="secondary" text="View Report" className="w-full " />
      ),
    },
    {
      id: 2,
      title: "Financial Reports",
      description: "Track revenue, expenses, and financial performance",
      name: ["Total Revenue", "Net Profit", "Growth"],
      value: ["$128,450", "$41,125", "+12.8%"],
      icon: <FaArrowTrendUp />,
      btn: (
        <Button variant="secondary" text="View Report" className="w-full " />
      ),
    },
    {
      id: 3,
      title: "Patient Visit Reports",
      description: "Analyze patient visits, demographics, and health trends",
      name: ["Total Visits", "New Patients", "Avg. Duration"],
      value: ["3,842", "428", "32 min"],
      icon: <LuUsers />,
      btn: (
        <Button variant="secondary" text="View Report" className="w-full " />
      ),
    },
    {
      id: 4,
      title: "Inventory Reports",
      description: "Track inventory levels, usage, and supply chain metrics",
      name: ["Total Items", "Low Stock", "Inventory Value"],
      value: ["1,245", "32", "$248,320"],
      icon: <BsBoxSeam />,
      btn: (
        <Button variant="secondary" text="View Report" className="w-full " />
      ),
    },
    {
      id: 5,
      title: "Staff Performance",
      description: "Evaluate staff productivity, attendance, and performance",
      name: ["Staff Count", "Avg. Attendance", "Productivity"],
      value: ["48", "92.5%", "87.3%"],
      icon: <GiNetworkBars />,
      btn: (
        <Button
          variant="primary"
          text="Coming Soon"
          className="w-full border border-gray-300"
        />
      ),
    },
    {
      id: 6,
      title: "Custom Reports",
      description:
        "Create customized reports with specific metrics and filters",
      name: ["Saved Reports", "Templates", "Export Options"],
      value: ["5", "12", "PDF, CSV, Excel"],
      icon: <BiLineChart />,
      btn: (
        <Button
          variant="primary"
          text="Coming Soon"
          className="w-full border border-gray-300"
        />
      ),
    },
  ],
  appointmentReport: [
    {
      id: 1,
      title: "Overview",
      description: "Overview of all reports",
      name: ["Total Appointments", "Completion Rate", "No-Show Rate"],
    },
    {
      id: 2,
      title: "Overview",
      description: "Overview of all reports",
      name: ["Total Appointments", "Completion Rate", "No-Show Rate"],
    },
    {
      id: 3,
      title: "Overview",
      description: "Overview of all reports",
      name: ["Total Appointments", "Completion Rate", "No-Show Rate"],
    },
    {
      id: 4,
      title: "Overview",
      description: "Overview of all reports",
      name: ["Total Appointments", "Completion Rate", "No-Show Rate"],
    },
    {
      id: 5,
      title: "Overview",
      description: "Overview of all reports",
      name: ["Total Appointments", "Completion Rate", "No-Show Rate"],
    },
    {
      id: 6,
      title: "Overview",
      description: "Overview of all reports",
      name: ["Total Appointments", "Completion Rate", "No-Show Rate"],
    },
  ],
};
