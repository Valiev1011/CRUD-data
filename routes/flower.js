const express = require("express");
const router = express.Router();
const flowerController = require("../controllers/flower");

//Get all flowers
router.get("/", flowerController.getAllFlowers);

//Get a single flower by ID
router.get("/:id", flowerController.getFlowerById);

//Update a flower by ID
router.put("/:id", flowerController.updateFlower);

//Delete flower by ID
router.delete("/:id", flowerController.deleteFlower);

//Create a new flower
router.post("/", flowerController.createFlower);

module.exports = router;
