import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProfileModal from "./ProfileModal";

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
    </>
  );
};

export default HomeNavbar;
