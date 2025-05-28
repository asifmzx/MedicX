"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSidebar } from "./SidebarContext";
import { usePathname } from "next/navigation";
import { IconContext } from "react-icons";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import {
  FaUserShield,
  FaAmbulance,
  FaHospital,
  FaBoxes,
  FaUserMd,
  FaFolder,
  FaComment,
  FaChartBar,
  FaCog,
  FaShieldAlt,
} from "react-icons/fa";

const SidebarLink = ({ href, label, onClick, icon: Icon }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-white/10 text-white" : ""
        }`}
      onClick={onClick}
    >
      {Icon && (
        <IconContext.Provider value={{ className: "w-4 h-4 mr-2" }}>
          <Icon />
        </IconContext.Provider>
      )}
      {label}
    </Link>
  );
};

const SidebarGroup = ({ label, items, onClick, icon: Icon }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isGroupActive = items.some((item) => item.href === pathname);

  useEffect(() => {
    if (isGroupActive) setOpen(true);
  }, [isGroupActive]);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm  ${isGroupActive ? "bg-white/10 text-white" : ""
          }`}
      >
        <div className="flex items-center">
          {Icon && (
            <IconContext.Provider value={{ className: "w-4 h-4 mr-2" }}>
              <Icon />
            </IconContext.Provider>
          )}
          {label}
        </div>
        {open ? (
          <span>
            <SlArrowUp size={12} />
          </span>
        ) : (
          <span className="transition duration-300">
            <SlArrowDown size={12} />
          </span>
        )}
      </button>
      {open && (
        <div className="pl-6 mt-1 space-y-1">
          {items.map((item, index) => (
            <SidebarLink
              key={index}
              href={item.href}
              label={item.label}
              onClick={onClick}
              icon={item.icon}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const menuItems = [
  {
    type: "group",
    label: "Dashboard",
    icon: FaUserShield,
    items: [
      { label: "Admin Dashboard", href: "/home/dashboard/admindashboard" },
      { label: "Doctor Dashboard", href: "/home/dashboard/doctordashboard" },
      { label: "Patient Dashboard", href: "/home/dashboard/patientdashboard" },
    ],
  },

  {
    type: "group",
    label: "Doctors",
    icon: FaUserShield,
    items: [
      { label: "Doctor List", href: "/home/doctors/doctors_list" },
      { label: "Add Doctor", href: "/home/doctors/add_doctor" },
      { label: "Doctor Schedule", href: "/home/doctors/doctor_schedule" },
      { label: "Specialization", href: "/home/doctors/specializations" },
    ],
  },

  { type: "link", label: "Patient", href: "/home/patient", icon: FaUserShield },

  {
    type: "group",
    label: "Appointments",
    items: [
      {
        label: "All Appointments",
        href: "/home/appointments/all_appointments",
      },
      { label: "Add Appointment", href: "/home/appointments/add_appointment" },
      { label: "Calender View", href: "/home/appointments/calender_view" },
      {
        label: "Appointment Requests",
        href: "/home/appointments/appointment_requests",
      },
    ],
  },

  {
    type: "group",
    label: "Prescriptions",
    icon: FaAmbulance,
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

  { type: "link", label: "Pharmacy", href: "/home/pharmacy" },

  {
    type: "group",
    label: "Blood Bank",
    icon: FaAmbulance,
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
    icon: FaAmbulance,
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
    icon: FaHospital,
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
    icon: FaFolder,
    items: [
      { label: "Birth Records", href: "/home/records/birth_records" },
      { label: "Death Records", href: "/home/records/death_records" },
    ],
  },

  {
    type: "group",
    label: "Room Allotment",
    icon: FaFolder,
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

  { type: "link", label: "Feedback", icon: FaComment, href: "/home/feedback" },

  {
    type: "group",
    label: "Reports",
    icon: FaChartBar,
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
    icon: FaShieldAlt,
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

  { type: "link", label: "Email", href: "/home/email" },
  { type: "link", label: "Chat", href: "/home/chat" },
  { type: "link", label: "Support", href: "/home/support" },

  { type: "link", label: "Calendar", href: "/home/calendar" },
  { type: "link", label: "Tasks", href: "/home/tasks" },
  { type: "link", label: "Contacts", href: "/home/contacts" },
  { type: "link", label: "Widgets", href: "/home/widgets" },

  // User Section
  // { type: "link", label: "User", href: "/profile" },
  // { type: "link", label: "Administrator", href: "/admin" },
];

const SidebarContent = ({ onLinkClick }) => (
  <div className="flex flex-col space-y-2 pb-4">
    {menuItems.map((item, idx) =>
      item.type === "link" ? (
        <SidebarLink
          key={idx}
          href={item.href}
          label={item.label}
          onClick={onLinkClick}
          icon={item.icon}
        />
      ) : (
        <SidebarGroup
          key={idx}
          label={item.label}
          items={item.items}
          onClick={onLinkClick}
          icon={item.icon}
        />
      )
    )}
  </div>
);

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-15 inset-0 z-40 ${isSidebarOpen ? "block" : "hidden"
          }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={closeSidebar} />
        <aside
          className={`
            absolute top-0 left-0 bg-[#193768] w-64 h-full
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="h-full overflow-y-auto p-4">
            <SidebarContent onLinkClick={closeSidebar} />
          </div>
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-15 left-0 z-30  h-[calc(100vh-4rem)] w-64 bg-[#193768] mt-1">
        <div className="h-full overflow-y-auto w-full p-4 ScrollBar">
          <SidebarContent />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
