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

import {
  MdAddShoppingCart,
  MdOutlineBloodtype,
  MdOutlineDashboard,
  MdOutlineFeedback,
  MdOutlineReviews,
} from "react-icons/md";
import { RiCustomerService2Line, RiFileAddLine } from "react-icons/ri";

export const PatientSidebarMenuItems = [
  {
    type: "link",
    label: "Dashboard",

    icon: MdOutlineDashboard,
    href: "/home/Patient/dashboard/patientdashboard",
  },

  {
    type: "group",
    label: "Doctors",
    icon: FaUserMd,
    items: [
      { label: "Doctor List", href: "/home/Patient/doctors/doctors_list" },
      {
        label: "Specialization",
        href: "/home/Patient/doctors/specializations",
      },
    ],
  },
  {
    type: "link",
    label: "Add Appointment",

    icon: LuCalendarPlus2,
    href: "/home/Patient/appointments/add_appointment",
  },

  {
    type: "group",
    label: "Prescriptions",
    icon: RiFileAddLine,
    items: [
      {
        label: "All Prescriptions",
        href: "/home/Patient/prescriptions/all_prescriptions",
      },
      {
        label: "Medicine Templates",
        href: "/home/Patient/prescriptions/medicine_templates",
      },
    ],
  },
  {
    type: "group",
    label: "Ambulance",
    icon: FaAmbulance,
    items: [
      {
        label: "Ambulance List",
        href: "/home/Patient/ambulance/ambulance_list",
      },
      {
        label: "Ambulance Details",
        href: "/home/Patient/ambulance/ambulance_details",
      },
    ],
  },
  {
    type: "link",
    label: "Pharmacy",
    href: "/home/Patient/pharmacy",
    icon: MdAddShoppingCart,
  },
  {
    type: "group",
    label: "Blood Bank",
    icon: MdOutlineBloodtype,
    items: [
      { label: "Blood Stock", href: "/home/Patient/blood_bank/blood_stock" },
      { label: "Blood Donor", href: "/home/Patient/blood_bank/blood_donor" },

      { label: "Issue Blood", href: "/home/Patient/blood_bank/issue_blood" },
    ],
  },
  {
    type: "link",
    label: "Payment History",
    href: "/home/Patient/billing/payment_history",
    icon: FaClipboardList,
  },

  {
    type: "group",
    label: "Departments",
    icon: HiOutlineBuildingOffice2,
    items: [
      {
        label: "Services Offered",
        href: "/home/Patient/departments/services_offered",
      },
    ],
  },

  {
    type: "link",
    label: "Reviews",

    icon: MdOutlineReviews,
    href: "/home/Patient/reviews/patient_reviews",
  },

  {
    type: "link",
    label: "Feedback",
    icon: MdOutlineFeedback,
    href: "/home/Patient/feedback",
  },

  {
    type: "link",
    label: "Calendar",
    href: "/home/Patient/calendar",
    icon: FaCalendar,
  },

  { type: "link", label: "Chat", href: "/home/Patient/chat", icon: FaChat },
  {
    type: "link",
    label: "Support",
    href: "/home/Patient/support",
    icon: RiCustomerService2Line,
  },
  {
    type: "link",
    label: "Widgets",
    href: "/home/Patient/widgets",
    icon: FaGripHorizontal,
  },
];
