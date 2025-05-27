import React from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";

const messages = [
    {
        sender: "Dr. Johnson",
        time: "2 hours ago",
        content: "Your recent test results look good. Let’s discuss them at your next appointment.",
        isNew: true,
    },
    {
        sender: "Nurse Williams",
        time: "Yesterday",
        content: "Just a reminder to bring your medication list to your appointment tomorrow.",
        isNew: false,
    },
];

const RecentMessages = () => {
    return (
        <div className="bg-white shadow-sm p-4 rounded-xl w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Recent Messages</h2>
            <p className="text-sm text-gray-600 mb-4">Communications from your care team</p>

            {messages.map((msg, idx) => (
                <div key={idx} className="border border-gray-200 p-3 rounded-xl mb-3">
                    <div className="flex gap-4 items-center mb-1">
                        <h3 className="font-medium text-gray-800">{msg.sender}</h3>
                        {msg.isNew && (
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                                New
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-gray-500">{msg.time}</p>
                    <p className="text-sm text-gray-700 mt-2">{msg.content}</p>
                </div>
            ))}
            <Buttonv2 text="View All Messages" variant="primary_main" className="w-full flex justify-center items-center border border-gray-300 rounded-md p-2 font-semibold text-gray-600">
            </Buttonv2>
        </div>
    );
};

export default RecentMessages;
