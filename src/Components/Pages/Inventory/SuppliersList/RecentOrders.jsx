import React from "react";

const RecentOrders = () => {
  const orders = [
    {
      id: 1,
      supplier: "MedPlus Supplies",
      orderId: "#ORD4872",
      date: "Apr 18, 2023",
      amount: "$1,245.00",
      items: "12 items",
      status: "Delivered",
      statusClass: "delivered",
    },
    {
      id: 2,
      supplier: "PharmaTech Inc.",
      orderId: "#ORD4865",
      date: "Apr 15, 2023",
      amount: "$876.50",
      items: "8 items",
      status: "Shipped",
      statusClass: "shipped",
    },
    {
      id: 3,
      supplier: "MedEquip Solutions",
      orderId: "#ORD4861",
      date: "Apr 12, 2023",
      amount: "$2,340.75",
      items: "5 items",
      status: "Processing",
      statusClass: "processing",
    },
    {
      id: 4,
      supplier: "Health Supply Co.",
      orderId: "#ORD4858",
      date: "Apr 10, 2023",
      amount: "$567.25",
      items: "15 items",
      status: "Delivered",
      statusClass: "delivered",
    },
  ];

  const getStatusStyles = (statusClass) => {
    switch (statusClass) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">
          Recent Orders
        </h2>
        <p className="text-sm text-gray-500">
          Your most recent supplier orders
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex justify-between items-start p-4 border border-gray-200 rounded-lg bg-gray-20 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {order.supplier}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-medium">Order {order.orderId}</span>
                <span className="mx-2">•</span>
                <span>{order.date}</span>
              </p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(
                  order.statusClass
                )}`}
              >
                {order.status}
              </span>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-gray-900 mb-1">
                {order.amount}
              </div>
              <div className="text-sm text-gray-500">{order.items}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
        View All Orders
      </button>
    </div>
  );
};

export default RecentOrders;
