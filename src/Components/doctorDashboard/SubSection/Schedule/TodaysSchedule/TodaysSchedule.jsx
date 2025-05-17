import React from "react";
import Status from "@/Components/UI/Status/Status";
import Button from "@/Components/UI/Button/Button";

const TodaysSchedule = () => {
    const appointments = [
        {
            photo: "",
            name: "Emma Thompson",
            time: "09:00 AM",
            duration: "30 min",
            type: "Check-up",
            variant: "check_up"
        },
        {
            name: "Michael Chen",
            time: "10:15 AM",
            duration: "45 min",
            type: "Follow-up",
            variant: "follow_up"
        },
        {
            name: "Sophia Rodriguez",
            time: "11:30 AM",
            duration: "60 min",
            type: "Consultation",
        },
        {
            name: "James Wilson",
            time: "01:45 PM",
            duration: "30 min",
            type: "Urgent",
            variant: "urgent"
        },
        {
            name: "Olivia Parker",
            time: "03:00 PM",
            duration: "45 min",
            type: "Check-up",
            variant: "check_up"
        }
    ];

    return (
        <div className="w-full max-w-xl px-2 sm:px-2 lg:px-8">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Today's Schedule
                </h1>
                <p className="text-gray-600 mt-4">
                    You have 12 appointments scheduled for today
                </p>
            </div>

            <div className="space-y-4">
                {appointments.map((appointment, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 border rounded-md p-2">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="font-semibold text-gray-800">{appointment.name}</h3>
                                <div className="flex items-center mt-1">
                                    <input
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <span className="text-gray-600">
                                        {appointment.time} • {appointment.duration}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-2 flex justify-center items-center">
                                <Status variant={appointment.variant} text={appointment.type}></Status>
                                <Button text="View">
                                    View
                                </Button>

                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodaysSchedule;