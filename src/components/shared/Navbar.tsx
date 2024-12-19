import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center animate-slide-down">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">ChatLCU</Link>
        </div>
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
    </div>
  );
};

export default Navbar;
