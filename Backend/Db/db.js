import mongoose from "mongoose";
import dotenv from "dotenv";

// configuring the dotenv file
dotenv.config();

export const connectToMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoDB_URI);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};
