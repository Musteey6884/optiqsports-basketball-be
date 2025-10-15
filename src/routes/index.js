import express from "express";
const router = express.Router();

// Root route
router.get("/", (req, res) => {
  res.send("Welcome to OptiqSports Basketball Backend ");
});

export default router;
