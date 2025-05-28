import Status from "@/Components/UI/Status/Status";
import { BsThreeDots } from "react-icons/bs";
import { LuEye, LuMessageSquare } from "react-icons/lu";

const support = {
  open: <Status type="support" variant="Open" text="Open" />,
  inProgress: <Status type="support" variant="In Progress" text="In Progress" />,
  resolved: <Status type="support" variant="Resolved" text="Resolved" />,
  high: <Status type="support" variant="High" text="High" />,
  medium: <Status type="support" variant="Medium" text="Medium" />,
  low: <Status type="support" variant="Low" text="Low" />,
};
export const tickets = [
  {
    name: "T-1001",
    date: "contact1@example.com",
    subject: "+1 (555) 100-1000",
    priority: "High",
        status: "Open",
    company:"Company 1",
  },
  {
    name: "T-1002",
    date: "contact1@example.com",
    subject: "+1 (555) 100-1000",
    priority: "Medium",
    status: "In Progress",
     company:"Company 2",
  },
  {
    name: "T-1003",
    date: "contact1@example.com",
    subject: "+1 (555) 100-1000",
    priority: "Low",
      status: "Resolved",
      company:"Company 3",
  },
  {
    name: "T-1004",
    date: "contact1@example.com",
    subject: "+1 (555) 100-1000",
    priority: "High",
    status: "Open",
     company:"Company 4",
  },
  {
    name: "T-1005",
    date: "contact1@example.com",
    subject: "+1 (555) 100-1000",
    priority: "High",
    status: "In Progress",
     company:"Company 5",
  },
];
export const columns = [
  { label: "Name", key: "name" },
  { label: "Date", key: "date" },
  { label: "Subject", key: "subject" },
  { label: "Company", key: "company" }, // Consider removing this if not used in data
  {
    label: "Priority",
    key: "priority",
    render: (row) => (
      <Status
        type="support"
        variant={row.priority}
        text={row.priority}
      />
    ),
  },
  {
    label: "Status",
    key: "status",
    render: (row) => (
      <Status
        type="support"
        variant={row.status}
        text={row.status}
      />
    ),
  },
  {
    label: "Actions",
    key: "action",
    render: () => (
      <div className="flex items-center gap-x-3">
        <button className="text-xl text-gray-500 hover:text-gray-700">
          <LuEye />
        </button>
        <button className="text-xl text-gray-500 hover:text-gray-700">
          <LuMessageSquare />
        </button>
      </div>
    ),
  },
];
  
