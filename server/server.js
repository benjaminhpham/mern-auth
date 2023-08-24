import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/userRoutes.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.use("/api/users", userRoutes);

app.listen(process.env.PORT || 8000, () =>
  console.log(`Server is running on PORT ${PORT}`)
);
