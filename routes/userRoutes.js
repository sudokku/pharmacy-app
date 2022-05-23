const express = require('express')
const router = express.Router()
const {
    getUserList,
    loginUser,
    registerUser,
    getSelfUser,
    newPrescription
} = require('../controllers/userController')
const {verifyToken} = require("../middleware/authJwt");

router.route('/').get(getUserList)
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/self/:id').get(verifyToken, getSelfUser)
router.route('/new-prescription').post(newPrescription);

module.exports = router