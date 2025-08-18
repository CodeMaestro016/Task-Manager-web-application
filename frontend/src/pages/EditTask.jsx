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
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      <h2 className="text-xl font-bold">Edit Task</h2>
      <input
        name="title"
        value={form.title}
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={form.description}
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />
      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />
      <select
        name="priority"
        value={form.priority}
        className="w-full border p-2 rounded"
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
        Update Task
      </button>
    </form>
  );
}

export default EditTask;
