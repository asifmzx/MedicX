import Button from "@/Components/UI/Button/Button";
import { BiLineChart } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { GiNetworkBars } from "react-icons/gi";
import { GoCalendar } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { TbClock } from "react-icons/tb";

export const ReportData = {
  overview: [
    {
      id: 1,
      title: "Appointment Reports",
      description: "Track appointment metrics, trends, and patient attendance",
      name: ["Total Appointments", "Completion Rate", "No-Show Rate"],
      value: ["1,248", "70.2%", "6.8%"],
      icon: <GoCalendar />,
      btn: <Button variant="secondary" text="View Report" className="w-full" />,
    },
    {
      id: 2,
      title: "Financial Reports",
      description: "Track revenue, expenses, and financial performance",
      name: ["Total Revenue", "Net Profit", "Growth"],
      value: ["$128,450", "$41,125", "+12.8%"],
      icon: <FaArrowTrendUp />,
      btn: <Button variant="secondary" text="View Report" className="w-full" />,
    },
    {
      id: 3,
      title: "Patient Visit Reports",
      description: "Analyze patient visits, demographics, and health trends",
      name: ["Total Visits", "New Patients", "Avg. Duration"],
      value: ["3,842", "428", "32 min"],
      icon: <LuUsers />,
      btn: <Button variant="secondary" text="View Report" className="w-full" />,
    },
    {
      id: 4,
      title: "Inventory Reports",
      description: "Track inventory levels, usage, and supply chain metrics",
      name: ["Total Items", "Low Stock", "Inventory Value"],
      value: ["1,245", "32", "$248,320"],
      icon: <BsBoxSeam />,
      btn: <Button variant="secondary" text="View Report" className="w-full" />,
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
  appointmentReport: {
    card: [
      {
        id: 1,
        title: "Total Appointments",
        value: "1,248",
        text: "+12.5% from last month",
        icon: <GoCalendar size={24} />,
        progressValue: 70,
        progressColor: "#171717",
      },
      {
        id: 2,
        title: "Completed",

        value: "876",
        text: "70.2% completion rate",
        icon: <FiCheckCircle size={24} />,
        progressValue: 60,
        progressColor: "#22C55E",
      },
      {
        id: 3,
        title: "Canceled",

        value: "187",
        text: "15% cancellation rate",
        icon: <RxCrossCircled size={24} />,
        progressValue: 30,
        progressColor: "#EF4444",
      },
      {
        id: 4,
        title: "No-Shows",

        value: "85",
        text: "6.8% no-show rate",
        icon: <TbClock size={24} />,
        progressValue: 20,
        progressColor: "#F59E0B",
      },
    ],
    overview: [
      {
        id: 1,
        title: "Department-wise Appointments",
        description: "Distribution of appointments by department",
        name: ["Canceled", "Completed", "Not Show", "Scheduled"],
        overviewPieChart: [
          { name: "Scheduled", value: 38, color: "#10B981" },
          { name: "Completed", value: 45, color: "#2563EB" },
          { name: "Canceled", value: 32, color: "#FFBB28" },
          { name: "Not Show", value: 28, color: "#FF8042" },
        ],
        overviewBarChart: [
          { name: "Orthopedics", appointment: 225 },
          { name: "Neurology", appointment: 187 },
          { name: "Oncology", appointment: 201 },
          { name: "Dermatology", appointment: 224 },
          { name: "Psychiatry", appointment: 163 },
          { name: "Ophthalmology", appointment: 228 },
        ],
        recentAppointment: [
          {
            patient: "Emma Thompson",
            doctor: "Dr. Smith",
            date: "Today",
            time: "10:00 AM",
            service: "General Checkup",
            status: "Completed",
          },
          {
            patient: "James Wilson",
            doctor: "Dr. Asif",
            date: "Yesterday",
            time: "2:30 PM",
            service: "Consultation",
            status: "Canceled",
          },
          {
            patient: "Liam Anderson",
            doctor: "Dr. Rakib",
            date: "Last Week",
            time: "11:00 AM",
            service: "Follow-up",
            status: "Not Show",
          },
          {
            patient: "Olivia Taylor",
            doctor: "Dr. Sarah",
            date: "Last Month",
            time: "1:00 PM",
            service: "Skin Checkup",
            status: "Scheduled",
          },
          {
            patient: "Noah Garcia",
            doctor: "Dr. Adams",
            date: "Today",
            time: "3:00 PM",
            service: "Therapy Session",
            status: "Completed",
          },
          {
            patient: "Ava Rodriguez",
            doctor: "Dr. Lee",
            date: "Yesterday",
            time: "9:00 AM",
            service: "ECG",
            status: "Completed",
          },
          {
            patient: "William Lee",
            doctor: "Dr. Brown",
            date: "Last Week",
            time: "10:30 AM",
            service: "Vaccination",
            status: "Scheduled",
          },
          {
            patient: "Isabella Hernandez",
            doctor: "Dr. Chen",
            date: "Today",
            time: "4:15 PM",
            service: "Eye Exam",
            status: "Canceled",
          },
          {
            patient: "Mason Lopez",
            doctor: "Dr. Asif",
            date: "Last Month",
            time: "2:00 PM",
            service: "Consultation",
            status: "Completed",
          },
          {
            patient: "Mason Lopez",
            doctor: "Dr. Smith",
            date: "Yesterday",
            time: "11:45 AM",
            service: "X-ray",
            status: "Not Show",
          },
        ],
      },
    ],
  },
};
