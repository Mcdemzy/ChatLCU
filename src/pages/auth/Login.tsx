import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios, { AxiosError } from "axios";
import OAuth from "../../components/shared/OAuth";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email] = useState(
    location.state?.email || localStorage.getItem("loginEmail") || ""
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      const token = response.data.token;
      localStorage.setItem("authToken", token);

      navigate("/home/chat");
    } catch (err: unknown) {
      const errorMessage =
        (err as AxiosError<{ message: string }>)?.response?.data?.message ||
        "Invalid email or password. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 animate-fade-in">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg animate-slide-down">
        <div className="flex justify-center mb-6 animate-fade-up">
          <img
            src="/images/chat.png"
            alt="ChatLCU Logo"
            className="h-10 w-10"
          />
        </div>

        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4 animate-fade-up-delay">
          Enter your password
        </h2>

        {error && <div className="text-red-600 mb-4 text-center">{error}</div>}

        <form onSubmit={handleSubmit}>
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

          <div className="animate-fade-up-delay">
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-4 px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <p className="text-[1rem] text-gray-500 mt-4 animate-fade-up-delay">
            <Link
              to="/reset-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </p>

          <button
            type="submit"
            className={`w-full mt-4 ${
              isLoading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-3 rounded-lg shadow-sm transition-all animate-fade-up-delay`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Continue"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4 animate-fade-up-delay">
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

export default Login;
