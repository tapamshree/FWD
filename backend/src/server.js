// src/server.js
import dotenv from "dotenv";
dotenv.config(); // explicitly load .env from backend/

import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing. Check your .env file.");
  process.exit(1);
}

const startServer = async () => {
  try {
    console.log("Attempting MongoDB connection...");
    
    await mongoose.connect(MONGO_URI);
    
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();

