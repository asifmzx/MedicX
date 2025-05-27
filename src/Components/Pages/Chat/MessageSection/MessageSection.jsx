import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { MdOutlineErrorOutline } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { messages } from "../ChatOverview/chatData";
import { FiPaperclip, FiSmile, FiSend } from "react-icons/fi";
import BackButton from "@/Components/UI/Button/BackButton";

const MessageSection = ({ selectedUser }) => {
  if (!selectedUser)
    return (
      <div className="flex justify-center items-center h-full">Start chat</div>
    );

  return (
    <div className="flex flex-col  max-h-[915px]  rounded-md">
      {/* Header */}

      <div className="shrink-0 p-4 bg-gray-50 border-b border-gray-300">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-5 items-center relative">
            <p
              className={`absolute bottom-0 left-7 ${
                selectedUser.isActive ? "text-green-500" : "text-gray-400"
              }`}
            >
              <GoDotFill size={20} />
            </p>
            <img
              src={selectedUser.img}
              alt={selectedUser.name}
              className="w-10 h-10 rounded-full"
            />
            <h2 className="font-bold text-xl mb-2">{selectedUser.name}</h2>
          </div>
          <div className="flex items-center space-x-3">
            <IoCallOutline size={20} />
            <IoVideocamOutline size={20} />
            <MdOutlineErrorOutline size={20} />
            <BsThreeDotsVertical size={20} />
          </div>
        </div>
      </div>

      {/* content */}
      <div className="flex-1  px-4 py-9 space-y-4 ">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.isSender ? "justify-start" : "justify-end"}`}
          >
            <div className="flex gap-x-2 max-w-md">
              {msg.isSender && (
                <img
                  src={selectedUser.img}
                  alt={selectedUser.name}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div
                className={`rounded-lg p-3  ${
                  msg.isSender
                    ? "bg-white  text-gray-900"
                    : "bg-gray-300 text-gray-900"
                }`}
              >
                <div>{msg.text}</div>
                {msg.time && (
                  <div className="text-xs text-gray-600 mt-1 text-right">
                    {msg.time}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="shrink-0 p-2 bg-gray-100 border-t border-gray-300">
        <div className="flex items-center bg-gray-100 rounded-md">
          <button className="text-gray-500 hover:text-gray-700 p-2">
            <FiPaperclip size={20} />
          </button>

          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <button className="text-gray-500 hover:text-gray-700 p-2">
            <FiSmile size={20} />
          </button>

          <button className="bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-md ml-2">
            <FiSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
