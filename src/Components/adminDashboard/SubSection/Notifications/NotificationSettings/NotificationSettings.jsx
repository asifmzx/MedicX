import { Switch } from "antd";

const NotificationSettings = () => {
  const categories = [
    {
      title: "Appointments",
      description: "New, cancelled, and rescheduled appointments",
    },
    {
      title: "Patient Updates",
      description: "New registrations and patient status changes",
    },
    {
      title: "Staff Alerts",
      description: "Schedule changes and staff announcements",
    },
    {
      title: "Inventory Alerts",
      description: "Low stock and reorder notifications",
    },
  ];

  const methods = [
    {
      title: "Email Notifications",
      description: "Receive updates via email",
    },
    {
      title: "SMS Notifications",
      description: "Receive alerts on your phone",
    },
    {
      title: "In-App Notifications",
      description: "View alerts inside the application",
    },
    {
      title: "Push Notifications",
      description: "Receive browser or mobile push messages",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-8xl ">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">
          Notification Settings
        </h1>
        <p className="text-gray-600">Manage how you receive notifications</p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Categories Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900">
            Notification Categories
          </h2>
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex justify-between items-center  py-2 rounded-md"
              >
                <div>
                  <p className="font-medium text-gray-800">{category.title}</p>
                  <p className="text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>
                <Switch />
              </div>
            ))}
          </div>
        </div>

        {/* Methods Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900">
            Notification Methods
          </h2>
          <div className="space-y-4">
            {methods.map((method, index) => (
              <div
                key={index}
                className="flex justify-between items-center  py-2 rounded-md"
              >
                <div>
                  <p className="font-medium text-gray-800">{method.title}</p>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
                <Switch />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
