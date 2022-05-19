const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;