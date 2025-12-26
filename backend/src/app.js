import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import authRoutes from './routes/authRoutes.js';        // ✅ Correct path
import dashboardRoutes from './routes/dashboardRoutes.js';
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

/* ---------- Global Middlewares ---------- */
app.use(express.json());
app.use(cors());
app.use(helmet());

/* ---------- Rate Limiting ---------- */
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 300,
  })
);

/* ---------- Routes ---------- */
// Removed the undefined "routes"
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

/* ---------- Health Check ---------- */
app.get("/health", (_, res) => {
  res.status(200).json({ status: "OK" });
});

/* ---------- Error Handler (LAST) ---------- */
app.use(errorHandler);

export default app;
