const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const User = require('../models/user')
const Role = require('../models/role')
const config = require("../config/auth.config.js");
const { default: mongoose } = require('mongoose')

// @desc    Get users list
// @route   POST /api/v1.0/users/login
// @access  Public
const getUserList = asyncHandler(async (req, res) => {
    const users = await User.find()

    res.status(200).json(users)
})


// @desc    Authenticate user
// @route   POST /api/v1.0/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    User.findOne({
        username: req.body.username
      })
        .populate("roles", "-__v")
        .exec((err, user) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
    
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
    
          var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
    
        if (!passwordIsValid) {
            return res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
        }
    
          var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
          });
    
          var authorities = [];
    
          for (let i = 0; i < user.roles.length; i++) {
            authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
        }
        res.status(200).send({
            id: user._id,
            username: user.username,
            roles: authorities,
            accessToken: token
        });
    });
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
    const myAccount = await User.findById(req.params.id);
    console.log(req.params);

    res.status(200).json(myAccount);
})


module.exports = {
    getUserList,
    loginUser,
    registerUser,
    getSelfUser
}