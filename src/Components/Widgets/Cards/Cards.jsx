"use client";
import Button from "@/Components/UI/Button/Button";
import { AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { PiChatText } from "react-icons/pi";
import { LiaFileAltSolid } from "react-icons/lia";
import { LuMessageSquare } from "react-icons/lu";
import { IoIosLink } from "react-icons/io";
import Status from "@/Components/UI/Status/Status";

const patient = [
  {
    doctor: {
      img: "https://medixpro.vercel.app/medical-professional-profile.png",
      name: "Dr. Jennifer Wilson",
      designation: "Chief of Cardiology",
      mailIcon: <AiOutlineMail size={30} />,
      phoneIcon: <FiPhone size={30} />,
      messageIcon: <PiChatText size={30} />,
      patient: "248",
      xp: "15 years",
      rating: "4.9",
      btn: (
        <Button
          variant="primary"
          text="View Profile"
          className="border border-gray-200 w-full"
        />
      ),
    },
  },
  {
    patient: {
      img: "https://medixpro.vercel.app/abstract-jr.png",
      name: "John Doe",
      pId: "P-12345",
      age: "42 years",
      Gender: "Male",
      bg: "O+",
      doctor: "Dr. Wilson",
      date: "June 15, 2023",
      time: "10:30 AM",
      status: "Active",
      btn1: (
        <Button
          variant="primary"
          text="Records"
          className="border border-gray-200 w-full"
          Icon={LiaFileAltSolid}
        />
      ),
      btn2: (
        <Button
          variant="secondary"
          text="Contact"
          className="border border-gray-200 w-full"
          Icon={LuMessageSquare}
        />
      ),
    },
  },
  {
    appointment: {
      img: "https://medixpro.vercel.app/medical-professional-profile.png",
      name: "Dr. Jennifer Wilson",
      designation: "Chief of Cardiology",
      day: "Monday",
      date: "June 12, 2023",
      time: "10:30 AM - 11:15 AM",
      location: "Main Clinic, Room 305",
      reason: "Follow-up consultation for hypertension",
      status: "Confirmed",
      btn1: (
        <Button
          variant="primary"
          text="Reschedule"
          className="border border-gray-200 w-full"
        />
      ),
      btn2: (
        <Button
          variant="secondary"
          text="Cancel"
          className="border border-gray-200 bg-red-500 text-white w-full"
          Icon={LuMessageSquare}
        />
      ),
    },
  },
  {
    book: {
      title: "Message Doctor",
      text: "Send a message to your doctor",
      Color: "#2563EB",
      bg: "#E6EEFA",
      btn1: "Book Now",
      iconBg: "#C4D8F9",
      icon: <IoIosLink size={24} />,
    },
  },
  {
    record: {
      diagnosis: "Essential (primary) hypertension",
      allergies: "Penicillin",
      update: "June 5, 2023",
      medications: ["Lisinopril 10mg daily", "Amlodipine 5mg daily"],
      test: ["Blood Panel (May 28, 2023)", "ECG (May 28, 2023)"],
      btn: (
        <Button
          variant="primary"
          text="View Full Record"
          className="border border-gray-200 w-full"
          Icon={LiaFileAltSolid}
        />
      ),
    },
  },
  {
    prescription: {
      pId: "RX-78945",
      patient: "John Doe",
      prescribedBy: "Dr. Jennifer Wilson",
      date: "May 15, 2023",
      expires: "August 15, 2023",
      medicine: "Lisinopril 10mg",
      use: "Take 1 tablet by mouth once daily",
      quantity: "30",
      refill: "3",
      status: "Active",
      btn1: (
        <Button
          variant="primary"
          text="Download"
          className="border border-gray-200 w-full"
          Icon={AiOutlineDownload}
        />
      ),
      btn2: (
        <Button
          variant="secondary"
          text="Refill"
          className="border border-gray-200 w-full"
          Icon={IoIosLink}
        />
      ),
    },
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {patient.map((item, index) => {
        const [key, value] = Object.entries(item)[0];

        switch (key) {
          case "doctor":
            return (
              <div
                key={`doctor-${index}`}
                className="border border-gray-300 p-6 rounded-lg bg-white"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={value.img}
                    alt={value.name}
                    className="w-24 h-24 rounded-full"
                  />
                  <h2 className="text-3xl font-semibold py-4">{value.name}</h2>
                  <p className="text-lg font-semibold text-gray-500 pb-3">
                    {value.designation}
                  </p>
                </div>
                <div className="flex justify-center gap-x-8 items-center gap-2 my-10">
                  {value.mailIcon}
                  {value.phoneIcon}
                  {value.messageIcon}
                </div>
                <div className="grid grid-cols-2 items-center space-y-2 text-lg font-semibold pb-4">
                  <span className="text-left">Patients:</span>
                  <span className="text-right">{value.patient}</span>
                  <span className="text-left">Experience:</span>
                  <span className="text-right">{value.xp}</span>
                  <span className="text-left">Rating:</span>
                  <span className="text-right">{value.rating}</span>
                </div>
                <div> {value.btn}</div>
              </div>
            );
          case "patient":
            return (
              <div
                key={`patient-${index}`}
                className="border p-8 rounded-lg bg-white border-gray-300"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-x-5">
                    <img
                      src={value.img}
                      alt={value.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h2 className="text-3xl font-semibold">{value.name}</h2>
                      <p className="text-lg text-gray-600">
                        Patient ID: {value.pId}
                      </p>
                    </div>
                  </div>
                  <p>
                    <Status
                      type="widget"
                      variant={value.status}
                      text={value.status}
                    />
                  </p>
                </div>
                <div className="grid grid-cols-2 items-center space-y-2 text-lg font-semibold pt-16 pb-3 border-b border-gray-300">
                  <span className="text-gray-500">Age: </span>
                  <span>{value.age}</span>
                  <span className="text-gray-500">Gender:</span>
                  <span>{value.Gender}</span>
                  <span className="text-gray-500">Blood Type:</span>
                  <span> {value.bg}</span>
                  <span className="text-gray-500">Primary Doctor :</span>
                  <span>{value.doctor}</span>
                </div>
                <div className="py-4 text-lg font-semibold">
                  <p className="text-2xl py-3">Upcoming Appointment</p>
                  <span>Date:</span> <span>{value.date}</span>
                  <br />
                  <span>Time:</span> <span>{value.time}</span>
                </div>
                <div className="flex justify-center  gap-2 mt-2 ">
                  {value.btn1}
                  {value.btn2}
                </div>
              </div>
            );
          case "appointment":
            return (
              <div
                key={`appointment-${index}`}
                className="border border-gray-300 p-8 rounded-xl bg-white "
              >
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-semibold">Upcoming Appointment</p>
                  <p>
                    <Status
                      type="widget"
                      variant={value.status}
                      text={value.status}
                    />
                  </p>
                </div>
                <div className="flex items-center gap-x-2 py-8">
                  <div>
                    <img
                      src={value.img}
                      alt={value.name}
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-2xl font-semibold">{value.name}</h2>
                    <p className="font-medium text-gray-500">
                      {value.designation}
                    </p>
                  </div>
                </div>
                <div className="font-semibold space-y-4 pb-8">
                  <p>
                    {value.day}, {value.date}
                  </p>
                  <p>Time: {value.time}</p>
                  <p>Location: {value.location}</p>
                </div>
                <div className="text-xl font-semibold space-y-2 pb-6">
                  <p>Reason for Visit</p>
                  <p className=" text-gray-500">{value.reason}</p>
                </div>
                <div className="flex gap-2 mt-2">
                  {value.btn1}
                  {value.btn2}
                </div>
              </div>
            );
          case "book":
            return (
              <div
                key={`book-${index}`}
                className="flex flex-col items-center justify-center text-gray-500 p-8 text-center rounded-xl "
                style={{ backgroundColor: value.bg }}
              >
                {value.icon && (
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
                    style={{ backgroundColor: value.iconBg }}
                  >
                    {value.icon}
                  </div>
                )}
                <h2
                  className="text-2xl font-semibold mb-2"
                  style={{ color: value.Color }}
                >
                  {value.title}
                </h2>
                <p className="text-xl mb-4">{value.text}</p>
                <Button
                  variant="primary"
                  text={value.btn1}
                  className="w-fit  bg-blue-500 hover:bg-blue-700  text-white"
                />
              </div>
            );

          case "record":
            return (
              <div
                key={`record-${index}`}
                className="border border-gray-300 bg-white p-8 rounded-xl"
              >
                <div className="space-y-3">
                  <p className="text-3xl font-semibold">Medical Record</p>
                  <p className="text-xl font-semibold text-gray-500">
                    Last Updated: {value.update}
                  </p>
                </div>
                <div className="text-lg font-semibold space-y-2 pt-3">
                  <div>
                    <h2>Diagnosis: </h2>
                    <p className="text-gray-600">{value.diagnosis}</p>
                  </div>
                  <p>Allergies: {value.allergies}</p>
                  <p>Medications:</p>
                  <p>
                    {value.medications.map((medication, index) => (
                      <p key={index} className="text-gray-600">
                        {medication}
                      </p>
                    ))}
                  </p>
                  <p>Tests:</p>
                  {value.test.map((text, index) => (
                    <p key={index} className="text-gray-600">
                      {text}
                    </p>
                  ))}
                </div>

                <div className="mt-2">{value.btn}</div>
              </div>
            );
          case "prescription":
            return (
              <div
                key={`prescription-${index}`}
                className=" p-8 rounded-xl bg-white border border-gray-300"
              >
                <div className="flex justify-between items-center pb-4 ">
                  <div>
                    <p className="text-3xl font-semibold">Prescription</p>
                    <h2 className="text-xl font-semibold text-gray-500">
                      Prescription ID: {value.pId}
                    </h2>
                  </div>
                  <p>
                    <Status
                      type="widget"
                      variant={value.status}
                      text={value.status}
                    />
                  </p>
                </div>
                <div className="pt-4 pb-3 space-y-2 text-lg font-semibold grid grid-cols-2 items-center border-b border-gray-300">
                  <p className="text-xl font-semibold text-gray-500">
                    Patient:
                  </p>
                  <p> {value.patient}</p>
                  <p className="text-xl font-semibold text-gray-500">
                    Prescribed By:
                  </p>
                  <p>{value.prescribedBy}</p>
                  <p className="text-xl font-semibold text-gray-500">Date: </p>
                  <p>{value.date}</p>
                  <p className="text-xl font-semibold text-gray-500">
                    Expires:
                  </p>
                  <p>{value.expires}</p>
                </div>
                <div className="pt-2">
                  <p className="text-2xl font-semibold pb-2">Medications</p>
                  <p className="text-lg font-semibold">{value.medicine}</p>
                  <p className="text-lg font-semibold text-gray-500">
                    {value.use}
                  </p>
                  <p className="text-lg font-semibold text-gray-500">
                    <span>Quantity:{value.quantity},</span>
                    <span>Refills:{value.refill}</span>
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  {value.btn1}
                  {value.btn2}
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Cards;
