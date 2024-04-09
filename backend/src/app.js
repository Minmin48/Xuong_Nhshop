import express from "express";
import productRouter from "./routers/product";
import authRouter from "./routers/auth.router";
import categoryRouter from "./routers/category";
import cartRouter from "./routers/cart";
import { connectDB } from "./config/db";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import orderRouter from "./routers/order"
const app = express();
// middleware
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// connect db
connectDB(process.env.DB_URI);
// routes
app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", categoryRouter);
app.use("/api", cartRouter);
app.use("/api", orderRouter);

export const viteNodeApp = app;
