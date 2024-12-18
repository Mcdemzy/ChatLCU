import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 animate-fade-in">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg animate-slide-down">
        {/* Logo */}
        <div className="flex justify-center mb-6 animate-fade-up">
          <img
            src="/images/chat.png"
            alt="ChatLCU Logo"
            className="h-10 w-10"
          />
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4 animate-fade-up-delay">
          Reset Your Password
        </h2>

        <p className="text-center mb-6">
          Enter your Phone number or Email address and we will send you
          instructions to reset your password.
        </p>

        {/* Email Input */}
        <div className="animate-fade-up-delay relative">
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="w-full mt-1 px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Link
            to="/login"
            className="absolute right-4 top-4 text-blue-600 font-semibold"
          >
            Edit
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-sm transition-all animate-fade-up-delay"
        >
          Continue
        </button>

        {/* Signup Link */}
        <p className="text-center text-[1rem] font-semibold text-gray-500 mt-4 animate-fade-up-delay">
          <Link to="/login" className="text-blue-600 hover:underline">
            Back to Login
          </Link>
        </p>

        {/* Footer
        <p className="text-center text-xs text-gray-400 mt-6 animate-fade-up-delay">
          <Link to="#" className="hover:underline">
            Terms of Use
          </Link>{" "}
          |{" "}
          <Link to="#" className="hover:underline">
            Privacy Policy
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default ForgotPassword;
