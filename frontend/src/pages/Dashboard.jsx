import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    priority: "",
    status: "",
    sort: "",
  });

  useEffect(() => {
    fetchTasks();
  }, [page, filters]);

  const fetchTasks = async () => {
    const { data } = await api.get("/tasks", {
      params: { ...filters, page, limit: 5 },
    });
    setTasks(data.tasks);
    setPages(data.pages);
  };

  const handleFilterChange = (e) => {
    setPage(1); // reset to first page
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const toggleStatus = async (id, status) => {
    await api.put(`/tasks/${id}`, {
      status: status === "Pending" ? "Completed" : "Pending",
    });
    fetchTasks();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Search & Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={filters.search}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <select
          name="priority"
          value={filters.priority}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Priorities</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Status</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
        <select
          name="sort"
          value={filters.sort}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">Sort By</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      {/* Task Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Due Date</th>
              <th className="p-2 border">Priority</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td className="border p-2">{task.title}</td>
                <td className="border p-2">{task.description}</td>
                <td className="border p-2">
                  {new Date(task.dueDate).toLocaleDateString()}
                </td>
                <td className="border p-2">{task.priority}</td>
                <td className="border p-2">{task.status}</td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => toggleStatus(task._id, task.status)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    {task.status === "Pending"
                      ? "Mark Completed"
                      : "Mark Pending"}
                  </button>
                  <Link
                    to={`/edit/${task._id}`}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteTask(task._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
