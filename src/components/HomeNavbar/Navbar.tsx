import { CgMenuLeftAlt } from "react-icons/cg";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = ({
  toggleSidebar,
  toggleProfileModal,
}: {
  toggleSidebar: () => void;
  toggleProfileModal: () => void;
}) => (
  <>
    <nav className="w-full bg-white shadow-md px-6 py-4 hidden md:flex justify-between items-center">
      <div className="flex items-center text-2xl font-bold gap-4 text-blue-600">
        <CgMenuLeftAlt
          size={28}
          className="cursor-pointer mt-1"
          aria-label="Collapse sidebar"
          onClick={toggleSidebar}
        />
        <div className="text-2xl font-bold">ChatLCU</div>
      </div>
      <ProfileDropdown toggleProfileModal={toggleProfileModal} />
    </nav>

    <nav className="w-full bg-white shadow-md px-6 py-4 md:hidden flex justify-between items-center">
      <button aria-label="Open menu" onClick={toggleSidebar}>
        <CgMenuLeftAlt size={28} className="text-blue-600 cursor-pointer" />
      </button>
      <div className="text-2xl font-bold text-blue-600">ChatLCU</div>
      <ProfileDropdown toggleProfileModal={toggleProfileModal} />
    </nav>
  </>
);

export default Navbar;
