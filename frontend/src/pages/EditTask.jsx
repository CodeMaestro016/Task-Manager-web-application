import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  });

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    const { data } = await api.get(`/tasks/${id}`);
    setForm({
      title: data.title,
      description: data.description,
      dueDate: data.dueDate.split("T")[0],
      priority: data.priority,
    });
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/tasks/${id}`, form);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-[70vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-3xl p-8 w-96 space-y-6 transform hover:scale-105 transition-all duration-300"
      >
        <h2 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          Edit Task
        </h2>
        <div className="relative group">
          <input
            name="title"
            value={form.title}
            placeholder="Task Title"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 text-lg group-hover:border-gray-300"
            onChange={handleChange}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18" />
            </svg>
          </div>
        </div>
        <div className="relative group">
          <textarea
            name="description"
            value={form.description}
            placeholder="Task Description"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 text-lg group-hover:border-gray-300 resize-y min-h-[100px]"
            onChange={handleChange}
          />
        </div>
        <div className="relative group">
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 text-lg group-hover:border-gray-300"
            onChange={handleChange}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <select
          name="priority"
          value={form.priority}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 text-lg font-medium group-hover:border-gray-300"
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button 
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Update Task
        </button>
      </form>
    </div>
  );
}

export default EditTask;