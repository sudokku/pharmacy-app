const express = require('express');
const router = express.Router();
const {verifyToken} = require("../middleware/authJwt");

const { getProductsList } = require("../controllers/productController");

router.route("/shop").get(getProductsList);

module.exports = router;