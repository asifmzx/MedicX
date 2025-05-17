import React from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { assets } from "@/assets/index";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";

const RecentPatientNotes = () => {
  const patients = [
    {
      name: "Emma Thompson",
      time: "09:00 AM",
      day: "Today",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellat,consectetur adipisicing elit. Alias, repellat.",
      img: assets.prof,
    },
    {
      name: "Michael Chen",
      time: "10:15 AM",
      day: "Today",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellat.",
      img: assets.prof,
    },
    {
      name: "Sophia Rodriguez",
      time: "11:30 AM",
      day: "Today",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellat.",
      img: assets.prof,
    },
    {
      name: "James Wilson",
      time: "01:45 PM",
      day: "Yesterday",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellat.",
      img: assets.prof,
    },
    {
      name: "Olivia Parker",
      time: "03:00 PM",
      day: "Yesterday",
      note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellat.",
      img: assets.prof,
    },
  ];

  return (
    <div className="w-full sm:px-2 mt-2 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Recent Patient Notes
        </h1>
        <p className="text-gray-600 mt-4">Your latest clinical notes</p>
        <Buttonv2
          Icon={FaPlus}
          className="border rounded-md border-gray-300 text-[15px] px-3 py-1 mt-4"
          text="New Note"
        />
      </div>

      <div className="space-y-4">
        {patients.map((patient, index) => (
          <div
            key={index}
            className="border border-gray-200 pb-4 rounded-md p-2"
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
                    <span className="text-gray-600 text-[14px] flex flex-wrap justify-center items-center gap-1">
                      <MdOutlineDateRange />
                      {patient.day}, {patient.time}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-1">{patient.note}</div>
              <div className="mt-2 flex flex-col sm:flex-row items-center justify-end gap-2">
                <Buttonv2
                  variant="editnote"
                  Icon={FaEdit}
                  className="text-[15px] px-3 py-1"
                  text="Edit Note"
                />
                <Buttonv2
                  variant="deletenote"
                  Icon={RiDeleteBin6Line}
                  className="text-[15px] px-3 py-1"
                  text="Delete Note"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPatientNotes;
