const express = require("express");
const router = express.Router();
const async = require("../middleware/async");

const cartController = require("../controllers/cart");

// GET all cart items
router.get("/:id", cartController.getCartItems);

// POST a new cart item
router.post("/", cartController.addCartItem);

// // POST a new cart collection
// router.post("/collection", cartController.addWholeCart);

// DELETE a new cart item
router.delete("/", cartController.deleteCartItem);

module.exports = router;
