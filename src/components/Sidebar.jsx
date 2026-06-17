import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaExchangeAlt,
  FaWallet,
  FaChartPie,
  FaUser,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-white shadow-lg p-6 fixed">

      <h1 className="text-2xl font-bold text-green-700 mb-10">
        Finance Tracker
      </h1>

      <nav className="space-y-3">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl transition ${
              isActive
                ? "bg-green-100 text-green-700 font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl transition ${
              isActive
                ? "bg-green-100 text-green-700 font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          <FaExchangeAlt />
          Transactions
        </NavLink>

        <NavLink
          to="/budget"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl transition ${
              isActive
                ? "bg-green-100 text-green-700 font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          <FaWallet />
          Budget
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl transition ${
              isActive
                ? "bg-green-100 text-green-700 font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          <FaChartPie />
          Analytics
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl transition ${
              isActive
                ? "bg-green-100 text-green-700 font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`
          }
        >
          <FaUser />
          Profile
        </NavLink>

      </nav>
    </div>
  );
}