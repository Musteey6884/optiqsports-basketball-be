import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import pool from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/", router);

// Simple error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
