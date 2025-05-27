import React from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { assets } from "@/assets/index";
import { MdOutlineDateRange, MdAutorenew } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import Image from "next/image";

const RecentPrescriptions = () => {
  const patients = [
    {
      name: "Emma Thompson",
      time: "09:00 AM",
      day: "Today",
      prescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellat, consectetur adipisicing elit. Alias, repellat, repellat, repellat, consectetur adipisicing elit. Alias, repellat consectetur adipisicing elit. Alias, repellat",
      img: assets.prof,
    },
    {
      name: "Michael Chen",
      time: "10:15 AM",
      day: "Today",
      prescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellat.",
      img: assets.prof,
    },
    {
      name: "Sophia Rodriguez",
      time: "11:30 AM",
      day: "Today",
      prescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellat.",
      img: assets.prof,
    },
    {
      name: "James Wilson",
      time: "01:45 PM",
      day: "Yesterday",
      prescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellat.",
      img: assets.prof,
    },
    {
      name: "Olivia Parker",
      time: "03:00 PM",
      day: "Yesterday",
      prescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellat.",
      img: assets.prof,
    },
  ];

  return (
    <div className="w-full sm:px-2 mt-2 lg:px-8 ">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Recent Prescription
        </h1>
        <p className="text-gray-600 mt-4">Prescription you've written recently</p>
      </div>

      <div className="space-y-4 h-[120vw] md:h-[34vw] overflow-y-auto">
        {patients.map((patient, index) => (
          <div
            key={index}
            className="border border-gray-200 pb-4 rounded-md p-3 "
          >
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center gap-2">
                <div className="flex flex-row justify-center items-center gap-2">
                  <Image
                    src={patient.img}
                    width={150}
                    height={16}
                    className="border rounded-full size-10"
                    alt={patient.name}
                  />
                  <h3 className="font-semibold text-gray-800">
                    {patient.name}
                  </h3>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600 text-xs flex flex-wrap justify-center items-center gap-1">
                      <MdOutlineDateRange />
                      {patient.day}, {patient.time}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-1 flex flex-row">
                <span className="px-2 ">•</span>
                <span className="line-clamp-2 md:line-clamp-2">{patient.prescription}</span>
              </div>
              <div className="mt-2 flex flex-col-2 sm:flex-row items-center justify-end gap-2">
                <Buttonv2
                  Icon={FaRegFileAlt}
                  className="text-[15px] px-3 py-1"
                  text="View"
                />
                <Buttonv2
                  Icon={MdAutorenew}
                  className="text-[15px] px-3 py-1"
                  text="Renew"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPrescriptions;
