import React from "react";
import { Link } from "react-router-dom";
import ChatInputBox from "./shared/ChatInputBox";

const HomeDemo: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col animate-fade-in">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center animate-slide-down">
        <div className="text-2xl font-bold text-blue-600">ChatLCU</div>
        <div className="flex">
          <Link
            to="/signup"
            className="text-gray-600 hover:text-blue-600 px-4 py-2 transition-colors hidden md:flex"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            Log in
          </Link>
        </div>
      </nav>

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
      <footer className="w-full text-gray-400 py-6 mt-auto text-[.75rem] md:text-[1rem] animate-fade-up-delay">
        <div className="text-center">
          <p>
            By using ChatLCU, you agree to our{" "}
            <Link to="#" className="text-blue-400 hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-blue-400 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} ChatLCU. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomeDemo;