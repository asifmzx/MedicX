export const emailTemplates = [
  {
    name: "Appointment Confirmation",
    sub: "Your appointment has been confirmed",
    date: "2023-11-15",
    status: "Active",
  },
  {
    name: "Appointment Reminder",
    sub: "Reminder: Your appointment is tomorrow",
    date: "2023-10-22",
    status: "Active",
  },
  {
    name: "Prescription Ready",
    sub: "Your prescription is ready for pickup",
    date: "2023-09-30",
    status: "Active",
  },
  {
    name: "Lab Results Available",
    sub: "Your lab results are now available",
    date: "2023-10-05",
    status: "Active",
  },
  {
    name: "Payment Receipt",
    sub: "Receipt for your recent payment",
    date: "2023-11-02",
    status: "Active",
  },
  {
    name: "Password Resett",
    sub: "Reset your password",
    date: "2023-10-18",
    status: "Active",
  },
];

export const smsTemplates = [
  {
    name: "Appointment Reminder",
    content:
      "Reminder: You have an appointment at MedixPro Clinic tomorrow at {time}.",
    date: "2023-11-15",
    status: "Active",
  },
  {
    name: "Prescription Ready",
    content:
      "Your prescription is ready for pickup at MedixPro Pharmacy. We're open until {closing_time} today.",
    date: "2023-10-22",
    status: "Active",
  },
  {
    name: "Appointment Confirmation",
    content:
      "Your appointment with Dr. {doctor_name} has been confirmed for {date} at {time}.",
    date: "2023-09-30",
    status: "Active",
  },
  {
    name: "Payment Reminder",
    content:
      "Reminder: Your payment of ${amount} is due on {due_date}. Please visit our website or call {phone}",
    date: "2023-10-05",
    status: "InActive",
  },
];

export const scheduledNotification = [
  {
    name: "Appointment Reminder",
    type: "Email",
    content: "Daily at 10:00 AM",
    lastRun: "2023-11-15",
    nextRun: "2023-11-15",
    status: "Active",
  },
  {
    name: "Prescription Ready",
    type: "SMS",
    content: "Every Monday at 9:00 AM",
    lastRun: "2023-10-22",
    nextRun: "2023-10-22",
    status: "Active",
  },
  {
    name: "Appointment Confirmation",
    type: "Email",
    content: "1st of every month",
    lastRun: "2023-09-30",
    nextRun: "2023-09-30",
    status: "InActive",
  },
];


