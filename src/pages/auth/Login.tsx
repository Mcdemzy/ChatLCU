import React from "react";
import { Link, useLocation } from "react-router-dom";

const Login: React.FC = () => {
  const location = useLocation();
  const email =
    location.state?.email || localStorage.getItem("loginEmail") || ""; // Retrieve email from state or localStorage

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
          Enter your password
        </h2>

        {/* Prefilled Email Input */}
        <div className="animate-fade-up-delay relative">
          <input
            id="email"
            type="email"
            value={email}
            readOnly
            className="w-full mt-1 px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100 cursor-not-allowed"
          />
          <Link
            to="/login"
            className="absolute right-4 top-4 text-blue-600 font-semibold"
          >
            Edit
          </Link>
        </div>

        {/* Password Input */}
        <div className="animate-fade-up-delay">
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mt-4 px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Forgot Password Link */}
        <p className="text-[1rem] text-gray-500 mt-4 animate-fade-up-delay">
          <Link to="/reset-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </p>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-sm transition-all animate-fade-up-delay"
        >
          Continue
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-500 mt-4 animate-fade-up-delay">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        {/* Divider */}
        <div className="relative my-6 animate-fade-up-delay">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3 animate-fade-up-delay">
          <button
            type="button"
            className="w-full flex items-center justify-center py-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            <img
              src="/images/google.png"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Continue with Google
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6 animate-fade-up-delay">
          <Link to="#" className="hover:underline">
            Terms of Use
          </Link>{" "}
          |{" "}
          <Link to="#" className="hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
