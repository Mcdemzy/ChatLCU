import { Link } from "react-router-dom";

const OAuth = () => {
  return (
    <div>
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
      <div className="space-y-3 animate-fade-up">
        <button
          type="button"
          className="w-full flex items-center justify-center py-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          <img src="/images/google.png" alt="Google" className="h-5 w-5 mr-2" />
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
  );
};

export default OAuth;
