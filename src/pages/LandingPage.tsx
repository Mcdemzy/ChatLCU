import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">ChatLCU</div>
        <div>
          <button className="text-gray-600 hover:text-blue-600 px-4 py-2 transition-colors">
            Log in
          </button>
          <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">ChatLCU</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Your AI-powered assistant for writing, brainstorming, summarizing, and
          creating stunning visuals.
        </p>
        <div className="relative w-full max-w-[768px]">
          <input
            type="text"
            placeholder="Message ChatLCU..."
            className="w-full p-4 pl-12 text-gray-700 bg-gray-50 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <span className="absolute left-4 top-4 text-gray-400 text-lg">
            ✉️
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
            Create Image
          </button>
          <button className="px-5 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all">
            Help me write
          </button>
          <button className="px-5 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-all">
            Brainstorm
          </button>
          <button className="px-5 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-all">
            Summarize Text
          </button>
        </div>
      </header>

      {/* Footer */}
      <footer className="w-full text-gray-400 py-6 mt-auto">
        <div className="text-center">
          <p>
            By using ChatLCU, you agree to our{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>
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

export default LandingPage;
