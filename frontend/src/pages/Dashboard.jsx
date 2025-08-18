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

  // Analytics calculations for visual display
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'Completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'Pending').length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
   <div className="min-h-screen h-screen w-[50vw] mx-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-0 overflow-hidden">
      <div className="w-full h-full flex flex-col">
        
        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4 mb-4 flex-shrink-0">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Task Dashboard
              </h1>
              <p className="text-gray-600 text-base">Manage your tasks efficiently and stay organized</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">{totalTasks}</div>
              <div className="text-gray-500">Total Tasks</div>
            </div>
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 flex-shrink-0">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-4 text-white transform hover:scale-105 transition-all duration-200">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xl font-bold">{completedTasks}</div>
                <div className="text-green-100">Completed Tasks</div>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg p-4 text-white transform hover:scale-105 transition-all duration-200">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xl font-bold">{pendingTasks}</div>
                <div className="text-orange-100">Pending Tasks</div>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-4 text-white transform hover:scale-105 transition-all duration-200">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xl font-bold">{completionRate}%</div>
                <div className="text-purple-100">Completion Rate</div>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4 mb-4 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-2"></div>
            Filters & Search
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative group">
              <input
                type="text"
                name="search"
                placeholder="Search tasks..."
                value={filters.search}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 transition-all duration-200 text-gray-700 bg-gray-50 focus:bg-white group-hover:border-gray-300"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <div className="w-4 h-4 text-gray-400">🔍</div>
              </div>
            </div>

            <select
              name="priority"
              value={filters.priority}
              onChange={handleFilterChange}
              className="px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-300 text-gray-700 font-medium"
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
              className="px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-300 text-gray-700 font-medium"
            >
              <option value="">All Status</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>

            <select
              name="sort"
              value={filters.sort}
              onChange={handleFilterChange}
              className="px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-300 text-gray-700 font-medium"
            >
              <option value="">Sort By</option>
              <option value="dueDate">Due Date</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>

        {/* Task Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-0 flex-grow">
          <div className="p-4 pb-0">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-2"></div>
              Your Tasks
            </h2>
          </div>
          
          <div className="overflow-x-auto h-full">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-y border-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Title</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Description</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Due Date</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Priority</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tasks.map((task, index) => (
                  <tr key={task._id} className={`hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-gray-900 text-base">{task.title}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-gray-600 max-w-xs">{task.description}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="text-gray-700 font-medium">
                          {new Date(task.dueDate).toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-semibold ${
                        task.priority === 'High' ? 'bg-red-100 text-red-800 border border-red-200' :
                        task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                        'bg-green-100 text-green-800 border border-green-200'
                      }`}>
                        {task.priority}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        task.status === 'Completed' ? 'bg-green-100 text-green-800 border border-green-200' :
                        'bg-orange-100 text-orange-800 border border-orange-200'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-1 ${
                          task.status === 'Completed' ? 'bg-green-500' : 'bg-orange-500'
                        }`}></div>
                        {task.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => toggleStatus(task._id, task.status)}
                          className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          {task.status === "Pending" ? "✓ Complete" : "⏳ Pending"}
                        </button>
                        <Link
                          to={`/edit/${task._id}`}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          ✏️ Edit
                        </Link>
                        <button
                          onClick={() => deleteTask(task._id)}
                          className="px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mb-4 flex-shrink-0">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-2xl font-bold transition-all duration-200 transform hover:-translate-y-0.5 ${
                page === i + 1 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl" 
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg border-2 border-gray-200 hover:border-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;