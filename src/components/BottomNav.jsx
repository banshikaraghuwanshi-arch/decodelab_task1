import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaExchangeAlt,
  FaWallet,
  FaChartPie,
  FaUser,
} from "react-icons/fa";

export default function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex justify-around items-center py-3 z-50">

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs transition ${
            isActive
              ? "text-green-700"
              : "text-gray-500"
          }`
        }
      >
        <FaHome size={20} />
        <span className="mt-1">Home</span>
      </NavLink>

      <NavLink
        to="/transactions"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs transition ${
            isActive
              ? "text-green-700"
              : "text-gray-500"
          }`
        }
      >
        <FaExchangeAlt size={20} />
        <span className="mt-1">Transactions</span>
      </NavLink>

      <NavLink
        to="/budget"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs transition ${
            isActive
              ? "text-green-700"
              : "text-gray-500"
          }`
        }
      >
        <FaWallet size={20} />
        <span className="mt-1">Budget</span>
      </NavLink>

      <NavLink
        to="/analytics"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs transition ${
            isActive
              ? "text-green-700"
              : "text-gray-500"
          }`
        }
      >
        <FaChartPie size={20} />
        <span className="mt-1">Analytics</span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs transition ${
            isActive
              ? "text-green-700"
              : "text-gray-500"
          }`
        }
      >
        <FaUser size={20} />
        <span className="mt-1">Profile</span>
      </NavLink>

    </div>
  );
}