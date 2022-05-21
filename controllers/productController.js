const Product = require('../models/product');
const asyncHandler = require('express-async-handler');
const { default: mongoose } = require('mongoose');

const addProduct = asyncHandler(async (req, res) =>{

    const { Name, Price, Category, Description} = req.body;

    const productData = await Product.create({
        name: Name,
        price: Price,
        category: Category,
        description: Description
    });

    productData.save (err => {
        if(err) {
            res.status(400)
            throw new Error ('Something went wrong');
        } else {
            res.send("Product Stored Successfuly");
        }
    })
});

module.exports = {
    addProduct
};