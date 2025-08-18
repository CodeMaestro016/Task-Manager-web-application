import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/register", form);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex justify-center items-center p-4">
      <div className="w-full max-w-md">
        {/* Decorative elements */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl mb-4">
            <div className="text-white text-2xl">👤</div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Join Us Today
          </h1>
          <p className="text-gray-600 mt-2">Create your account and get started</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white backdrop-blur-lg bg-opacity-80 shadow-2xl rounded-3xl p-8 space-y-6 border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-8">
            Register
          </h2>
          
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <div className="text-gray-400 text-lg">👤</div>
              </div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 transition-all duration-300 text-gray-700 bg-gray-50 focus:bg-white group-hover:border-gray-300 text-lg placeholder-gray-400"
                onChange={handleChange}
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <div className="text-gray-400 text-lg">📧</div>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 transition-all duration-300 text-gray-700 bg-gray-50 focus:bg-white group-hover:border-gray-300 text-lg placeholder-gray-400"
                onChange={handleChange}
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <div className="text-gray-400 text-lg">🔒</div>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 transition-all duration-300 text-gray-700 bg-gray-50 focus:bg-white group-hover:border-gray-300 text-lg placeholder-gray-400"
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            Create Account 🚀
          </button>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <span className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer transition-colors duration-200">
                Sign in here
              </span>
            </p>
          </div>
        </form>

        {/* Additional decorative elements */}
        <div className="flex justify-center mt-8 space-x-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;