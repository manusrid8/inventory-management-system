import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  getInventory,
  addInventoryItem,
  updateInventoryQuantity,
  deleteInventoryItem
} from "../controllers/inventory.controller.js";


const router = express.Router();

router.get("/", authMiddleware, getInventory);
router.post("/", authMiddleware, addInventoryItem);
router.put("/:id", authMiddleware, updateInventoryQuantity);
router.delete("/:id", authMiddleware, deleteInventoryItem);

export default router;


