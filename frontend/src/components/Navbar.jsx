import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 text-white flex justify-between items-center rounded-xl shadow-lg">
      <Link 
        to="/" 
        className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 hover:from-blue-200 hover:to-white transition-all duration-300"
      >
        Task Manager
      </Link>
      <div className="space-x-6 flex items-center">
        {token ? (
          <>
            <Link 
              to="/dashboard" 
              className="text-lg font-medium hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Dashboard
            </Link>
            <Link 
              to="/add" 
              className="text-lg font-medium hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Add Task
            </Link>
            <button 
              onClick={logout} 
              className="bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-lg font-semibold text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className="text-lg font-medium hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="text-lg font-medium hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;