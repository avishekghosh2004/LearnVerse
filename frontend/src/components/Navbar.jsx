import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authState } from "../recoil/atoms/atom";
import API from "../api/axios"; // Assuming API is imported from a file

const Navbar = () => {
  const auth = useRecoilValue(authState);
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Reset auth state
    setAuth({
      isAuthenticated: false,
      user: null,
      token: null,
    });

    // Clear axios default header
    delete API.defaults.headers.common["Authorization"];

    // Redirect to login
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">
        LearnVerse
      </Link>
      <div className="space-x-4">
        {auth.isAuthenticated ? (
          <>
            <span>Welcome, {auth.user?.name}</span>
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
