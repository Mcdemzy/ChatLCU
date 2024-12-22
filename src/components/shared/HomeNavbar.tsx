import { useState, useRef, useEffect } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaUserSolid } from "react-icons/lia";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";

// ChatHistoryItem Component
const ChatHistoryItem = ({ title, date }: { title: string; date: string }) => (
  <div className="flex flex-col gap-1 mb-4 p-3 border rounded-md hover:bg-blue-50 cursor-pointer">
    <span className="font-semibold text-gray-700">{title}</span>
    <span className="text-sm text-gray-500">{date}</span>
  </div>
);

// Sidebar Component
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

// Profile Modal Component
const ProfileModal = ({
  isOpen,
  toggleModal,
}: {
  isOpen: boolean;
  toggleModal: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[80%] h-[80%] bg-white rounded-lg shadow-lg overflow-hidden relative">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
          <h2 className="text-2xl font-semibold">My Profile</h2>
          <AiOutlineClose
            size={24}
            className="cursor-pointer"
            onClick={toggleModal}
            aria-label="Close profile modal"
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto h-[calc(100%-64px)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Picture */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-md border-4 border-blue-500">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => alert("Change Profile Picture")}
              >
                Change Picture
              </button>
            </div>

            {/* User Details */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value="John Doe"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    value="johndoe@example.com"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value="+123 456 7890"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Address
                  </label>
                  <input
                    type="text"
                    value="123 Street Name, City, Country"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Account Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => alert("Change Password")}
              >
                Change Password
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                onClick={() => alert("Deactivate Account")}
              >
                Deactivate Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProfileDropdown Component
const ProfileDropdown = ({
  toggleProfileModal,
}: {
  toggleProfileModal: () => void;
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Circle */}
      <div
        className="text-white w-8 h-8 rounded-full flex items-center justify-center bg-pink-600 text-[1.25rem] cursor-pointer"
        aria-label="User profile"
        onClick={toggleDropdown}
      >
        A
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
          <button
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => {
              toggleProfileModal();
              setDropdownOpen(false);
            }}
          >
            <LiaUserSolid size={20} />
            My Profile
          </button>
          <button
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => alert("Settings")}
          >
            <IoSettingsOutline size={20} />
            Settings
          </button>
          <Link
            to="/logout"
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
            onClick={() => alert("Logged Out")}
          >
            <TbLogout size={20} />
            Log Out
          </Link>
        </div>
      )}
    </div>
  );
};

// Navbar Component
const Navbar = ({
  toggleSidebar,
  toggleProfileModal,
}: {
  toggleSidebar: () => void;
  toggleProfileModal: () => void;
}) => (
  <>
    {/* Desktop Navbar */}
    <nav className="w-full bg-white shadow-md px-6 py-4 hidden md:flex justify-between items-center">
      <div className="flex items-center text-2xl font-bold gap-4 text-blue-600">
        <CgMenuLeftAlt
          size={28}
          className="cursor-pointer mt-1"
          aria-label="Collapse sidebar"
          onClick={toggleSidebar}
        />
        <div className="text-2xl font-bold">ChatLCU</div>
      </div>
      {/* Profile Dropdown */}
      <ProfileDropdown toggleProfileModal={toggleProfileModal} />
    </nav>

    {/* Mobile Navbar */}
    <nav className="w-full bg-white shadow-md px-6 py-4 md:hidden flex justify-between items-center">
      <button aria-label="Open menu" onClick={toggleSidebar}>
        <CgMenuLeftAlt size={28} className="text-blue-600 cursor-pointer" />
      </button>
      <div className="text-2xl font-bold text-blue-600">ChatLCU</div>
      {/* Profile Dropdown */}
      <ProfileDropdown toggleProfileModal={toggleProfileModal} />
    </nav>
  </>
);

const HomeNavbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const chatHistory = [
    { id: 1, title: "Chat with ChatLCU", date: "Dec 20, 2024" },
    { id: 2, title: "Library Inquiry", date: "Dec 19, 2024" },
    { id: 3, title: "Course Assistance", date: "Dec 18, 2024" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileModal = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <>
      <main>
        <Navbar
          toggleSidebar={toggleSidebar}
          toggleProfileModal={toggleProfileModal}
        />
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          chatHistory={chatHistory}
        />
        <ProfileModal isOpen={isProfileOpen} toggleModal={toggleProfileModal} />
      </main>
    </>
  );
};

export default HomeNavbar;
