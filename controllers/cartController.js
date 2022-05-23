const Cart = require("../models/cart");

const createCart = async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch {
        res.status(500).json(err);
    }
};

const addItemToCart = async (req, res) => {
    const { productId, quantity, name, price } = req.body;

    try {
        
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    createCart
}