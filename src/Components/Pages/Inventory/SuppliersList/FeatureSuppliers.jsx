import React from "react";

const FeatureSuppliers = () => {
  const suppliers = [
    {
      id: 1,
      name: "MedPlus Supplies",
      description:
        "Leading provider of high-quality medical supplies and equipment for healthcare facilities.",
      contact: {
        person: "Sarah Johnson",
        phone: "(555) 123-4567",
        email: "contact@medplus.com",
        location: "Chicago, IL",
      },
      rating: 5,
      status: "Active",
    },
    {
      id: 2,
      name: "PharmaTech Inc.",
      description:
        "Specialized pharmaceutical supplier with a wide range of medications and healthcare products.",
      contact: {
        person: "Michael Chen",
        phone: "(555) 987-6543",
        email: "sales@pharmatech.com",
        location: "Boston, MA",
      },
      rating: 4,
      status: "Active",
    },
    {
      id: 3,
      name: "MedEquip Solutions",
      description:
        "Premium medical equipment provider specializing in diagnostic and treatment devices.",
      contact: {
        person: "David Rodriguez",
        phone: "(555) 456-7890",
        email: "info@medequip.com",
        location: "San Diego, CA",
      },
      rating: 4,
      status: "Active",
    },
    {
      id: 4,
      name: "Global Pharma Ltd.",
      description:
        "International pharmaceutical supplier with extensive inventory of medications and treatments.",
      contact: {
        person: "Emma Wilson",
        phone: "(555) 789-0123",
        email: "sales@globalpharma.com",
        location: "New York, NY",
      },
      rating: 5,
      status: "Active",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Featured Suppliers
        </h2>
        <p className="text-gray-600">
          Your top-rated and most reliable suppliers
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {suppliers.map((supplier) => (
          <div
            key={supplier.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-8 0H3m2 0h6M9 7h6m-6 4h6m-6 4h6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {supplier.name}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {supplier.status}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {supplier.description}
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                <span>{supplier.contact.person}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>{supplier.contact.phone}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                  {supplier.contact.email}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span>{supplier.contact.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {renderStars(supplier.rating)}
              </div>

              <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium">
                <span>Visit Website</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSuppliers;
