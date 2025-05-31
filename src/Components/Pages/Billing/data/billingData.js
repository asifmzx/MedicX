export const billingData = [
  {
    invoiceId: "INV-2025-0134",
    paymentID: "PMT-2025-0140",
    recipient: {
      name: "Sarah Chen",
      id: "P90234",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    invoiceDate: "2025-05-27", // Yesterday
    dueDate: "2025-06-26", // 30 days from issue
    paymentDate: "2025-05-30", // Processing date
    amount: 285.5,
    balance: 285.5,
    status: "Processing",
    method: "Credit Card",
    insurance: "Not Submitted",
  },
  {
    invoiceId: "INV-2025-0133",
    paymentID: "PMT-2025-0141",
    recipient: {
      name: "Marcus Rodriguez",
      id: "P89123",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    invoiceDate: "2025-05-24", // 4 days ago
    dueDate: "2025-06-23", // 30 days from issue
    paymentDate: "2025-05-28", // Failed payment attempt
    amount: 420.0,
    balance: 420.0,
    status: "Failed",
    method: "Credit Card",
    insurance: "Submitted",
  },
  {
    invoiceId: "INV-2025-0132",
    paymentID: "PMT-2025-0142",
    recipient: {
      name: "Jennifer Walsh",
      id: "P88012",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    invoiceDate: "2025-05-22", // 6 days ago
    dueDate: "2025-06-21", // 30 days from issue
    paymentDate: null, // No payment attempt yet
    amount: 156.75,
    balance: 156.75,
    status: "Pending",
    method: null,
    insurance: "Pending",
  },
  {
    invoiceId: "INV-2025-0131",
    paymentID: "PMT-2025-0143",
    recipient: {
      name: "David Thompson",
      id: "P87901",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    invoiceDate: "2025-05-15", // 13 days ago
    dueDate: "2025-06-14", // 30 days from issue
    paymentDate: "2025-05-25", // Partial payment made 10 days after invoice
    amount: 325.0,
    balance: 75.0,
    status: "Partially Paid",
    method: "Check",
    insurance: "Approved",
  },
  {
    invoiceId: "INV-2025-0130",
    paymentID: "PMT-2025-0144",
    recipient: {
      name: "Lisa Park",
      id: "P86790",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    },
    invoiceDate: "2025-05-10", // 18 days ago
    dueDate: "2025-06-09", // 30 days from issue
    paymentDate: "2025-05-22", // Paid 12 days after invoice
    amount: 198.25,
    balance: 0,
    status: "Completed",
    method: "Debit Card",
    insurance: "Approved",
  },
  {
    invoiceId: "INV-2025-0129",
    paymentID: "PMT-2025-0145",
    recipient: {
      name: "Robert Kim",
      id: "P85679",
      avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    invoiceDate: "2025-05-08", // 20 days ago
    dueDate: "2025-06-07", // 30 days from issue
    paymentDate: "2025-05-20", // Paid 12 days after invoice
    amount: 275.8,
    balance: 0,
    status: "Completed",
    method: "Credit Card",
    insurance: "Approved",
  },
  {
    invoiceId: "INV-2025-0128",
    paymentID: "PMT-2025-0146",
    recipient: {
      name: "Amanda Foster",
      id: "P84568",
      avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    invoiceDate: "2025-04-30", // 28 days ago
    dueDate: "2025-05-30", // Overdue in 2 days
    paymentDate: "2025-05-15", // Payment attempt failed
    amount: 445.6,
    balance: 445.6,
    status: "Failed",
    method: "Bank Transfer",
    insurance: "Submitted",
  },
  {
    invoiceId: "INV-2025-0127",
    paymentID: "PMT-2025-0147",
    recipient: {
      name: "Carlos Mendez",
      id: "P83457",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    invoiceDate: "2025-04-25", // 33 days ago
    dueDate: "2025-05-25", // Overdue by 3 days
    paymentDate: "2025-05-28", // Processing payment
    amount: 189.4,
    balance: 189.4,
    status: "Processing",
    method: "Check",
    insurance: "Pending",
  },
  {
    invoiceId: "INV-2025-0126",
    paymentID: "PMT-2025-0148",
    recipient: {
      name: "Michelle Adams",
      id: "P82346",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    invoiceDate: "2025-04-18", // 40 days ago
    dueDate: "2025-05-18", // Overdue by 10 days
    paymentDate: "2025-05-15", // Paid 3 days before due date
    amount: 312.9,
    balance: 0,
    status: "Completed",
    method: "Bank Transfer",
    insurance: "Approved",
  },
  {
    invoiceId: "INV-2025-0125",
    paymentID: "PMT-2025-0149",
    recipient: {
      name: "James Patterson",
      id: "P81235",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    },
    invoiceDate: "2025-04-12", // 46 days ago
    dueDate: "2025-05-12", // Overdue by 16 days
    paymentDate: "2025-05-20", // Payment attempt failed
    amount: 267.15,
    balance: 267.15,
    status: "Failed",
    method: "Credit Card",
    insurance: "Not Submitted",
  },
  {
    invoiceId: "INV-2025-0124",
    paymentID: "PMT-2025-0150",
    recipient: {
      name: "Nicole Wright",
      id: "P80124",
      avatar: "https://randomuser.me/api/portraits/women/39.jpg",
    },
    invoiceDate: "2025-04-05", // 53 days ago
    dueDate: "2025-05-05", // Overdue by 23 days
    paymentDate: "2025-05-10", // Partial payment made 5 days after due date
    amount: 178.3,
    balance: 89.15,
    status: "Partially Paid",
    method: "Cash",
    insurance: "Approved",
  },
  {
    invoiceId: "INV-2025-0123",
    paymentID: "PMT-2025-0151",
    recipient: {
      name: "Kevin Zhang",
      id: "P79013",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    invoiceDate: "2025-03-28", // 61 days ago
    dueDate: "2025-04-27", // Overdue by 31 days
    paymentDate: "2025-04-20", // Paid 7 days before due date
    amount: 394.75,
    balance: 0,
    status: "Completed",
    method: "Insurance",
    insurance: "Approved",
  },
];

export const statusMappings = {
  invoice: {
    Completed: "Paid",
    Processing: "Unpaid",
    Failed: "Unpaid",
    Pending: "Unpaid",
    "Partially Paid": "Partially Paid",
  },
  payment: {
    Completed: "Completed",
    Processing: "Processing",
    Failed: "Failed",
    Pending: "Pending",
    "Partially Paid": "Partially Paid",
  },
};

export const getInvoiceData = () => {
  return billingData.map((item) => ({
    ...item,
    status: statusMappings.invoice[item.status] || item.status,
  }));
};

export const getPaymentData = () => {
  return billingData.map((item) => ({
    ...item,
    status: statusMappings.payment[item.status] || item.status,
  }));
};

// Key Formulas Summary (Updated for May 31, 2025):
//
// Total Outstanding = SUM(Balance) WHERE Status ≠ "Completed"
// Current: $1,929.50 (balances from non-completed payments)
//
// Paid This Month (May) = SUM(Amount) WHERE Status = "Completed" AND Date in May 2025
// Current: $786.95 (Lisa Park + Robert Kim + Michelle Adams)
//
// Overdue Count = COUNT() WHERE Due Date < May 31, 2025 AND Status ≠ "Completed"
// Current: 3 invoices (Carlos Mendez, James Patterson, Nicole Wright)
//
// Insurance Claims = COUNT() WHERE Insurance Status ≠ "Not Submitted"
// Current: 9 claims (Submitted, Pending, or Approved statuses)
//
// Average Invoice Amount = $285.75
// Payment Success Rate = ~33% (4 out of 12 invoices fully completed)
// Average Days to Payment = ~25 days for completed payments
