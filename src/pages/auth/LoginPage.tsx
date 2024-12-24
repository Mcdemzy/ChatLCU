import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../../components/shared/OAuth";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Load email from localStorage if it exists
    const savedEmail = localStorage.getItem("loginEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    if (!email) {
      alert("Please enter a valid email address."); // Handle empty email input
      return;
    }

    localStorage.setItem("loginEmail", email); // Save email to localStorage
    navigate("/login/password", { state: { email } }); // Navigate to the next page
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

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none animate-fade-up"
            />
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-sm transition-all animate-fade-up-delay"
          >
            Continue
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-500 mt-4 animate-fade-up">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        <OAuth />
      </div>
    </div>
  );
};

export default LoginPage;
