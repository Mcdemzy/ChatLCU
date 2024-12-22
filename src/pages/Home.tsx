import React from "react";
import ChatInputBox from "../components/shared/ChatInputBox";

import Footer from "../components/shared/Footer";
import HomeNavbar from "../components/HomeNavbar/HomeNavbar";

const Home: React.FC = () => {
  return (
    <div className="flex bg-gray-50 text-gray-800 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <HomeNavbar />

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-[1.875rem] md:text-4xl font-medium text-gray-900 mb-4">
            <span className="text-blue-600">What can I help with?</span>
          </h1>
          <p className="text-[.875rem] md:text-[1rem] text-gray-600 max-w-2xl mb-8">
            Your personalized LCU AI-powered assistant.
          </p>

          {/* Chat Input Box */}
          <ChatInputBox />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
