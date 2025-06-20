import Status from "@/Components/UI/Status/Status";
import { BsThreeDots } from "react-icons/bs";

const category = {
  Client: <Status type="contact" variant="client" text="Client" />,
  Partner: <Status type="contact" variant="partner" text="Partner" />,
  Supplier: <Status type="contact" variant="supplier" text="Supplier" />,
  Lead: <Status type="contact" variant="lead" text="Lead" />,
};
export const Contacts = [
  {
    id: 1,
    name: "Contact 1",
    email: "contact1@example.com",
    phone: "+1 (555) 100-1000",
    company: "Company 1",
    category: "Client",
    created: "May 1, 2025",
  },
  {
    id: 2,
    name: "Contact 2",
    email: "contact2@example.com",
    phone: "+1 (555) 100-1001",
    company: "Company 2",
    category: "Partner",
    created: "May 2, 2025",
  },
  {
    id: 3,
    name: "Contact 3",
    email: "contact3@example.com",
    phone: "+1 (555) 100-1002",
    company: "Company 3",
    category: "Supplier",
    created: "May 3, 2025",
  },
  {
    id: 4,
    name: "Contact 4",
    email: "contact4@example.com",
    phone: "+1 (555) 100-1003",
    company: "Company 4",
    category: "Lead",
    created: "May 4, 2025",
  },
  {
    id: 5,
    name: "Contact 5",
    email: "contact5@example.com",
    phone: "+1 (555) 100-1004",
    company: "Company 5",
    category: "Client",
    created: "May 5, 2025",
  },
  {
    id: 6,
    name: "Contact 6",
    email: "contact6@example.com",
    phone: "+1 (555) 100-1005",
    company: "Company 6",
    category: "Partner",
    created: "May 6, 2025",
  },
  {
    id: 7,
    name: "Contact 7",
    email: "contact7@example.com",
    phone: "+1 (555) 100-1006",
    company: "Company 7",
    category: "Supplier",
    created: "May 7, 2025",
  },
  {
    id: 8,
    name: "Contact 8",
    email: "contact8@example.com",
    phone: "+1 (555) 100-1007",
    company: "Company 8",
    category: "Lead",
    created: "May 8, 2025",
  },
  {
    id: 9,
    name: "Contact 9",
    email: "contact9@example.com",
    phone: "+1 (555) 100-1008",
    company: "Company 9",
    category: "Client",
    created: "May 9, 2025",
  },
  {
    id: 10,
    name: "Contact 10",
    email: "contact10@example.com",
    phone: "+1 (555) 100-1009",
    company: "Company 10",
    category: "Partner",
    created: "May 10, 2025",
  },
  {
    id: 11,
    name: "Contact 11",
    email: "contact11@example.com",
    phone: "+1 (555) 100-1010",
    company: "Company 1",
    category: "Supplier",
    created: "May 11, 2025",
  },
  {
    id: 12,
    name: "Contact 12",
    email: "contact12@example.com",
    phone: "+1 (555) 100-1011",
    company: "Company 2",
    category: "Lead",
    created: "May 12, 2025",
  },
  {
    id: 13,
    name: "Contact 13",
    email: "contact13@example.com",
    phone: "+1 (555) 100-1012",
    company: "Company 3",
    category: "Client",
    created: "May 13, 2025",
  },
  {
    id: 14,
    name: "Contact 14",
    email: "contact14@example.com",
    phone: "+1 (555) 100-1013",
    company: "Company 4",
    category: "Partner",
    created: "May 14, 2025",
  },
  {
    id: 15,
    name: "Contact 15",
    email: "contact15@example.com",
    phone: "+1 (555) 100-1014",
    company: "Company 5",
    category: "Supplier",
    created: "May 15, 2025",
  },
  {
    id: 16,
    name: "Contact 16",
    email: "contact16@example.com",
    phone: "+1 (555) 100-1015",
    company: "Company 6",
    category: "Lead",
    created: "May 16, 2025",
  },
  {
    id: 17,
    name: "Contact 17",
    email: "contact17@example.com",
    phone: "+1 (555) 100-1016",
    company: "Company 7",
    category: "Client",
    created: "May 17, 2025",
  },
  {
    id: 18,
    name: "Contact 18",
    email: "contact18@example.com",
    phone: "+1 (555) 100-1017",
    company: "Company 8",
    category: "Partner",
    created: "May 18, 2025",
  },
  {
    id: 19,
    name: "Contact 19",
    email: "contact19@example.com",
    phone: "+1 (555) 100-1018",
    company: "Company 9",
    category: "Supplier",
    created: "May 19, 2025",
  },
  {
    id: 20,
    name: "Contact 20",
    email: "contact20@example.com",
    phone: "+1 (555) 100-1019",
    company: "Company 10",
    category: "Lead",
    created: "May 20, 2025",
  },
  {
    id: 21,
    name: "Contact 21",
    email: "contact21@example.com",
    phone: "+1 (555) 100-1020",
    company: "Company 1",
    category: "Client",
    created: "May 21, 2025",
  },
  {
    id: 22,
    name: "Contact 22",
    email: "contact22@example.com",
    phone: "+1 (555) 100-1021",
    company: "Company 2",
    category: "Partner",
    created: "May 22, 2025",
  },
  {
    id: 23,
    name: "Contact 23",
    email: "contact23@example.com",
    phone: "+1 (555) 100-1022",
    company: "Company 3",
    category: "Supplier",
    created: "May 23, 2025",
  },
  {
    id: 24,
    name: "Contact 24",
    email: "contact24@example.com",
    phone: "+1 (555) 100-1023",
    company: "Company 4",
    category: "Lead",
    created: "May 24, 2025",
  },
  {
    id: 25,
    name: "Contact 25",
    email: "contact25@example.com",
    phone: "+1 (555) 100-1024",
    company: "Company 5",
    category: "Client",
    created: "May 25, 2025",
  },
  {
    id: 26,
    name: "Contact 26",
    email: "contact26@example.com",
    phone: "+1 (555) 100-1025",
    company: "Company 6",
    category: "Partner",
    created: "May 26, 2025",
  },
  {
    id: 27,
    name: "Contact 27",
    email: "contact27@example.com",
    phone: "+1 (555) 100-1026",
    company: "Company 7",
    category: "Supplier",
    created: "May 27, 2025",
  },
  {
    id: 28,
    name: "Contact 28",
    email: "contact28@example.com",
    phone: "+1 (555) 100-1027",
    company: "Company 8",
    category: "Lead",
    created: "May 1, 2025",
  },
  {
    id: 29,
    name: "Contact 29",
    email: "contact29@example.com",
    phone: "+1 (555) 100-1028",
    company: "Company 9",
    category: "Client",
    created: "May 2, 2025",
  },
  {
    id: 30,
    name: "Contact 30",
    email: "contact30@example.com",
    phone: "+1 (555) 100-1029",
    company: "Company 10",
    category: "Partner",
    created: "May 3, 2025",
  },
  {
    id: 31,
    name: "Contact 31",
    email: "contact31@example.com",
    phone: "+1 (555) 100-1030",
    company: "Company 1",
    category: "Supplier",
    created: "May 4, 2025",
  },
  {
    id: 32,
    name: "Contact 32",
    email: "contact32@example.com",
    phone: "+1 (555) 100-1031",
    company: "Company 2",
    category: "Lead",
    created: "May 5, 2025",
  },
  {
    id: 33,
    name: "Contact 33",
    email: "contact33@example.com",
    phone: "+1 (555) 100-1032",
    company: "Company 3",
    category: "Client",
    created: "May 6, 2025",
  },
  {
    id: 34,
    name: "Contact 34",
    email: "contact34@example.com",
    phone: "+1 (555) 100-1033",
    company: "Company 4",
    category: "Partner",
    created: "May 7, 2025",
  },
  {
    id: 35,
    name: "Contact 35",
    email: "contact35@example.com",
    phone: "+1 (555) 100-1034",
    company: "Company 5",
    category: "Supplier",
    created: "May 8, 2025",
  },
  {
    id: 36,
    name: "Contact 36",
    email: "contact36@example.com",
    phone: "+1 (555) 100-1035",
    company: "Company 6",
    category: "Lead",
    created: "May 9, 2025",
  },
  {
    id: 37,
    name: "Contact 37",
    email: "contact37@example.com",
    phone: "+1 (555) 100-1036",
    company: "Company 7",
    category: "Client",
    created: "May 10, 2025",
  },
  {
    id: 38,
    name: "Contact 38",
    email: "contact38@example.com",
    phone: "+1 (555) 100-1037",
    company: "Company 8",
    category: "Partner",
    created: "May 11, 2025",
  },
  {
    id: 39,
    name: "Contact 39",
    email: "contact39@example.com",
    phone: "+1 (555) 100-1038",
    company: "Company 9",
    category: "Supplier",
    created: "May 12, 2025",
  },
  {
    id: 40,
    name: "Contact 40",
    email: "contact40@example.com",
    phone: "+1 (555) 100-1039",
    company: "Company 10",
    category: "Lead",
    created: "May 13, 2025",
  },
  {
    id: 41,
    name: "Contact 41",
    email: "contact41@example.com",
    phone: "+1 (555) 100-1040",
    company: "Company 1",
    category: "Client",
    created: "May 14, 2025",
  },
  {
    id: 42,
    name: "Contact 42",
    email: "contact42@example.com",
    phone: "+1 (555) 100-1041",
    company: "Company 2",
    category: "Partner",
    created: "May 15, 2025",
  },
  {
    id: 43,
    name: "Contact 43",
    email: "contact43@example.com",
    phone: "+1 (555) 100-1042",
    company: "Company 3",
    category: "Supplier",
    created: "May 16, 2025",
  },
  {
    id: 44,
    name: "Contact 44",
    email: "contact44@example.com",
    phone: "+1 (555) 100-1043",
    company: "Company 4",
    category: "Lead",
    created: "May 17, 2025",
  },
  {
    id: 45,
    name: "Contact 45",
    email: "contact45@example.com",
    phone: "+1 (555) 100-1044",
    company: "Company 5",
    category: "Client",
    created: "May 18, 2025",
  },
  {
    id: 46,
    name: "Contact 46",
    email: "contact46@example.com",
    phone: "+1 (555) 100-1045",
    company: "Company 6",
    category: "Partner",
    created: "May 19, 2025",
  },
  {
    id: 47,
    name: "Contact 47",
    email: "contact47@example.com",
    phone: "+1 (555) 100-1046",
    company: "Company 7",
    category: "Supplier",
    created: "May 20, 2025",
  },
  {
    id: 48,
    name: "Contact 48",
    email: "contact48@example.com",
    phone: "+1 (555) 100-1047",
    company: "Company 8",
    category: "Lead",
    created: "May 21, 2025",
  },
  {
    id: 49,
    name: "Contact 49",
    email: "contact49@example.com",
    phone: "+1 (555) 100-1048",
    company: "Company 9",
    category: "Client",
    created: "May 22, 2025",
  },
  {
    id: 50,
    name: "Contact 50",
    email: "contact50@example.com",
    phone: "+1 (555) 100-1049",
    company: "Company 10",
    category: "Partner",
    created: "May 23, 2025",
  },
];
export const columns = [
  {
    label: "Name",
    key: "name",
    render: (row) => (
      <div className="flex items-center gap-3">
        <p className="font-medium text-gray-900">{row.name}</p>
      </div>
    ),
  },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phone" },
  { label: "Company", key: "company" },
  {
    label: "Category",
    key: "category",
    render: (row) => (
      <Status
        type="contact"
        variant={row.category.toLowerCase()}
        text={row.category}
      />
    ),
  },
  { label: "Created", key: "created" },

  {
    label: "Actions",
    key: "action",
    render: () => (
      <button className="text-xl text-gray-500 hover:text-gray-700 ">
        <BsThreeDots />
      </button>
    ),
  },
];
