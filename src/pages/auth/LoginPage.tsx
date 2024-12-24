import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  // Load email from localStorage when the component mounts
  useEffect(() => {
    const savedEmail = localStorage.getItem("loginEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("loginEmail", email); // Save email to localStorage
    navigate("/login/password", { state: { email } });
  };

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
          Login to your account
        </h2>

        {/* Email Input */}
        <div className="animate-fade-up-delay">
          <input
            id="email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-sm transition-all animate-fade-up-delay"
          onClick={handleSubmit}
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

export default LoginPage;
