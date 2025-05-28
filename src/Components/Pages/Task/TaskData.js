import Status from "@/Components/UI/Status/Status";

export const tasksData = [
  {
    id: 1,
    title: "Order medical supplies",
    description: "Check inventory and place orders for depleted items",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2025-05-30",
    assignedTo: "Nurse Wilson",
  },
  {
    id: 2,
    title: "Schedule staff meeting",
    description: "Arrange monthly staff meeting and prepare agenda",
    priority: "Low",
    status: "Completed",
    dueDate: "2025-05-27",
    assignedTo: "Admin Staff",
  },
  {
    id: 3,
    title: "Review patient records",
    description: "Go through the latest patient records and update the system",
    priority: "High",
    status: "Todo",
    dueDate: "2025-05-29",
    assignedTo: "Dr. Sarah Johnson",
  },
  {
    id: 4,
    title: "Order medical supplies",
    description: "Check inventory and place orders for depleted items",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2025-05-30",
    assignedTo: "Nurse Wilson",
  },
  {
    id: 5,
    title: "Schedule staff meeting",
    description: "Arrange monthly staff meeting and prepare agenda",
    priority: "Low",
    status: "Completed",
    dueDate: "2025-05-27",
    assignedTo: "Admin Staff",
  },
  {
    id: 6,
    title: "Review patient records",
    description: "Go through the latest patient records and update the system",
    priority: "High",
    status: "Todo",
    dueDate: "2025-05-29",
    assignedTo: "Dr. Sarah Johnson",
  },
];
export const statusColors = {
  "In Progress": "text-blue-600",
  Completed: "text-green-600",
  Todo: "text-gray-500",
};

export const priorityColors = {
  High: <Status type="task" variant="high" text="High" />,
  Medium: <Status type="task" variant="medium" text="Medium" />,
  Low: <Status type="task" variant="low" text="Low" />,
};