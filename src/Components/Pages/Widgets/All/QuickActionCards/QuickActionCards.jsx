import { IoCalendarClearOutline } from "react-icons/io5";
import { BsFileEarmarkText } from "react-icons/bs";
import { PiPillLight, PiChatText } from "react-icons/pi";

const QuickActionCards = () => {
  const cards = [
    {
      title: "Message Doctor",
      text: "Send a message to your doctor",
      Color: "#2563EB",
      bg: "#E6EEFA",
      icon: <IoCalendarClearOutline size={24} />,
      btn1: "Book Now",
      iconBg: "#C4D8F9",
    },
    {
      title: "Schedule Appointment",
      text: "Book a new appointment with a doctor",
      Color: "#16A34A",
      bg: "#E3F5EB",
      icon: <BsFileEarmarkText size={24} />,
      btn1: "Request",
      iconBg: "#BDEBCF",
    },
    {
      title: "Refill Prescription",
      text: "Request a prescription refill",
      Color: "#9333EA",
      bg: "#F1EAFA",
      icon: <PiPillLight size={24} />,
      btn1: "Refill",
      iconBg: "#E3CCF9",
    },
    {
      title: "Request Records",
      text: "Request your medical records",
      Color: "#D97706",
      bg: "#F9F1E2",
      icon: <PiChatText size={24} />,
      btn1: "Message",
      iconBg: "#F8E1B7",
    },
  ];

  return (
    <div className="py-4">
      <p className="text-3xl font-semibold py-4">Quick Actions</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-6 rounded-lg text-center"
            style={{ backgroundColor: card.bg }}
          >
            <div className="flex justify-center mb-4 ">
              <p
                className="inline-block p-3 rounded-full"
                style={{ backgroundColor: card.iconBg }}
              >
                <span style={{ color: card.Color }}>{card.icon}</span>
              </p>
            </div>
            <p
              className="font-semibold text-xl mb-1"
              style={{ color: card.Color }}
            >
              {card.title}
            </p>
            <p className="text-lg  mb-" style={{ color: card.Color }}>
              {card.text}
            </p>
            <button
              className="px-4 py-2 rounded-md font-medium text-white"
              style={{ backgroundColor: card.Color }}
            >
              {card.btn1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActionCards;
