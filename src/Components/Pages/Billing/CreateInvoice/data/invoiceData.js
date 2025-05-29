export const patients = [
  {
    id: "P12345",
    name: "John Smith",
    age: 45,
    gender: "Male",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Apt 4B, New York, NY 10001",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: "P23456",
    name: "Emily Davis",
    age: 33,
    gender: "Female",
    email: "emily.davis@example.com",
    phone: "+1 (555) 987-6543",
    address: "456 Oak Avenue, San Francisco, CA 94107",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: "P34567",
    name: "Robert Wilson",
    age: 58,
    gender: "Male",
    email: "robert.wilson@example.com",
    phone: "+1 (555) 456-7890",
    address: "789 Pine Boulevard, Chicago, IL 60601",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

// Other invoice data can be added here
export const invoiceDefaults = {
  taxRate: 0.08,
  paymentTerms: [
    { id: "net15", name: "Net 15 Days" },
    { id: "net30", name: "Net 30 Days" },
    { id: "net45", name: "Net 45 Days" },
    { id: "immediate", name: "Due on Receipt" },
  ],
  defaultTerm: "net30",
};
