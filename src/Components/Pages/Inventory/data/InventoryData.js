export const inventoryList = [
  {
    id: "INV001",
    name: "Disposable Gloves (Box)",
    category: "Medical Supplies",
    stockLevel: "45 / 20",
    currentStock: 45,
    minStock: 20,
    status: "In Stock",
    lastUpdated: "2023-04-15",
    expirationDate: "2024-12-31",
    supplier: "MedSupply Co.",
    unitPrice: 12.5,
    totalValue: 562.5,
  },
  {
    id: "INV002",
    name: "Ibuprofen 200mg",
    category: "Medications",
    stockLevel: "12 / 15",
    currentStock: 12,
    minStock: 15,
    status: "Low Stock",
    lastUpdated: "2023-04-14",
    expirationDate: "2024-08-15",
    supplier: "PharmaCorp",
    unitPrice: 8.75,
    totalValue: 105.0,
  },
  {
    id: "INV003",
    name: "Blood Pressure Monitor",
    category: "Equipment",
    stockLevel: "5 / 3",
    currentStock: 5,
    minStock: 3,
    status: "In Stock",
    lastUpdated: "2023-04-10",
    expirationDate: null, // Equipment doesn't expire
    supplier: "MedTech Solutions",
    unitPrice: 89.99,
    totalValue: 449.95,
  },
  {
    id: "INV004",
    name: "Surgical Masks (Box)",
    category: "Medical Supplies",
    stockLevel: "0 / 10",
    currentStock: 0,
    minStock: 10,
    status: "Out of Stock",
    lastUpdated: "2023-04-12",
    expirationDate: "2025-06-30",
    supplier: "SafetyFirst Ltd",
    unitPrice: 15.25,
    totalValue: 0.0,
  },
  {
    id: "INV005",
    name: "Amoxicillin 500mg",
    category: "Medications",
    stockLevel: "8 / 10",
    currentStock: 8,
    minStock: 10,
    status: "Low Stock",
    lastUpdated: "2023-04-13",
    expirationDate: "2024-07-20",
    supplier: "PharmaCorp",
    unitPrice: 22.5,
    totalValue: 180.0,
  },
  {
    id: "INV006",
    name: "Syringes 5ml",
    category: "Medical Supplies",
    stockLevel: "120 / 50",
    currentStock: 120,
    minStock: 50,
    status: "In Stock",
    lastUpdated: "2023-04-11",
    expirationDate: "2026-01-15",
    supplier: "MedSupply Co.",
    unitPrice: 0.85,
    totalValue: 102.0,
  },
  {
    id: "INV007",
    name: "Examination Table Paper",
    category: "Medical Supplies",
    stockLevel: "3 / 5",
    currentStock: 3,
    minStock: 5,
    status: "Low Stock",
    lastUpdated: "2023-04-09",
    expirationDate: "2025-03-10",
    supplier: "CleanCare Products",
    unitPrice: 18.75,
    totalValue: 56.25,
  },
  {
    id: "INV008",
    name: "Digital Thermometer",
    category: "Equipment",
    stockLevel: "15 / 5",
    currentStock: 15,
    minStock: 5,
    status: "In Stock",
    lastUpdated: "2023-04-08",
    expirationDate: null, // Equipment doesn't expire
    supplier: "MedTech Solutions",
    unitPrice: 25.99,
    totalValue: 389.85,
  },
  {
    id: "INV009",
    name: "Alcohol Swabs (Box)",
    category: "Medical Supplies",
    stockLevel: "25 / 20",
    currentStock: 25,
    minStock: 20,
    status: "On Order",
    lastUpdated: "2023-04-07",
    expirationDate: "2024-09-25",
    supplier: "CleanCare Products",
    unitPrice: 6.5,
    totalValue: 162.5,
  },
  {
    id: "INV010",
    name: "Paracetamol 500mg",
    category: "Medications",
    stockLevel: "60 / 30",
    currentStock: 60,
    minStock: 30,
    status: "In Stock",
    lastUpdated: "2023-04-06",
    expirationDate: "2024-11-12",
    supplier: "PharmaCorp",
    unitPrice: 5.25,
    totalValue: 315.0,
  },
  {
    id: "INV011",
    name: "Stethoscope",
    category: "Equipment",
    stockLevel: "8 / 5",
    currentStock: 8,
    minStock: 5,
    status: "In Stock",
    lastUpdated: "2023-04-05",
    expirationDate: null, // Equipment doesn't expire
    supplier: "MedTech Solutions",
    unitPrice: 125.0,
    totalValue: 1000.0,
  },
  {
    id: "INV012",
    name: "Bandages (Pack)",
    category: "Medical Supplies",
    stockLevel: "35 / 20",
    currentStock: 35,
    minStock: 20,
    status: "In Stock",
    lastUpdated: "2023-04-04",
    expirationDate: "2025-02-28",
    supplier: "MedSupply Co.",
    unitPrice: 8.99,
    totalValue: 314.65,
  },
];

export const categoryList = ["Medical Supplies", "Medications", "Equipment"];

export const supplierList = [
  "MedSupply Co.",
  "PharmaCorp",
  "MedTech Solutions",
  "SafetyFirst Ltd",
  "CleanCare Products",
];

// Helper functions for inventory calculations
export const getInventoryStats = () => {
  const currentDate = new Date();
  const thirtyDaysFromNow = new Date(
    currentDate.getTime() + 30 * 24 * 60 * 60 * 1000
  );

  return {
    totalItems: inventoryList.length,
    lowStockItems: inventoryList.filter((item) => item.status === "Low Stock")
      .length,
    outOfStockItems: inventoryList.filter(
      (item) => item.status === "Out of Stock"
    ).length,
    pendingOrders: inventoryList.filter((item) => item.status === "On Order")
      .length,
    expiringSoon: inventoryList.filter((item) => {
      if (!item.expirationDate) return false;
      const expirationDate = new Date(item.expirationDate);
      return (
        expirationDate <= thirtyDaysFromNow && expirationDate >= currentDate
      );
    }).length,
    totalValue: inventoryList.reduce((sum, item) => sum + item.totalValue, 0),
    lowStockValue: inventoryList
      .filter((item) => item.status === "Low Stock")
      .reduce((sum, item) => sum + item.totalValue, 0),
  };
};
