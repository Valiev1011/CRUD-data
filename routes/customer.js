const express = require("express");
const router = express.Router();
const {
  getAllCustomers,
  createCustomers,
  getCustomersById,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customer");

router.get("/", getAllCustomers);
router.post("/", createCustomers);
router.get("/:id", getCustomersById);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
