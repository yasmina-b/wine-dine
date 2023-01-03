import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import restaurantRoute from "./routes/restaurants.js"
import categoryRoute from "./routes/categories.js"

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MongoDb);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

app.use(
  cors({
    credentials: true,
    origin: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoute);
app.use("/api/users", userRoute);
app.use("/api/restaurants", restaurantRoute);
app.use("/api/categories", categoryRoute);

app.listen(8800, () => {
  connect();
  console.log("Connected to backend!");
});
