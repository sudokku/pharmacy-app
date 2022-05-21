const express = require('express')
const router = express.Router()
const {
    loginUser,
    registerUser,
    getSelfUser
} = require('../controllers/userController')

router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/self').get(getSelfUser)

module.exports = router