const Product = require('../models/product');
const asyncHandler = require('express-async-handler');
const { default: mongoose } = require('mongoose');

const newProduct = asyncHandler(async (req, res) =>{

    const { Name, Price, Category, Description} = req.body;

    const productData = await Product.create({
        name: Name,
        price: Price,
        category: Category,
        description: Description
    });

    try {
        const savedProduct = await productData.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = {
    newProduct
};