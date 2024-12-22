import { useState, useRef, useEffect } from "react";
import { LiaUserSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";

const ProfileDropdown = ({
  toggleProfileModal,
}: {
  toggleProfileModal: () => void;
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="text-white w-8 h-8 rounded-full flex items-center justify-center bg-pink-600 text-[1.25rem] cursor-pointer"
        aria-label="User profile"
        onClick={toggleDropdown}
      >
        A
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
          <button
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => {
              toggleProfileModal();
              setDropdownOpen(false);
            }}
          >
            <LiaUserSolid size={20} />
            My Profile
          </button>
          <button
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => alert("Settings")}
          >
            <IoSettingsOutline size={20} />
            Settings
          </button>
          <Link
            to="/logout"
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
            onClick={() => alert("Logged Out")}
          >
            <TbLogout size={20} />
            Log Out
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
