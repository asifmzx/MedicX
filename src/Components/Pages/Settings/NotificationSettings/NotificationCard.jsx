import React from "react";
import {
  HiOutlineMail,
  HiOutlineChatAlt2,
  HiOutlineCalendar,
} from "react-icons/hi";
import { notificationTemplates } from "./NotificationSettingsData";

const NotificationCard = () => {
  const emailTemplates = notificationTemplates.emailTemplates;
  const smsTemplates = notificationTemplates.smsTemplates;
  const scheduledNotifications = notificationTemplates.scheduledNotifications;

  const ActiveCount = (data) =>
    data.filter((item) => item.status === "Active").length;

  const cards = [
    {
      title: "Email Templates",
      total: emailTemplates.length,
      active: ActiveCount(emailTemplates),
      icon: <HiOutlineMail size={30} />,
    },
    {
      title: "SMS Templates",
      total: smsTemplates.length,
      active: ActiveCount(smsTemplates),
      icon: <HiOutlineChatAlt2 size={30} />,
    },
    {
      title: "Scheduled Notifications",
      total: scheduledNotifications.length,
      active: ActiveCount(scheduledNotifications),
      icon: <HiOutlineCalendar size={30} />,
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="space-y-10 rounded-lg border border-gray-300 shadow-md p-4 bg-white"
          >
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">{card.title}</p>
              {card.icon}
            </div>
            <div>
              <p className="text-4xl font-bold">{card.total}</p>
              <p className="text-gray-500">{card.active} active templates</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCard;
