const express = require('express');
const router = express.Router();
const {verifyToken} = require("../middleware/authJwt");

const { newProduct } = require("../controllers/productController");
const { getPrescriptionList } = require('../controllers/managerController');

router.route("/addproduct").post(newProduct);
router.route("/prescriptionList").get(getPrescriptionList);

module.exports = router;


