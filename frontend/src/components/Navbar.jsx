import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authState } from "../recoil/atoms/atom";
import axios from "axios"; // Import axios to define API

const Navbar = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState);

  const handleLogout = () => {
    // Clear authentication state
    setAuth({
      isAuthenticated: false,
      user: null,
      token: null,
    });

    // Remove token from localStorage
    localStorage.removeItem("token");

    delete axios.defaults.headers.common["Authorization"]; // Use axios instead of undefined API
    // delete API.defaults.headers.common['Authorization'];

    // Redirect to home page
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span
              className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-violet-200 bg-clip-text text-transparent 
          hover:scale-105 transform transition-transform duration-300 cursor-pointer"
            >
              LearnVerse
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {auth.isAuthenticated ? (
                <>
                  <span className="text-blue-100 font-medium">
                    Welcome, {auth.user?.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg border-2 border-blue-400 text-white hover:bg-blue-700 transition-all duration-200 text-sm font-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 rounded-lg border-2 border-blue-400 text-white-400 hover:bg-blue-600 transition-all duration-200 text-sm font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 rounded-lg border-2 border-blue-400 text-white-400  hover:bg-blue-600 transition-all duration-200 text-sm font-semibold shadow-sm"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
