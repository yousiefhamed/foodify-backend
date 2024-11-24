import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Connect to MongoDB
import connectDB from "../config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Define API endpoints
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;
try {
  const conn = await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
