import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./routes/bookRoute.js";
import userRoute from "./routes/userRoute.js";
import { connectToMongoDB } from "./Db/db.js";

// configuring the dotenv file
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// collecting port data from env file
const PORT = process.env.PORT || 4000;

// app.use(express.json());
// connecting to mongodb
connectToMongoDB();

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
