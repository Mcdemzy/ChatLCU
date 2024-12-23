import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatInputBox from "../components/shared/ChatInputBox";
import DemoNavbar from "../components/shared/DemoNavbar";
import Footer from "../components/shared/Footer";
import { isAuthenticated } from "../utils/auth";

const HomeDemo: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/home/chat", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col animate-fade-in">
      {/* Navbar */}
      <DemoNavbar />
      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center px-6 animate-fade-up">
        <h1 className="text-[1.875rem] md:text-4xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">ChatLCU</span>
        </h1>
        <p className="text-[.875rem] md:text-[1rem] text-gray-600 max-w-2xl mb-8">
          Your personalized LCU AI-powered assistant.
        </p>

        {/* Chat Input Box */}
        <ChatInputBox />

        <div className="flex flex-wrap justify-center gap-4 mt-6 animate-fade-up-delay">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
            Create Image
          </button>
          <button className="px-5 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-all">
            Summarize Text
          </button>
        </div>
      </header>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeDemo;
