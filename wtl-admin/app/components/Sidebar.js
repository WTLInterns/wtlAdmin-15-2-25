"use client"
import { useRouter } from "next/navigation";
import { 
    FaTachometerAlt, FaCar, FaUserFriends, 
    FaExclamationTriangle, FaCreditCard, FaUser 
} from "react-icons/fa";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="w-64 h-[calc(100vh-4rem)] bg-white shadow-lg flex flex-col fixed top-16 left-0 z-40 border-r">
      {/* User Email */}
      <div className="px-6 py-5 text-gray-800 font-bold text-sm uppercase bg-gray-100 border-b">
        FRONTENDRH@GMAIL.COM
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-3">
        <ul className="space-y-3 px-4">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-300 
              hover:text-blue-600 hover:bg-blue-100"
              onClick={() => router.push(item.path)}
            >
              <item.icon className="text-lg" />
              <span className="text-base font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// Menu items list with paths
const menuItems = [
  { label: "Dashboard", icon: FaTachometerAlt, path: "/" },
  { label: "Bookings", icon: FaCar, path: "/bookings" },
  { label: "Cabs", icon: FaCar, path: "/cabs" },
  { label: "Drivers", icon: FaUserFriends, path: "/drivers" },
  { label: "Complaints", icon: FaExclamationTriangle, path: "/complaints" },
  { label: "Payments", icon: FaCreditCard, path: "/payments" },
  { label: "Vendor", icon: FaUser, path: "/vendor" },
];

export default Sidebar;
