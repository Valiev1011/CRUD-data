const express = require("express");
const {
  getAllorders,
  postOrder,
  getOrdersById,
  updateOrdersById,
  deleteOrdersById,
} = require("../controllers/orders");
const router = express.Router();

router.get("/", getAllorders);
router.post("/", postOrder);
router.get("/:id", getOrdersById);
router.put("/:id", updateOrdersById);
router.delete("/:id", deleteOrdersById);

module.exports = router;
