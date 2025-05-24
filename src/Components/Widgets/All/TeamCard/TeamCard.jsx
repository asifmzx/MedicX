import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { PiChatText } from "react-icons/pi";

const TeamCard = () => {
  const team = [
    {
      img: "https://medixpro.vercel.app/medical-professional-profile.png",
      name: "Dr. Jennifer Wilson",
      designation: "Chief of Cardiology",
      mail: <AiOutlineMail size={30} />,
      phone: <FiPhone size={30} />,
      message: <PiChatText size={30} />,
      patient: "248",
      xp: "15 years",
      rating: "4.9",
    },
    {
      img: "https://medixpro.vercel.app/thoughtful-artist.png",
      name: "Dr. Michael Chen",
      designation: "Neurosurgeon",
      mail: <AiOutlineMail size={30} />,
      phone: <FiPhone size={30} />,
      message: <PiChatText size={30} />,
      patient: "187",
      xp: "2 years",
      rating: "4.8",
    },
    {
      img: "https://medixpro.vercel.app/contemplative-artist.png",
      name: "Dr. Sarah Johnson",
      designation: "Pediatrician",
      mail: <AiOutlineMail size={30} />,
      phone: <FiPhone size={30} />,
      message: <PiChatText size={30} />,
      patient: "312",
      xp: "8 years",
      rating: "4.7",
    },
  ];

  return (
    <div className="py-4 ">
      <div className="pb-4">
        <p className="text-2xl font-semibold mb-1">Team Cards</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-300 rounded-lg "
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 relative rounded-full overflow-hidden py-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="pt-4 text-center">
                <p className="font-bold text-2xl mt-2">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.designation}</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-4 mt-16 mb-8 text-xl ">
              <span>{item.mail}</span>
              <span>{item.phone}</span>
              <span>{item.message}</span>
            </div>
            <div className="grid grid-cols-2 gap-y-2 mt-2 text-md">
              <span className="font-semibold text-left">Patients:</span>
              <span className="text-right ">{item.patient}</span>
              <span className="font-semibold text-left">Experience:</span>
              <span className="text-right">{item.xp}</span>
              <span className="font-semibold text-left">Rating:</span>
              <span className="text-right">{item.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
