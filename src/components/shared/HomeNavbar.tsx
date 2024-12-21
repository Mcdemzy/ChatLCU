import { useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const HomeNavbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Sample chat history (replace this with dynamic data if needed)
  const chatHistory = [
    { id: 1, title: "Chat with ChatLCU", date: "Dec 20, 2024" },
    { id: 2, title: "Library Inquiry", date: "Dec 19, 2024" },
    { id: 3, title: "Course Assistance", date: "Dec 18, 2024" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <main>
        {/* Desktop Navbar */}
        <nav className="w-full bg-white shadow-md px-6 py-4 hidden md:flex justify-between items-center animate-slide-down">
          <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
            <TbLayoutSidebarRightCollapse
              size={28}
              className="mt-[3px] cursor-pointer"
              aria-label="Collapse sidebar"
              onClick={toggleSidebar}
            />
            <HiOutlinePencilSquare
              className="cursor-pointer"
              size={28}
              aria-label="Logo"
            />
            <div className="text-2xl font-bold ml-4">ChatLCU</div>
          </div>
          <div
            className="text-white w-8 h-8 rounded-full flex items-center justify-center bg-pink-600 text-[1.25rem] cursor-pointer"
            aria-label="User profile"
          >
            A
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav className="w-full bg-white shadow-md px-6 py-4 md:hidden flex items-center justify-between animate-slide-down">
          <button aria-label="Open menu" onClick={toggleSidebar}>
            <CgMenuLeftAlt
              size={28}
              className="text-2xl font-bold text-blue-600 cursor-pointer"
            />
          </button>
          <div className="text-2xl font-bold text-blue-600">ChatLCU</div>
          <button aria-label="Open editor">
            <HiOutlinePencilSquare
              size={28}
              className="text-2xl font-bold text-blue-600 cursor-pointer"
            />
          </button>
        </nav>
      </main>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white shadow-md">
          <h1 className="text-xl font-bold">Chat History</h1>
          <AiOutlineClose
            size={24}
            className="cursor-pointer"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          />
        </div>

        {/* New Chat Button */}
        <button
          className="w-full px-6 py-4 text-left text-white bg-blue-500 hover:bg-blue-600 transition rounded-none"
          onClick={() => alert("New chat started!")} // Placeholder action
        >
          + New Chat
        </button>

        {/* Chat History Items */}
        <div className="p-4 overflow-y-auto h-[calc(100%-110px)]">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className="flex flex-col gap-1 mb-4 p-3 border rounded-md hover:bg-blue-50 cursor-pointer"
            >
              <span className="font-semibold text-gray-700">{chat.title}</span>
              <span className="text-sm text-gray-500">{chat.date}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Backdrop for mobile view */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default HomeNavbar;
