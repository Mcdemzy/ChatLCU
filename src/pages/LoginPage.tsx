import React from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/OpenAI_Logo.svg"
            alt="ChatLCU Logo"
            className="h-10 w-10"
          />
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
          Login to your account
        </h2>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email address*
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="mt-4">
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Password*
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Forgot Password Link */}
        <div className="text-right mt-2">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-sm transition-all"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center py-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Continue with Google
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center py-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
              className="h-5 w-5 mr-2"
            />
            Continue with Microsoft Account
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center py-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="h-5 w-5 mr-2"
            />
            Continue with Apple
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
