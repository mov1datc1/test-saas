const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "backend",
    env: process.env.NODE_ENV || "development"
  });
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
