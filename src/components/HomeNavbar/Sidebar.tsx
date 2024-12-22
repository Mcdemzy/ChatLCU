import { AiOutlineClose } from "react-icons/ai";
import ChatHistoryItem from "./ChatHistoryItem";

const Sidebar = ({
  isOpen,
  toggleSidebar,
  chatHistory,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
  chatHistory: { id: number; title: string; date: string }[];
}) => (
  <>
    <aside
      className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
        <h1 className="text-xl font-bold">Chat History</h1>
        <AiOutlineClose
          size={24}
          className="cursor-pointer"
          onClick={toggleSidebar}
          aria-label="Close sidebar"
        />
      </div>

      <button
        className="w-full px-6 py-4 text-left text-white bg-blue-500 hover:bg-blue-600"
        onClick={() => alert("New chat started!")}
      >
        + New Chat
      </button>

      <div className="p-4 overflow-y-auto h-[calc(100%-110px)]">
        {chatHistory.length > 0 ? (
          chatHistory.map((chat) => (
            <ChatHistoryItem
              key={chat.id}
              title={chat.title}
              date={chat.date}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">
            No chat history available.
          </p>
        )}
      </div>
    </aside>

    {isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={toggleSidebar}
      />
    )}
  </>
);

export default Sidebar;
