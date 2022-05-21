const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const User = require('../models/user')
const { default: mongoose } = require('mongoose')

// @desc    Authenticate user
// @route   POST /api/v1.0/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Login user'})
})

// @desc    Register user
// @route   POST /api/v1.0/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, username, password, roles } = req.body

    if(!name || !username || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({username})

    if(userExists){
        res.status(400)
        throw new Error('User with such username already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name, 
        username,
        password: hashedPassword,
        roles
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            username: user.username
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Get user self data
// @route   GET /api/v1.0/users/self
// @access  Public
const getSelfUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get self user data'})
})


module.exports = {
    loginUser,
    registerUser,
    getSelfUser
}