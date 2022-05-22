const express = require('express');
const router = express.Router();
const {verifyToken} = require("../middleware/authJwt");

const { getProductsList, getProductById } = require("../controllers/productController");

router.route("/shop").get(getProductsList);
router.route("/product/:id").get(getProductById);

module.exports = router;