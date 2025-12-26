import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import inventoryRoutes from "./routes/inventory.routes.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

// 🔒 Middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

// 🔍 Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", uptime: process.uptime() });
});

// 🔐 Auth routes
app.use("/auth", authRoutes);

// 📦 Inventory routes
app.use("/inventory", inventoryRoutes);

// ❌ Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});


