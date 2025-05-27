import { LuUsers } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { TfiMoney } from "react-icons/tfi";
import { LuUserRound } from "react-icons/lu";

const StatisticsCards = () => {
  const cards = [
    {
      title: "Total Patients",
      number: "2,853",
      text: "+18.2% from last month",
      icon: <LuUsers size={28} />,
      bg: "bg-gradient-to-l from-[#A6C6FB] to-[#D2E2FD]",
      color: "text-[#2563EB]",
    },
    {
      title: "New Appointments",
      number: "148",
      text: "+4.3% from yesterday",
      icon: <CiCalendar size={28} />,
      bg: "bg-gradient-to-l from-[#97E3B3] to-[#C7F0D6]",
      color: "text-[#16A360]",
    },
    {
      title: "Revenue",
      number: "$24,563",
      text: "+10.5% from last week",
      icon: <TfiMoney size={28} />,
      bg: "bg-gradient-to-l from-[#D6AEFB] to-[#E9D4FD]",
      color: "text-[#9333EA]",
    },
    {
      title: "Active Doctors",
      number: "32",
      text: "+2 new this month",
      icon: <LuUserRound size={28} />,
      bg: "bg-gradient-to-l from-[#FAD089] to-[#FDE3B9]",
      color: "text-[#D97706]",
    },
  ];

  return (
    <div>
      <p className="text-3xl font-semibold mb-4">Statistics Cards</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} p-6 rounded-xl shadow ${card.color} `}
          >
            <div className="flex justify-between items-center text-2xl font-medium mb-2">
              <p>{card.title}</p>
              <p> {card.icon}</p>
            </div>
            <div className="pt-10">
              <p className="text-3xl font-bold">{card.number}</p>
              <p className="text-sm mt-1">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsCards;
