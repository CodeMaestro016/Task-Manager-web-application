import Task from "../models/Task.js";
import { validationResult } from "express-validator";

// Create Task
export const createTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { title, description, dueDate, priority } = req.body;

    const task = await Task.create({
      title,
      description,
      dueDate,
      priority,
      user: req.user.id, // comes from auth middleware
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all tasks for logged-in user with search, filter, pagination, sorting
export const getTasks = async (req, res) => {
  try {
    const { search, priority, status, sort, page = 1, limit = 5 } = req.query;

    const query = { user: req.user.id };

    // Search by title or description
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by priority
    if (priority) query.priority = priority;

    // Filter by status
    if (status) query.status = status;

    // Sorting
    let sortOption = {};
    if (sort === "dueDate") sortOption.dueDate = 1; // ascending
    if (sort === "priority") sortOption.priority = 1;

    // Pagination
    const skip = (page - 1) * limit;

    const tasks = await Task.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(Number(limit));

    const total = await Task.countDocuments(query);

    res.json({
      tasks,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Get single task
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ message: "Task not found" });
    if (task.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ message: "Task not found" });
    if (task.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Delete task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ message: "Task not found" });
    if (task.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    await Task.deleteOne({ _id: task._id }); // ✅ FIX

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

