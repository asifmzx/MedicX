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
      { label: "Admin Dashboard", href: "/home/Admin/dashboard/admindashboard" },
      { label: "Doctor Dashboard", href: "/home/Admin/dashboard/doctordashboard" },
      { label: "Patient Dashboard", href: "/home/Admin/dashboard/patientdashboard" },
    ],
  },
  {
    type: "group",
    label: "Doctors",
    icon: FaUserMd,
    items: [
      { label: "Doctor List", href: "/home/Admin/doctors/doctors_list" },
      { label: "Add Doctor", href: "/home/Admin/doctors/add_doctor" },
      { label: "Doctor Schedule", href: "/home/Admin/doctors/doctor_schedule" },
      { label: "Specialization", href: "/home/Admin/doctors/specializations" },
    ],
  },
  {
    type: "link",
    label: "Patient",
    href: "/home/Admin/patient",
    icon: FaUserInjured,
  },
  {
    type: "group",
    label: "Appointments",
    icon: LuCalendarPlus2,
    items: [
      {
        label: "All Appointments",
        href: "/home/Admin/appointments/all_appointments",
      },
      { label: "Add Appointment", href: "/home/Admin/appointments/add_appointment" },
      { label: "Calendar View", href: "/home/Admin/appointments/calender_view" },
      {
        label: "Appointment Requests",
        href: "/home/Admin/appointments/appointment_requests",
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
        href: "/home/Admin/prescriptions/all_prescriptions",
      },
      {
        label: "Create Prescriptions",
        href: "/home/Admin/prescriptions/create_prescription",
      },
      {
        label: "Medicine Templates",
        href: "/home/Admin/prescriptions/medicine_templates",
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
        href: "/home/Admin/ambulance/ambulance_call_list",
      },
      { label: "Ambulance List", href: "/home/Admin/ambulance/ambulance_list" },
      { label: "Ambulance Details", href: "/home/Admin/ambulance/ambulance_details" },
    ],
  },
  {
    type: "link",
    label: "Pharmacy",
    href: "/home/Admin/pharmacy",
    icon: MdAddShoppingCart,
  },
  {
    type: "group",
    label: "Blood Bank",
    icon: MdOutlineBloodtype,
    items: [
      { label: "Blood Stock", href: "/home/Admin/blood_bank/blood_stock" },
      { label: "Blood Donor", href: "/home/Admin/blood_bank/blood_donor" },
      { label: "Blood Issued", href: "/home/Admin/blood_bank/blood_issued" },
      { label: "Add Blood Unit", href: "/home/Admin/blood_bank/add_blood_unit" },
      { label: "Issue Blood", href: "/home/Admin/blood_bank/issue_blood" },
    ],
  },
  {
    type: "group",
    label: "Billing",
    icon: FaClipboardList,
    items: [
      { label: "Invoices List", href: "/home/Admin/billing/invoices_list" },
      { label: "Create Invoice", href: "/home/Admin/billing/create_invoice" },
      { label: "Payment History", href: "/home/Admin/billing/payment_history" },
      { label: "Insurance Claims", href: "/home/Admin/billing/insurance_claims" },
    ],
  },
  {
    type: "group",
    label: "Departments",
    icon: HiOutlineBuildingOffice2,
    items: [
      { label: "Department List", href: "/home/Admin/departments/department_list" },
      { label: "Add Department", href: "/home/Admin/departments/add_department" },
      { label: "Services Offered", href: "/home/Admin/departments/services_offered" },
    ],
  },
  {
    type: "group",
    label: "Inventory",
    icon: FaBoxes,
    items: [
      { label: "Inventory List", href: "/home/Admin/inventory/inventory_list" },
      { label: "Add Item", href: "/home/Admin/inventory/add_item" },
      { label: "Stock Alerts", href: "/home/Admin/inventory/stock_alerts" },
      { label: "Suppliers List", href: "/home/Admin/inventory/suppliers_list" },
    ],
  },
  {
    type: "group",
    label: "Staff",
    icon: FaUserMd,
    items: [
      { label: "All Staff", href: "/home/Admin/staff/all_staff" },
      { label: "Add Staff", href: "/home/Admin/staff/add_staff" },
      {
        label: "Roles & Permissions",
        href: "/home/Admin/staff/roles_and_permission",
      },
      { label: "Attendance", href: "/home/Admin/staff/attendance" },
    ],
  },
  {
    type: "group",
    label: "Records",
    icon: FaFolderOpen,
    items: [
      { label: "Birth Records", href: "/home/Admin/records/birth_records" },
      { label: "Death Records", href: "/home/Admin/records/death_records" },
    ],
  },
  {
    type: "group",
    label: "Room Allotment",
    icon: FaBed,
    items: [
      { label: "Allotted Rooms", href: "/home/Admin/room_allotment/allotted_rooms" },
      { label: "New Allotment", href: "/home/Admin/room_allotment/new_allotment" },
      {
        label: "Room by Department",
        href: "/home/Admin/room_allotment/room_by_department",
      },
      { label: "Add New Room", href: "/home/Admin/room_allotment/add_new_room" },
    ],
  },
  {
    type: "group",
    label: "Reviews",
    icon: MdOutlineReviews,
    items: [
      { label: "Doctor Reviews", href: "/home/Admin/reviews/doctor_reviews" },
      { label: "Patient Reviews", href: "/home/Admin/reviews/patient_reviews" },
    ],
  },
  {
    type: "link",
    label: "Feedback",
    icon: MdOutlineFeedback,
    href: "/home/Admin/feedback",
  },
  {
    type: "group",
    label: "Reports",
    icon: FaChartLine,
    items: [
      { label: "Overview", href: "/home/Admin/reports/overview" },
      {
        label: "Appointment Reports",
        href: "/home/Admin/reports/appointment_reports",
      },
      { label: "Financial Reports", href: "/home/Admin/reports/financial_reports" },
      { label: "Inventory Reports", href: "/home/Admin/reports/inventory_reports" },
      {
        label: "Patient Visit Reports",
        href: "/home/Admin/reports/patient_visit_reports",
      },
    ],
  },
  {
    type: "group",
    label: "Settings",
    icon: FaCog,
    items: [
      { label: "General Settings", href: "/home/Admin/settings/general_settings" },
      { label: "Notifications", href: "/home/Admin/settings/notifications" },
      { label: "Working Hours", href: "/home/Admin/settings/working_hours" },
      { label: "Integrations", href: "/home/Admin/settings/integrations" },
    ],
  },
  {
    type: "group",
    label: "Authentication",
    icon: FaLock,
    items: [
      { label: "Login", href: "/home/Admin/authentication/login" },
      { label: "Register", href: "/home/Admin/authentication/register" },
      {
        label: "Forgot Password",
        href: "/home/Admin/authentication/forgot_password",
      },
      {
        label: "Profile Settings",
        href: "/home/Admin/authentication/profile_settings",
      },
    ],
  },
  { type: "link", label: "Calendar", href: "/home/Admin/calendar", icon: FaCalendar },
  { type: "link", label: "Tasks", href: "/home/Admin/tasks", icon: FaTasks },
  {
    type: "link",
    label: "Contacts",
    href: "/home/Admin/contacts",
    icon: FaAddressBook,
  },
  { type: "link", label: "Email", href: "/home/Admin/email", icon: FaEnvelope },
  { type: "link", label: "Chat", href: "/home/Admin/chat", icon: FaChat },
  {
    type: "link",
    label: "Support",
    href: "/home/Admin/support",
    icon: RiCustomerService2Line,
  },
  {
    type: "link",
    label: "Widgets",
    href: "/home/Admin/widgets",
    icon: FaGripHorizontal,
  },
];
