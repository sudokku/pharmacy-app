const express = require('express')
const router = express.Router()
const {
    getUserList,
    loginUser,
    registerUser,
    getSelfUser
} = require('../controllers/userController')
const {verifyToken} = require("../middleware/authJwt");

router.route('/').get(getUserList)
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/self').get(verifyToken, getSelfUser)

module.exports = router