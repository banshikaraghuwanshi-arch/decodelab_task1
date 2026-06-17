import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-10">

        {/* Logo */}
        <div className="text-center mb-8">

          <div className="w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">

            <span className="text-white text-3xl font-bold">
              ₹
            </span>

          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to manage your finances
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="mb-5">

            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <div className="relative">

              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

            </div>

          </div>

          {/* Password */}
          <div className="mb-4">

            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <div className="relative">

              <FaLock className="absolute left-4 top-4 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-400"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

          </div>

          {/* Remember Me */}
          <div className="flex justify-between items-center mb-6">

            <label className="flex items-center gap-2 text-sm text-gray-600">

              <input
                type="checkbox"
                className="accent-green-700"
              />

              Remember Me

            </label>

            <button
              type="button"
              className="text-sm text-green-700 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-2xl font-semibold transition"
          >
            Login
          </button>

          {/* Demo Button */}
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-full mt-4 border border-green-700 text-green-700 py-3 rounded-2xl font-semibold hover:bg-green-50 transition"
          >
            Continue as Demo User
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">

          Don't have an account?

          <span className="text-green-700 font-medium cursor-pointer ml-1 hover:underline">
            Sign Up
          </span>

        </p>

      </div>

    </div>
  );
}