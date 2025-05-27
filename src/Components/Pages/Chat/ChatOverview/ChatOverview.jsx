import { FaPlus } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import Tab from "./Tab";
import ChatOverviewCard from "./ChatOverviewCard";

const ChatOverview = ({ onSelectChat }) => {
  return (
    <div className="bg-gray-50 p-4 border-r border-gray-300 h-screen md:h-auto sticky inset-0 z-1 md:z-1 md:inset-auto overflow-y-auto">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 pb-3">
        <div className="flex justify-between items-center">
          <div>
            
            <span className="text-2xl font-bold">Messages</span>
          </div>
          <button>
            <FaPlus size={20} />
          </button>
        </div>

        <div className="py-4">
          <SearchInput
            placeholder="Search Conversations"
            icon={AiOutlineSearch}
            inputClassName="text-sm text-gray-700 outline-none"
            wrapperClassName="flex w-full h-10"
            value={null}
          />
        </div>

        <div >
          <Tab />
        </div>
      </div>

      <div className="mt-1">
        <ChatOverviewCard onSelectChat={onSelectChat} />
      </div>
    </div>
  );
};

export default ChatOverview;
