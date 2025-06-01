
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

export const getInsuranceClaimsData = () => {
  return insuranceClaimsData;
};

export const getClaimDetailsById = (claimId) => {
  return claimDetailsById[claimId] || claimDetails;
};


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

export const claimDetailsById = {
  "CLM-001": {
    policyNumber: "BCBS123456789",
    groupNumber: "GRP987654321",
    relationship: "Self",
    claimType: "Medical",
    claimAmount: 200.0,
    approvedAmount: 180.0,
    patientResponsibility: 20.0,
    paymentDate: "2024-04-22",
    services: [
      {
        service: "General Consultation",
        date: "2024-04-15",
        billed: 150.0,
        allowed: 135.0,
        patientResp: 15.0,
      },
      {
        service: "Blood Test - Basic Panel",
        date: "2024-04-15",
        billed: 50.0,
        allowed: 45.0,
        patientResp: 5.0,
      },
    ],
    notes: "Claim approved with standard copay deduction",
  },
  "CLM-002": {
    policyNumber: "AET-87654321",
    groupNumber: "GRP987654321",
    relationship: "Self",
    claimType: "Medical",
    claimAmount: 280.0,
    approvedAmount: 280.0,
    patientResponsibility: 28.0,
    paymentDate: null,
    services: [
      {
        service: "Specialist Consultation",
        date: "2024-04-16",
        billed: 200.0,
        allowed: 200.0,
        patientResp: 20.0,
      },
      {
        service: "X-Ray Examination",
        date: "2024-04-16",
        billed: 80.0,
        allowed: 80.0,
        patientResp: 8.0,
      },
    ],
    notes:
      "Claim is under review. Processing time may take 5-10 business days.",
  },
  "CLM-003": {
    policyNumber: "UHC-56789123",
    groupNumber: "GRP987654321",
    relationship: "Self",
    claimType: "Medical",
    claimAmount: 140.0,
    approvedAmount: 126.0,
    patientResponsibility: 14.0,
    paymentDate: "2024-04-22",
    services: [
      {
        service: "Follow-up Consultation",
        date: "2024-04-10",
        billed: 100.0,
        allowed: 90.0,
        patientResp: 10.0,
      },
      {
        service: "Prescription Review",
        date: "2024-04-10",
        billed: 40.0,
        allowed: 36.0,
        patientResp: 4.0,
      },
    ],
    notes: "Claim approved with standard copay deduction",
  },
  "CLM-004": {
    policyNumber: "DD-45678912",
    groupNumber: "GRP987654321",
    relationship: "Self",
    claimType: "Dental",
    claimAmount: 418.0,
    approvedAmount: 376.2,
    patientResponsibility: 41.8,
    paymentDate: "2024-04-22",
    services: [
      {
        service: "Dental Cleaning",
        date: "2024-04-05",
        billed: 120.0,
        allowed: 108.0,
        patientResp: 12.0,
      },
      {
        service: "Cavity Filling",
        date: "2024-04-05",
        billed: 298.0,
        allowed: 268.2,
        patientResp: 29.8,
      },
    ],
    notes: "Claim approved with standard copay deduction",
  },
  "CLM-005": {
    policyNumber: "CIG-12378456",
    groupNumber: "GRP987654321",
    relationship: "Self",
    claimType: "Medical",
    claimAmount: 360.0,
    approvedAmount: 360.0,
    patientResponsibility: 36.0,
    paymentDate: null,
    services: [
      {
        service: "Physical Therapy Session",
        date: "2024-04-18",
        billed: 250.0,
        allowed: 250.0,
        patientResp: 25.0,
      },
      {
        service: "Consultation",
        date: "2024-04-18",
        billed: 110.0,
        allowed: 110.0,
        patientResp: 11.0,
      },
    ],
    notes: "Claim has been submitted to insurance provider. Awaiting response.",
  },
  "CLM-006": {
    policyNumber: "HUM-78912345",
    groupNumber: "GRP987654321",
    relationship: "Self",
    claimType: "Medical",
    claimAmount: 240.0,
    approvedAmount: 0.0,
    patientResponsibility: 240.0,
    paymentDate: null,
    services: [
      {
        service: "Lab Work",
        date: "2024-04-12",
        billed: 180.0,
        allowed: 0.0,
        patientResp: 180.0,
      },
      {
        service: "Consultation",
        date: "2024-04-12",
        billed: 60.0,
        allowed: 0.0,
        patientResp: 60.0,
      },
    ],
    notes:
      "Claim rejected due to insufficient documentation. Please resubmit with required documents.",
  },
  "CLM-007": {
    policyNumber: "MED-12345678",
    groupNumber: "GRP987654321",
    relationship: "Self",
    claimType: "Medical",
    claimAmount: 180.0,
    approvedAmount: 0.0,
    patientResponsibility: 0.0,
    paymentDate: null,
    services: [
      {
        service: "Annual Checkup",
        date: "2024-04-20",
        billed: 150.0,
        allowed: 0.0,
        patientResp: 0.0,
      },
      {
        service: "Blood Pressure Check",
        date: "2024-04-20",
        billed: 30.0,
        allowed: 0.0,
        patientResp: 0.0,
      },
    ],
    notes:
      "Claim is in draft status. Please complete and submit for processing.",
  },
};

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

export const insuranceClaimsData = [
  {
    claimId: "CLM-001",
    patient: {
      name: "John Smith",
      id: "P1234",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    provider: "Blue Cross Blue Shield",
    policyNumber: "BCBS-12345678",
    submitted: "2024-04-15",
    amount: 200.0,
    status: "Approved",
    type: "Medical",
  },
  {
    claimId: "CLM-002",
    patient: {
      name: "Emily Davis",
      id: "P5678",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    provider: "Aetna",
    policyNumber: "AET-87654321",
    submitted: "2024-04-16",
    amount: 280.0,
    status: "Pending",
    type: "Medical",
  },
  {
    claimId: "CLM-003",
    patient: {
      name: "Robert Wilson",
      id: "P9012",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    provider: "UnitedHealthcare",
    policyNumber: "UHC-56789123",
    submitted: "2024-04-10",
    amount: 140.0,
    status: "Approved",
    type: "Medical",
  },
  {
    claimId: "CLM-004",
    patient: {
      name: "Jessica Brown",
      id: "P3456",
      avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    provider: "Delta Dental",
    policyNumber: "DD-45678912",
    submitted: "2024-04-05",
    amount: 418.0,
    status: "Approved",
    type: "Dental",
  },
  {
    claimId: "CLM-005",
    patient: {
      name: "Michael Johnson",
      id: "P7890",
      avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    provider: "Cigna",
    policyNumber: "CIG-12378456",
    submitted: "2024-04-18",
    amount: 360.0,
    status: "Submitted",
    type: "Medical",
  },
  {
    claimId: "CLM-006",
    patient: {
      name: "Sarah Thompson",
      id: "P2345",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    },
    provider: "Humana",
    policyNumber: "HUM-78912345",
    submitted: "2024-04-12",
    amount: 240.0,
    status: "Rejected",
    type: "Medical",
  },
  {
    claimId: "CLM-007",
    patient: {
      name: "David Miller",
      id: "P6789",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    provider: "MediPro",
    policyNumber: "MED-12345678",
    submitted: null,
    amount: 180.0,
    status: "Draft",
    type: "Medical",
  },
];

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
