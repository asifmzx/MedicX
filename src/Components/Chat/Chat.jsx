"use client";
import { useState } from "react";
import ChatOverview from "./ChatOverview/ChatOverview";
import MessageSection from "./MessageSection/MessageSection";


const ChatLayout = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-0 md:px-5 py-0 md:py-2 gap-y-4">
      {/* Chat List */}
      <div
        className={`${selectedUser ? "hidden" : "block"} md:block col-span-1`}
      >
        <ChatOverview onSelectChat={setSelectedUser} />
      </div>

      {/* Message Section */}
      <div
        className={`${
          selectedUser ? "block" : "hidden"
        } md:block md:col-span-2 col-span-1`}
      >
        <MessageSection selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default ChatLayout;
