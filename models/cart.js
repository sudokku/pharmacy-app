const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },

    products: [{
        productId: {
            type: String,
        },
        name: {
            type: String
        },
        quantity: {
            type: Number,
            default: 1,
            min: 1
        },
        price: {
            type: Number,
            required: true
        },
        total: {
            type: Number
        }
    }]
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;