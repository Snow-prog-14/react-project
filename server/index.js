import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({ message: "Backend is working" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});