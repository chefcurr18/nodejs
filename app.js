import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("🎵 Purdue Music App Backend is Live!");
});

// Example endpoint
app.post("/feedback", (req, res) => {
  const { name, message } = req.body;
  console.log(`Feedback from ${name}: ${message}`);
  res.json({ success: true, msg: "Thanks for your feedback!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
