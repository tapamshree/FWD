import express from "express";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/intern", protect, (req, res) => {
  if (req.user.role !== "intern") {
    return res.status(403).json({ message: "Interns only" });
  }
  res.json({ message: "Intern Dashboard", user: req.user });
});

router.get("/admin", protect, adminOnly, (req, res) => {
  res.json({ message: "Admin Dashboard", user: req.user });
});

export default router;
