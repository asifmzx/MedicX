
import { LiaCheckCircleSolid } from "react-icons/lia";
import { MdOutlineErrorOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const AlertCard = () => {
  const cards = [
    {
      title: "Appointment Confirmed",
      text: "Your appointment with Dr. Wilson has been confirmed for Monday, June 12 at 10:30 AM.",
      textColor: "#22C55E",
      bg: "#E3F5EB",
      icon: <LiaCheckCircleSolid size={24} />,
      btn1: "View Details",
      btn2: "Dismiss",
    },
    {
      title: "Prescription Expiring",
      text: "The patient portal will be unavailable for scheduled maintenance on Sunday, June 18 from 2:00 AM to 5:00 AM.",
      textColor: "#FBBF24",
      bg: "#F9F1E2",
      icon: <MdOutlineErrorOutline size={24} />,
      btn1: "Schedule Now",
      btn2: "Dismiss",
    },
    {
      title: "Payment Failed",
      text: "Your recent payment for Invoice #12345 was declined. Please update your payment information.",
      textColor: "#F89179",
      bg: "#F8E8E8",
      icon: <RxCross2 size={24} />,
      btn1: "Update Payment",
      btn2: "Contact Billing",
    },
    {
      title: "System Maintenance",
      text: "Your appointment with Dr. Wilson has been confirmed for Monday, June 12 at 10:30 AM.",
      textColor: "#84B1F8",
      bg: "#E6EEFA",
      icon: <MdOutlineErrorOutline size={24} />,
      btn1: "Learn More",
      btn2: "Dismiss",
    },
  ];

  return (
    <div>
      <div className="py-4">
        <p className="font-semibold text-2xl">Alert Cards</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border "
            style={{
              backgroundColor: card.bg,
              border: `1px solid ${card.textColor}`,
            }}
          >
            <div className="flex items-start gap-3">
              <span style={{ color: card.textColor }}>{card.icon}</span>

              <div className="flex-1">
                <p
                  className="font-semibold text-lg"
                  style={{ color: card.textColor }}
                >
                  {card.title}
                </p>
                <p className="mt-1 text-lg" style={{ color: card.textColor }}>
                  {card.text}
                </p>
                <div className="flex gap-4 mt-2 flex-wrap font-semibold">
                  <button style={{ color: card.textColor }}>{card.btn1}</button>
                  <button style={{ color: card.textColor }}>{card.btn2}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertCard;
