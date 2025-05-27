import React from "react";
import { GoPerson } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";

const pastAppointments = [
  {
    doctor: "Dr. Patel",
    specialty: "Internal Medicine",
    date: "April 30, 2023",
    time: "9:00 AM",
    type: "Blood Work",
  },
  {
    doctor: "Dr. Garcia",
    specialty: "Dentistry",
    date: "March 15, 2023",
    time: "11:30 AM",
    type: "Dental Cleaning",
  },
];

const Past = () => {
  return (
    <div className="bg-white w-full px-4 py-2">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Past</h2>
      {pastAppointments.map((appt, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-md p-2 mb-2 bg-gray-50"
        >
          <div className="flex items-start gap-3 px-2 md:px-2 ">
            <div
              className={`rounded-full p-3 items-center justify-center hidden sm:flex bg-gray-200`}
            >
              <CiCalendar className="text-2xl text-gray-500" />
            </div>
            <div className="flex flex-col w-full">
              <h3 className="font-medium text-gray-600 text-base">
                {appt.type}
              </h3>
              <p className="text-gray-400 text-sm">
                {appt.date} • {appt.time}
              </p>
              <div className="flex flex-col md:flex-row sm:items-center justify-between gap-2 mt-1">
                <div className="flex items-center text-sm  w-full text-gray-400 mt-1">
                  <GoPerson className="mr-2" />
                  <span>
                    {appt.doctor} ({appt.specialty})
                  </span>
                </div>
                <div className="flex flex-col sm:flex-strech sm:items-center justify-between gap-2 mt-2">
                  <div className="flex flex-row items-stretch gap-1 md:gap-2 md:w-auto">
                    <Buttonv2
                      text="View Results"
                      className="text-md md:text-sm flex-1 h-[30px] w-[120px] border border-gray-300"
                    />
                    <Buttonv2
                      text="Notes"
                      className="text-md md:text-sm flex-1 h-[30px] border border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Past;
