import React from 'react';

const DailySchedule = () => {
  const appointments = [
    { time: '9:00 AM', patient: null },
    { time: '10:00 AM', patient: null },
    {
      time: '11:00 AM',
      patient: {
        name: 'Jessica Brown',
        time: '17:00 - 19:00',
        type: 'Emergency',
        doctor: 'Dr. Lisa Pikel'
      }
    },
    { time: '12:00 PM', patient: null },
    { time: '13:00 PM', patient: null },
    { time: '14:00 PM', patient: null },
    { time: '15:00 PM', patient: null },
    { time: '16:00 PM', patient: null },
    { time: '17:00 PM', patient: null },
  ];

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Daily Schedule</h1>

      <div className="mb-4">
        <p className="text-gray-600">Schedule for May 22, 2025 + All Doctors</p>
      </div>

      <div className="space-y-6">
        {appointments.map((appointment, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{appointment.time}</h2>

            {appointment.patient ? (
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-medium text-gray-800">{appointment.patient.name}</p>
                <p className="text-sm text-gray-600">
                  {appointment.patient.time} • {appointment.patient.type}
                </p>
                <p className="text-sm text-gray-500 mt-1">{appointment.patient.doctor}</p>
              </div>
            ) : (
              <p className="text-gray-400 italic">No appointments</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailySchedule;