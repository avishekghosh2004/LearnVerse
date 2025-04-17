import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

const initializeServer = async () => {
  try {
    // Connect to MongoDB first
    await connectDB();

    // Middlewares
    app.use(cors());
    app.use(express.json());

    // Routes
    app.use("/api/auth", authRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server initialization failed:", error);
    process.exit(1);
  }
};

initializeServer();
