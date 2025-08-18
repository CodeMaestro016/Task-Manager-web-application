import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

function AddTask() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/tasks", form);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      <h2 className="text-xl font-bold">Add Task</h2>
      <input
        name="title"
        placeholder="Title"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />
      <input
        type="date"
        name="dueDate"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />
      <select
        name="priority"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button className="w-full bg-green-600 text-white py-2 rounded-lg">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
