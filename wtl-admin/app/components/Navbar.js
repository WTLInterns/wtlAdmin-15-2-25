import { FaSearch, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white shadow-md flex items-center justify-between px-6 fixed top-0 left-0 z-50">
      {/* Left Side (Logo & Menu Icon) */}
      <div className="flex items-center space-x-4">
        <img src="/logo.jpg" alt="Aimcab Logo" className="w-32" />
        <MdOutlineMenu className="text-gray-700 cursor-pointer text-2xl " />
      </div>

      {/* Right Side (Search & Icons) */}
      <div className="flex items-center space-x-6">
        <FaSearch className="text-gray-500 cursor-pointer text-xl" />
        <div className="relative">
          <FaBell className="text-gray-500 cursor-pointer text-xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </div>
        <div className="relative">
          <FaEnvelope className="text-gray-500 cursor-pointer text-xl" />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">4</span>
        </div>
        <FaUserCircle className="text-gray-500 cursor-pointer text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
