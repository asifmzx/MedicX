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
        appointmentTrends: [
          { name: "Jan", completed: 95, canceled: 15, totalAppointment: 120 },
          {
            name: "Fev",
            completed: 110,
            canceled: 18,
            totalAppointment: 135.25,
          },
          { name: "Mar", completed: 125, canceled: 15, totalAppointment: 150 },
          { name: "Apr", completed: 115, canceled: 20, totalAppointment: 145 },
          { name: "May", completed: 130, canceled: 22, totalAppointment: 160 },
          { name: "Jun", completed: 145, canceled: 20, totalAppointment: 175 },
          { name: "Jul", completed: 155, canceled: 25, totalAppointment: 190 },
          { name: "Aug", completed: 150, canceled: 20, totalAppointment: 180 },
          { name: "Sep", completed: 160, canceled: 25, totalAppointment: 195 },
          { name: "Oct", completed: 175, canceled: 25, totalAppointment: 210 },
          { name: "Nov", completed: 185, canceled: 30, totalAppointment: 225 },
          { name: "Dec", completed: 200, canceled: 30, totalAppointment: 240 },
        ],
        weeklyDistribution: [
          { name: "Mon", appointments: 45 },
          { name: "Tue", appointments: 58 },
          { name: "Wed", appointments: 48 },
          { name: "Thu", appointments: 50 },
          { name: "Fri", appointments: 40 },
          { name: "Sat", appointments: 35 },
          { name: "Sun", appointments: 15 },
        ],
        hourlyDistribution: [
          { name: "8 am", appointment: 15 },
          { name: "9 am", appointment: 25 },
          { name: "10am", appointment: 30 },
          { name: "11 am", appointment: 28 },
          { name: "12 pm", appointment: 20 },
          { name: "1 pm", appointment: 18 },
          { name: "2 pm", appointment: 25 },
          { name: "3 pm", appointment: 30 },
          { name: "4 pm", appointment: 25 },
          { name: "5 pm", appointment: 15 },
        ],
        appointmentByDoctor: [
          {
            department: "Cardiology",
            doctor: "Dr. Smith",
            totalAppointments: 245,
            completed: 198,
            canceled: 32,
            notShow: 15,
          },
          {
            department: "Neurology",
            doctor: "Dr. Asif",
            totalAppointments: 187,
            completed: 156,
            canceled: 21,
            notShow: 10,
          },
          {
            department: "Orthopedics",
            doctor: "Dr. Johnson",
            totalAppointments: 163,
            completed: 129,
            canceled: 22,
            notShow: 10,
          },
          {
            department: "Dermatology",
            doctor: "Dr. Rakib",
            totalAppointments: 210,
            completed: 172,
            canceled: 19,
            notShow: 10,
          },
          {
            department: "Pediatrics",
            doctor: "Dr. Emma Thompson",
            totalAppointments: 224,
            completed: 183,
            canceled: 29,
            notShow: 12,
          },
        ],
        doctorPerformance: [
          {
            name: "Dr. Smith",
            completed: 198,
            canceled: 32,
            notShows: 15,
          },
          {
            name: "Dr. Johnson",
            completed: 156,
            canceled: 21,
            notShows: 10,
          },
          {
            name: "Dr. Williams",
            completed: 129,
            canceled: 24,
            notShows: 10,
          },
          {
            name: "Dr. Brown",
            completed: 172,
            canceled: 19,
            notShows: 10,
          },
          {
            name: "Dr. Jones",
            completed: 183,
            canceled: 29,
            notShows: 12,
          },
        ],
        serviceType: [
          {
            name: "Jan",
            generalCheckup: 45,
            Cardiology: 30,
            Orthopedics: 25,
            Pediatrics: 20,
            Dermatology: 35,
          },
          {
            name: "Fev",
            generalCheckup: 50,
            Cardiology: 35,
            Orthopedics: 28,
            Pediatrics: 22,
            Dermatology: 38,
          },
          {
            name: "Mar",
            generalCheckup: 55,
            Cardiology: 38,
            Orthopedics: 30,
            Pediatrics: 25,
            Dermatology: 40,
          },
          {
            name: "Apr",
            generalCheckup: 52,
            Cardiology: 36,
            Orthopedics: 29,
            Pediatrics: 24,
            Dermatology: 39,
          },
          {
            name: "May",
            generalCheckup: 58,
            Cardiology: 40,
            Orthopedics: 32,
            Pediatrics: 27,
            Dermatology: 42,
          },
          {
            name: "Jun",
            generalCheckup: 62,
            Cardiology: 42,
            Orthopedics: 34,
            Pediatrics: 29,
            Dermatology: 45,
          },
        ],
        servicePopularity: [
          {
            service: "Dental Cleaning",
            department: "Dentistry",
            appointments: 312,
            avgDuration: 30,
          },
          {
            service: "Vision Checkup",
            department: "Ophthalmology",
            appointments: 187,
            avgDuration: 45,
          },
          {
            service: "General Consultation",
            department: "Internal Medicine",
            appointments: 156,
            avgDuration: 25,
          },
          {
            service: "Physical Therapy",
            department: "Rehabilitation",
            appointments: 143,
            avgDuration: 40,
          },
          {
            service: "Vaccination",
            department: "Pediatrics",
            appointments: 201,
            avgDuration: 35,
          },
        ],
      },
    ],
  },
};
