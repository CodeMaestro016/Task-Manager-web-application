import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Dashboard</Link></li>
          <li><Link to="/add-task" className="hover:text-gray-300">Add Task</Link></li>
        </ul>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold text-gray-800">Dashboard Page</h1>} />
          <Route path="/add-task" element={<h1 className="text-3xl font-bold text-gray-800">Add Task Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;