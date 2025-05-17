import React from "react";
import Status from "@/Components/UI/Status/Status";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { CiClock2 } from "react-icons/ci";
import { assets } from "@/assets/index";
import Image from "next/image";

const TodaysSchedule = () => {
  const appointments = [
    {
      photo: "",
      name: "Emma Thompson",
      time: "09:00 AM",
      duration: "30 min",
      type: "Check-up",
      variant: "check_up",
      img: assets.prof,
    },
    {
      name: "Michael Chen",
      time: "10:15 AM",
      duration: "45 min",
      type: "Follow-up",
      variant: "follow_up",
      img: assets.prof,
    },
    {
      name: "Sophia Rodriguez",
      time: "11:30 AM",
      duration: "60 min",
      type: "Consultation",
      variant: "consultation",
      img: assets.prof,
    },
    {
      name: "James Wilson",
      time: "01:45 PM",
      duration: "30 min",
      type: "Urgent",
      variant: "urgent",
      img: assets.prof,
    },
    {
      name: "Olivia Parker",
      time: "03:00 PM",
      duration: "45 min",
      type: "Check-up",
      variant: "check_up",
      img: assets.prof,
    },
  ];

  return (
    <div className="w-full sm:px-2 mt-2 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Today's Schedule
        </h1>
        <p className="text-gray-600 mt-4">
          You have 12 appointments scheduled for today
        </p>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="border border-gray-200 pb-4 rounded-md p-2 hover:bg-gray-100"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-row justify-center items-center gap-3">
                <div className="hidden sm:block">
                  <Image
                    src={appointment.img}
                    width={150}
                    height={16}
                    className="border rounded-full size-10"
                    alt={appointment.name}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {appointment.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <div className="text-[14px] ">
                      <CiClock2 />
                    </div>
                    <span className="text-gray-600 flex justify-center items-center gap-1">
                      {appointment.time} • {appointment.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex flex-col sm:flex-row items-center justify-end gap-2">
                <Status variant={appointment.variant} text={appointment.type} />
                <Buttonv2
                  className="border rounded-md border-gray-300 text-[15px] px-3 py-1"
                  text="View"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysSchedule;
