import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();

const PORT = process.env.PORT || 8000;

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 8000, () =>
  console.log(`Server is running on PORT ${PORT}`)
);
