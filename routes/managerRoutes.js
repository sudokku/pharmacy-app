const express = require('express');
const router = express.Router();
const {verifyToken} = require("../middleware/authJwt");

const { newProduct } = require("../controllers/productController");

router.route("/addproduct").post(newProduct);

module.exports = router;


