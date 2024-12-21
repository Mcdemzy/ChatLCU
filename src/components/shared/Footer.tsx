import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="w-full text-gray-400 py-6 mt-auto text-[.75rem] animate-fade-up-delay">
        <div className="text-center">
          <p>
            By using ChatLCU, you agree to our{" "}
            <Link to="#" className="text-blue-400 hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-blue-400 hover:underline">
              Privacy Policy
            </Link>
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

export default Footer;
