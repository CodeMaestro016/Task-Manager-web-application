import express from "express";
import { body } from "express-validator";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Validation rules
const validateTask = [
  body("title").not().isEmpty().withMessage("Title is required"),
  body("description").not().isEmpty().withMessage("Description is required"),
  body("dueDate").isISO8601().withMessage("Due date must be valid"),
];

router.post("/", protect, validateTask, createTask);
router.get("/", protect, getTasks);
router.get("/:id", protect, getTaskById);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

export default router;
