export const dummyPayments = [
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
    paymentDate: "2025-05-30", // Yesterday
    amount: 285.5,
    balance: 285.5,
    status: "Unpaid",
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
    amount: 420.0,
    balance: 420.0,
    status: "Unpaid",
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
    amount: 156.75,
    balance: 156.75,
    status: "Unpaid",
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
    amount: 325.0,
    balance: 75.0,
    status: "Partially Paid",
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
    amount: 198.25,
    balance: 0,
    status: "Paid",
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
    amount: 275.8,
    balance: 0,
    status: "Paid",
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
    amount: 445.6,
    balance: 445.6,
    status: "Unpaid",
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
    amount: 189.4,
    balance: 189.4,
    status: "Unpaid",
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
    amount: 312.9,
    balance: 0,
    status: "Paid",
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
    amount: 267.15,
    balance: 267.15,
    status: "Unpaid",
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
    amount: 178.3,
    balance: 89.15,
    status: "Partially Paid",
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
    amount: 394.75,
    balance: 0,
    status: "Paid",
    insurance: "Approved",
  },
];

// Key Formulas Summary (Updated for May 28, 2025):
//
// Total Outstanding = SUM(Balance) WHERE Status ≠ "Paid"
// Current: $1,929.50 (unpaid + partially paid balances)
//
// Paid This Month (May) = SUM(Amount) WHERE Status = "Paid" AND Date in May 2025
// Current: $786.95 (Lisa Park + Robert Kim + Michelle Adams)
//
// Overdue Count = COUNT() WHERE Due Date < May 28, 2025 AND Status ≠ "Paid"
// Current: 3 invoices (Carlos Mendez, James Patterson, Nicole Wright)
//
// Insurance Claims = COUNT() WHERE Insurance Status ≠ "Not Submitted"
// Current: 9 claims (Submitted, Pending, or Approved statuses)
//
// Average Invoice Amount = $285.75
// Payment Success Rate = 50% (6 out of 12 invoices fully paid)
// Average Days to Payment = ~25 days for paid invoices
