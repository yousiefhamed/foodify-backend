const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Connect to MongoDB
const connectDB = require("../config/db");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Define API endpoints
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;

const serverListener = async () => {
  try {
    const conn = await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

serverListener();
