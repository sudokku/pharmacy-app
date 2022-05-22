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

const getProductsList = asyncHandler(async (req, res) => {
    const products = await Product.find();
    

    res.status(200).json(products);
});

const getProductById = async (req, res) =>{
    try{
        let id = req.params.id;
        let productDetails = await Product.findById(id);
        res.status(200).json(productDetails);
    } catch (err){
        res.status(500).json(err);
    }
}

module.exports = {
    newProduct,
    getProductsList,
    getProductById
};