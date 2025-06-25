import {
  FaUserMd,
  FaUserInjured,
  FaClipboardList,
  FaAmbulance,
  FaBoxes,
  FaFolderOpen,
  FaBed,
  FaChartLine,
  FaCog,
  FaLock,
  FaEnvelope,
  FaComments as FaChat,
  FaCalendarAlt as FaCalendar,
  FaTasks,
  FaAddressBook,
  FaGripHorizontal,
} from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuCalendarPlus2 } from "react-icons/lu";

import { MdAddShoppingCart, MdOutlineBloodtype, MdOutlineDashboard, MdOutlineFeedback, MdOutlineReviews } from "react-icons/md";
import { RiCustomerService2Line, RiFileAddLine } from "react-icons/ri";

export const DoctorSidebarMenuItems = [
  {
    type: "link",
    label: "Dashboard",
    href: "/home/Doctor/dashboard/doctordashboard",
    icon: MdOutlineDashboard,
  },
  {
    type: "link",
    label: "Doctor Schedule",
    href: "/home/Doctor/doctors/doctor_schedule",
    icon: FaUserMd,
  },

  {
    type: "group",
    label: "Prescriptions",
    icon: RiFileAddLine,
    items: [
      {
        label: "All Prescriptions",
        href: "/home/Doctor/prescriptions/all_prescriptions",
      },
      {
        label: "Create Prescriptions",
        href: "/home/Doctor/prescriptions/create_prescription",
      },
      {
        label: "Medicine Templates",
        href: "/home/Doctor/prescriptions/medicine_templates",
      },
    ],
  },

  {
    type: "link",
    label: "Room Allotment",
    href: "/home/Doctor/room_allotment/allotted_rooms",
    icon: FaBed,
  },

  
  {
    type: "group",
    label: "Reviews",
    icon: MdOutlineReviews,
    items: [
      { label: "Doctor Reviews", href: "/home/Doctor/reviews/doctor_reviews" },
      {
        label: "Patient Reviews",
        href: "/home/Doctor/reviews/patient_reviews",
      },
    ],
  },
  {
    type: "link",
    label: "Feedback",
    icon: MdOutlineFeedback,
    href: "/home/Doctor/feedback",
  },
 
  {
    type: "link",
    label: "Calendar",
    href: "/home/Doctor/calendar",
    icon: FaCalendar,
  },
  
  
 
  { type: "link", label: "Chat", href: "/home/Doctor/chat", icon: FaChat },
  {
    type: "link",
    label: "Support",
    href: "/home/Doctor/support",
    icon: RiCustomerService2Line,
  },
  {
    type: "link",
    label: "Widgets",
    href: "/home/Doctor/widgets",
    icon: FaGripHorizontal,
  },
];
