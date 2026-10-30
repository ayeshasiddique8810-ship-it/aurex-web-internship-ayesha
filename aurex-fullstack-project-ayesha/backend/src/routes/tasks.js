const express = require("express");
const mongoose = require("mongoose");
const Task = require("../models/Task");
const requireAuth = require("../middleware/auth");

const router = express.Router();
router.use(requireAuth);

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json({ count: tasks.length, tasks });
  } catch (error) { next(error); }
});

router.post("/", async (req, res, next) => {
  try {
    const title = String(req.body.title || "").trim();
    if (!title) return res.status(400).json({ message: "Task title is required." });
    if (title.length > 160) return res.status(400).json({ message: "Task title cannot exceed 160 characters." });

    const task = await Task.create({ title, user: req.userId });
    res.status(201).json({ message: "Task created.", task });
  } catch (error) { next(error); }
});

router.patch("/:id", async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: "Invalid task ID." });

    const updates = {};
    if (typeof req.body.title === "string") {
      const title = req.body.title.trim();
      if (!title || title.length > 160) return res.status(400).json({ message: "Title must be 1–160 characters." });
      updates.title = title;
    }
    if (typeof req.body.completed === "boolean") updates.completed = req.body.completed;
    if (!Object.keys(updates).length) return res.status(400).json({ message: "Provide a title or completed value to update." });

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      { $set: updates },
      { new: true, runValidators: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found." });
    res.json({ message: "Task updated.", task });
  } catch (error) { next(error); }
});

router.delete("/:id", async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: "Invalid task ID." });
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!task) return res.status(404).json({ message: "Task not found." });
    res.json({ message: "Task deleted." });
  } catch (error) { next(error); }
});

module.exports = router;
