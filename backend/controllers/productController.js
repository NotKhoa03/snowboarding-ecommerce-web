import e from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

//Controllers for routes

// @desc Fetch all products
// @route GET /api/products from productRoutes.js
// @access Public
const getProducts = asyncHandler(async (req, res) => { 
    const products = await Product.find({});
    res.send(products);
})

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => { 
    const product = await Product.findById(req.params.id);
    if(product){
        return res.send(product);
    } else{
        res.status(404);
        throw new Error('Resource not found');
    }
})

export { getProducts, getProductById };