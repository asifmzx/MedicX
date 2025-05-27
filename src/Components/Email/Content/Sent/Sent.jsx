import React from "react";
import { Checkbox } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { LuArchive } from "react-icons/lu";
import { mail } from "../../data";

const Sent = () => {
  const sentMails = mail.filter((item) => item.isSent);

  return (
    <div>
      {sentMails.map((item, index) => (
        <div key={index} className="border-b border-gray-300 p-2 group">
          <div className="grid grid-cols-7 gap-x-6 items-center max-w-full">
            <div className="col-span-5 flex items-start gap-x-2">
              <Checkbox />
              <div className="overflow-hidden">
                <p className="text-md font-semibold truncate">{item.from}</p>
                <p className="text-md font-semibold truncate">{item.subject}</p>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {item.text}
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <p className="text-gray-500 text-xs whitespace-nowrap">
                {item.date}
              </p>
            </div>

            <div className="col-span-1">
              <div className="flex items-center px-4 text-gray-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 gap-x-3">
                {item.isStarred ? (
                  <IoIosStar className="text-yellow-500" size={24} />
                ) : (
                  <IoIosStarOutline size={24} />
                )}
                <LuArchive size={24} />
                <AiOutlineDelete size={24} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sent;
