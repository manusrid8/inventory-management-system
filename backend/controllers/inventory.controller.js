import  db  from "../db.js";

/**
 * GET inventory for logged-in user
 */
export const getInventory = async (req, res) => {
  try {
    const userId = req.user.id; // 🔐 from JWT middleware

    const [rows] = await db.query(
      "SELECT * FROM inventory WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );

    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * ADD new inventory item (linked to user)
 */
export const addInventoryItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { sku, name, quantity, reorder_level } = req.body;

    if (!sku || !name || quantity === undefined || reorder_level === undefined) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await db.query(
      `INSERT INTO inventory 
       (sku, name, quantity, reorder_level, user_id) 
       VALUES (?, ?, ?, ?, ?)`,
      [sku, name, quantity, reorder_level, userId]
    );

    res.status(201).json({ message: "Inventory item added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * UPDATE quantity (only own item)
 */
export const updateInventoryQuantity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { quantity } = req.body;

    if (quantity === undefined) {
      return res.status(400).json({ error: "Quantity is required" });
    }

    const [result] = await db.query(
      "UPDATE inventory SET quantity = ? WHERE id = ? AND user_id = ?",
      [quantity, id, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Item not found or unauthorized" });
    }

    res.json({ message: "Quantity updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * DELETE inventory item (only own item)
 */
export const deleteInventoryItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const [result] = await db.query(
      "DELETE FROM inventory WHERE id = ? AND user_id = ?",
      [id, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Item not found or unauthorized" });
    }

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



