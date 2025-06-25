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

export const AdminSidebarMenuItems = [
  {
    type: "group",
    label: "Dashboard",
    icon: MdOutlineDashboard,
    items: [
      { label: "Admin Dashboard", href: "/home/dashboard/admindashboard" },
      { label: "Doctor Dashboard", href: "/home/dashboard/doctordashboard" },
      { label: "Patient Dashboard", href: "/home/dashboard/patientdashboard" },
    ],
  },
  {
    type: "group",
    label: "Doctors",
    icon: FaUserMd,
    items: [
      { label: "Doctor List", href: "/home/doctors/doctors_list" },
      { label: "Add Doctor", href: "/home/doctors/add_doctor" },
      { label: "Doctor Schedule", href: "/home/doctors/doctor_schedule" },
      { label: "Specialization", href: "/home/doctors/specializations" },
    ],
  },
  {
    type: "link",
    label: "Patient",
    href: "/home/patient",
    icon: FaUserInjured,
  },
  {
    type: "group",
    label: "Appointments",
    icon: LuCalendarPlus2,
    items: [
      {
        label: "All Appointments",
        href: "/home/appointments/all_appointments",
      },
      { label: "Add Appointment", href: "/home/appointments/add_appointment" },
      { label: "Calendar View", href: "/home/appointments/calender_view" },
      {
        label: "Appointment Requests",
        href: "/home/appointments/appointment_requests",
      },
    ],
  },
  {
    type: "group",
    label: "Prescriptions",
    icon: RiFileAddLine,
    items: [
      {
        label: "All Prescriptions",
        href: "/home/prescriptions/all_prescriptions",
      },
      {
        label: "Create Prescriptions",
        href: "/home/prescriptions/create_prescription",
      },
      {
        label: "Medicine Templates",
        href: "/home/prescriptions/medicine_templates",
      },
    ],
  },
  {
    type: "group",
    label: "Ambulance",
    icon: FaAmbulance,
    items: [
      {
        label: "Ambulance Call List",
        href: "/home/ambulance/ambulance_call_list",
      },
      { label: "Ambulance List", href: "/home/ambulance/ambulance_list" },
      { label: "Ambulance Details", href: "/home/ambulance/ambulance_details" },
    ],
  },
  {
    type: "link",
    label: "Pharmacy",
    href: "/home/pharmacy",
    icon: MdAddShoppingCart,
  },
  {
    type: "group",
    label: "Blood Bank",
    icon: MdOutlineBloodtype,
    items: [
      { label: "Blood Stock", href: "/home/blood_bank/blood_stock" },
      { label: "Blood Donor", href: "/home/blood_bank/blood_donor" },
      { label: "Blood Issued", href: "/home/blood_bank/blood_issued" },
      { label: "Add Blood Unit", href: "/home/blood_bank/add_blood_unit" },
      { label: "Issue Blood", href: "/home/blood_bank/issue_blood" },
    ],
  },
  {
    type: "group",
    label: "Billing",
    icon: FaClipboardList,
    items: [
      { label: "Invoices List", href: "/home/billing/invoices_list" },
      { label: "Create Invoice", href: "/home/billing/create_invoice" },
      { label: "Payment History", href: "/home/billing/payment_history" },
      { label: "Insurance Claims", href: "/home/billing/insurance_claims" },
    ],
  },
  {
    type: "group",
    label: "Departments",
    icon: HiOutlineBuildingOffice2,
    items: [
      { label: "Department List", href: "/home/departments/department_list" },
      { label: "Add Department", href: "/home/departments/add_department" },
      { label: "Services Offered", href: "/home/departments/services_offered" },
    ],
  },
  {
    type: "group",
    label: "Inventory",
    icon: FaBoxes,
    items: [
      { label: "Inventory List", href: "/home/inventory/inventory_list" },
      { label: "Add Item", href: "/home/inventory/add_item" },
      { label: "Stock Alerts", href: "/home/inventory/stock_alerts" },
      { label: "Suppliers List", href: "/home/inventory/suppliers_list" },
    ],
  },
  {
    type: "group",
    label: "Staff",
    icon: FaUserMd,
    items: [
      { label: "All Staff", href: "/home/staff/all_staff" },
      { label: "Add Staff", href: "/home/staff/add_staff" },
      {
        label: "Roles & Permissions",
        href: "/home/staff/roles_and_permission",
      },
      { label: "Attendance", href: "/home/staff/attendance" },
    ],
  },
  {
    type: "group",
    label: "Records",
    icon: FaFolderOpen,
    items: [
      { label: "Birth Records", href: "/home/records/birth_records" },
      { label: "Death Records", href: "/home/records/death_records" },
    ],
  },
  {
    type: "group",
    label: "Room Allotment",
    icon: FaBed,
    items: [
      { label: "Allotted Rooms", href: "/home/room_allotment/allotted_rooms" },
      { label: "New Allotment", href: "/home/room_allotment/new_allotment" },
      {
        label: "Room by Department",
        href: "/home/room_allotment/room_by_department",
      },
      { label: "Add New Room", href: "/home/room_allotment/add_new_room" },
    ],
  },
  {
    type: "group",
    label: "Reviews",
    icon: MdOutlineReviews,
    items: [
      { label: "Doctor Reviews", href: "/home/reviews/doctor_reviews" },
      { label: "Patient Reviews", href: "/home/reviews/patient_reviews" },
    ],
  },
  {
    type: "link",
    label: "Feedback",
    icon: MdOutlineFeedback,
    href: "/home/feedback",
  },
  {
    type: "group",
    label: "Reports",
    icon: FaChartLine,
    items: [
      { label: "Overview", href: "/home/reports/overview" },
      {
        label: "Appointment Reports",
        href: "/home/reports/appointment_reports",
      },
      { label: "Financial Reports", href: "/home/reports/financial_reports" },
      { label: "Inventory Reports", href: "/home/reports/inventory_reports" },
      {
        label: "Patient Visit Reports",
        href: "/home/reports/patient_visit_reports",
      },
    ],
  },
  {
    type: "group",
    label: "Settings",
    icon: FaCog,
    items: [
      { label: "General Settings", href: "/home/settings/general_settings" },
      { label: "Notifications", href: "/home/settings/notifications" },
      { label: "Working Hours", href: "/home/settings/working_hours" },
      { label: "Integrations", href: "/home/settings/integrations" },
    ],
  },
  {
    type: "group",
    label: "Authentication",
    icon: FaLock,
    items: [
      { label: "Login", href: "/home/authentication/login" },
      { label: "Register", href: "/home/authentication/register" },
      {
        label: "Forgot Password",
        href: "/home/authentication/forgot_password",
      },
      {
        label: "Profile Settings",
        href: "/home/authentication/profile_settings",
      },
    ],
  },
  { type: "link", label: "Calendar", href: "/home/calendar", icon: FaCalendar },
  { type: "link", label: "Tasks", href: "/home/tasks", icon: FaTasks },
  {
    type: "link",
    label: "Contacts",
    href: "/home/contacts",
    icon: FaAddressBook,
  },
  { type: "link", label: "Email", href: "/home/email", icon: FaEnvelope },
  { type: "link", label: "Chat", href: "/home/chat", icon: FaChat },
  {
    type: "link",
    label: "Support",
    href: "/home/support",
    icon: RiCustomerService2Line,
  },
  {
    type: "link",
    label: "Widgets",
    href: "/home/widgets",
    icon: FaGripHorizontal,
  },
];
