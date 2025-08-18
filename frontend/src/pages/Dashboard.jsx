import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("/tasks");
      setTasks(data);
    } catch (err) {
      console.error(err);
    }
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
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
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
      )}
    </div>
  );
}

export default Dashboard;
