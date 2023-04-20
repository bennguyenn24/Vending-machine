const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemsController");

router.get("/", itemsController.getAllItems);

router.post("/", itemsController.postItem);

module.exports = router;
