import { useState, useEffect } from "react";
import Icon1 from "/images/icon1.png";
import Icon2 from "/images/icon2.png";
import Icon3 from "/images/icon3.png";
import Icon4 from "/images/icon4.png";
import Icon5 from "/images/icon5.png";
import Icon6 from "/images/icon6.png";
import Icon7 from "/images/icon7.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [currentImage, setCurrentImage] = useState(Icon1);
  const images = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const currentIndex = images.indexOf(prev);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
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
      <section className="flex flex-col md:flex-row justify-center items-center px-6 py-12 md:py-24">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-700 leading-tight">
            Transform Your Conversations
          </h1>
          <p className="text-lg text-gray-600">
            Discover the future of interactive communication with Chat LCU.
            Fast, reliable, and powered by AI.
          </p>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/demo/chat"
              className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition"
            >
              Try it now
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full flex items-center justify-center animate-none md:animate-bounce">
            <div className="absolute inset-2 md:inset-4 bg-gradient-to-r from-blue-300 to-purple-200 rounded-full flex items-center justify-center">
              <img
                src={currentImage}
                alt="Dynamic Icon"
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">Features</h2>
          <p className="text-gray-600 mt-2">
            Explore what makes Chat LCU the best choice for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
          {["Smart AI Responses", "Secure Conversations", "24/7 Support"].map(
            (feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  {feature}
                </h3>
                <p className="text-gray-600">
                  Experience next-level communication with our cutting-edge
                  features designed just for you.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="text-sm">© 2024 Chat LCU. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-gray-200 transition">
            Terms of Use
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200 transition">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
