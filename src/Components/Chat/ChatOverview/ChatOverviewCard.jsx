"use client";
import { chatList } from "./chatData";
import { GoDotFill } from "react-icons/go";

const ChatOverviewCard = ({ onSelectChat }) => {
  return (
    <div className="space-y-4 py-5 ">
      {chatList.map((chat, index) => {
        const user = Object.values(chat)[0];
        return (
          <div
            key={index}
            className="hover:bg-gray-100 p-2 cursor-pointer"
            onClick={() => onSelectChat(user)}
          >
            <div className="flex gap-x-2">
              <div className="flex items-center relative">
                <p
                  className={`absolute bottom-2 left-7 ${
                    user.isActive ? "text-green-500" : "text-gray-400"
                  }`}
                >
                  <GoDotFill size={20} />
                </p>
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ps-4">
                  <p className="font-semibold text-sm">{user.name}</p>
                  <p className="text-xs text-gray-500 max-w-[220px] md:max-w-[290px] overflow-hidden">
                    {user.lasText}
                  </p>
                </div>
              </div>
              <div className="text-xs text-gray-500">{user.lastUse}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatOverviewCard;
