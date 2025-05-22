import React from "react";
import Calender from "./Calender/Calender";
import Schedule from "./Schedule/Schedule";

const sampleAppointments = [
  {
    id: '1',
    time: '2025-05-22T10:00:00',
    patientName: 'John Doe',
    doctor: 'Dr. Smith',
    status: 'scheduled'
  }
];

const sampleDoctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams'];

const DoctorSchedule = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        <div className="bg-gray-100 md:col-span-1">
          <Calender samplesppointments={sampleAppointments} sampledoctors={sampleDoctors} className="w-full h-full" />
        </div>
        <div className="bg-gray-200 md:col-span-3">
          <Schedule className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default DoctorSchedule;
