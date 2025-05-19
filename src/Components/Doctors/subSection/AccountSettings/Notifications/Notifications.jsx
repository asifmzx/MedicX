import { Switch } from "antd";

const Notifications = () => {
  const notifications = [
    {
      title: "Appointment Notifications",
      description: "Receive notifications for new appointments",
    },
    {
      title: "Patient Updates",
      description: "Receive notifications for patient updates",
    },
    {
      title: "System Notifications",
      description: "Receive system and administrative notifications",
    },
  ];
  return (
    <div>
      <div className="pb-4">
        <h1 className="text-xl md:text-xl font-semibold tracking-tight mb-1">
          Notifications
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className=" col-span-2">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 rounded-md"
            >
              <div>
                <p className="font-medium text-gray-800">
                  {notification.title}
                </p>
                <p className="text-sm text-gray-500">
                  {notification.description}
                </p>
              </div>
              <Switch />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
