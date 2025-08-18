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
    <nav className="bg-blue-600 p-4 text-white flex justify-between rounded-xl">
      <Link to="/" className="font-bold">Task Manager</Link>
      <div className="space-x-4">
        {token ? (
          <>
            <Link to="/">Dashboard</Link>
            <Link to="/add">Add Task</Link>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded-lg">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
