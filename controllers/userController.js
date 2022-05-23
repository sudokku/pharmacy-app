const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");


const Prescription = require('../models/prescription');
const User = require("../models/user");
const config = require("../config/auth.config.js");
const { default: mongoose } = require("mongoose");
const { use } = require("bcrypt/promises");

// @desc    Get users list
// @route   POST /api/v1.0/users
// @access  Public
const getUserList = asyncHandler(async (req, res) => {
    const users = await User.find();

    res.status(200).json(users);
});

// @desc    Authenticate user
// @route   POST /api/v1.0/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            username: user.username,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// @desc    Register user
// @route   POST /api/v1.0/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, username, password, roles } = req.body;

    if (!name || !username || !password) {
        res.status(400);
        throw new Error("Please add all fields");
    }

    // Check if user exists
    const userExists = await User.findOne({ username });

    if (userExists) {
        res.status(400);
        throw new Error("User with such username already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        username,
        password: hashedPassword,
        roles,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// @desc    Get user self data
// @route   GET /api/v1.0/users/self
// @access  Private
const getSelfUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

const newPrescription = asyncHandler(async (req, res) =>{

    const { Presc } = req.body;

    const prescriptionData = await Prescription.create({
        presDescription: Presc
    });

    try {
        const savedPrescription = await prescriptionData.save();
        res.status(200).json(savedPrescription);
    } catch (err) {
        res.status(500).json(err);
    }
});

=======
// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
};


module.exports = {
    getUserList,
    loginUser,
    registerUser,
    getSelfUser,
    newPrescription
}

};

