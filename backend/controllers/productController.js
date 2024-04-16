import e from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

//Controllers for routes

// @desc Fetch all products
// @route GET /api/products from productRoutes.js
// @access Public
const getProducts = asyncHandler(async (req, res) => { 
    const pageSize = 8;
    //req.query.pageNumber is the page number, if not provided, default to 1
    const page = Number(req.query.pageNumber) || 1;

    //Get the keyword from the query string, case insensitive
    const keyword = req.query.keyword ? { name: { $regex: req.query.keyword, $options: 'i' } } : {};

    // Get the category from the query string
    const category = req.query.category ? { category: req.query.category } : {};

    const filter = { ...keyword, ...category };

    //Get the total number of products available
    const count = await Product.countDocuments(filter);

    //Get the products based on the page number and keyword
    const products = await Product.find(filter).limit(pageSize).skip(pageSize * (page - 1));
    res.send({products, page, pages: Math.ceil(count / pageSize)})
})

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => { 
    const product = await Product.findById(req.params.id);

    //If product exists, send the product, else throw an error
    if(product){
        return res.send(product);
    } else{
        res.status(404);
        throw new Error('Resource not found');
    }
})

// @desc Create a product
// @route POST /api/products from productRoutes.js
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => { 
    //Create a new product
    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description'
    })

    const createdProduct = await product.save();
    res.status(201).send(createdProduct);
    
})


// @desc Update a product
// @route PUT /api/products/:id from productRoutes.js
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res) => { 
    //Get the product details from the request body
    const { name, price, description, image, brand, category, countInStock, sizes } = req.body;

    const product = await Product.findById(req.params.id);

    //If product exists, update the product details, else throw an error
    if(product){
        product.name = name;
        product.price = price;
        product.description = description;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;
        product.sizes = sizes;

        const updatedProduct = await product.save();
        res.send(updatedProduct);
    } else{
        res.status(404);
        throw new Error('Product not found');
    }
})

// @desc Update a product's stock count after checkout
// @route PUT /api/products/:id/stock from productRoutes.js
// @access Private/Admin
const updateProductStock = asyncHandler(async (req, res) => { 
    // Get the size and new stock count from the request body
    const { size, qty, id } = req.body;

    const product = await Product.findById(id);

    // If product exists, update the stock count for the specified size, else throw an error
    if(product){
        // Find the size in the product's sizes array
        const sizeObj = product.sizes.find(s => s.size === size);

        if (sizeObj) {
            // Update the stock count for this size
            sizeObj.qty -= qty;

            // If the stock count becomes negative, set it to 0
            if (sizeObj.qty < 0) {
                sizeObj.qty = 0;
            }

            const updatedProduct = await product.save();
            res.send(updatedProduct);
        } else {
            res.status(404);
            throw new Error('Size not found');
        }
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
})
    // @desc Delete a product
    // @route DELETE /api/products/:id from productRoutes.js
    // @access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => { 
    const product = await Product.findById(req.params.id);

    //If product exists, delete the product, else throw an error
    if(product){
        await Product.deleteOne({_id: product._id})
        res.status(200).send({message: 'Product removed'});
    } else{
        res.status(404);
        throw new Error('Product not found');
    }
})

    // @desc Create a review
    // @route POST /api/products/:id/reviews from productRoutes.js
    // @access Private
    const createProductReview = asyncHandler(async (req, res) => { 
        //Get the rating and comment from the request body
        const { rating, comment } = req.body;
        const product = await Product.findById(req.params.id);
        
        //If product exists, check if the user has already reviewed the product
        if(product){
            const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString());

            if(alreadyReviewed){
            res.status(400);
            throw new Error('Product already reviewed');
            }

            //Create a new review if not reviewed
            const review = {
                name: req.user.name,
                rating: Number(rating),
                comment,
                user: req.user._id
            }

            //Add the review to the product reviews array
            product.reviews.push(review);
            product.numReviews = product.reviews.length;
            product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

            await product.save();
            res.status(201).send({message: 'Review added'});

        } else{
            res.status(404);
            throw new Error('Product not found');
        }
    })

// @desc Get top rated products
// @route GET /api/products/top
// @access Public
const getTopProducts = asyncHandler(async (req, res) => { 
    //Get the top 3 products based on the rating
    const product = await Product.find({}).sort({rating: -1}).limit(3);
    res.status(200).send(product);
})



export { getProducts, getProductById, createProduct, updateProduct, updateProductStock, deleteProduct, createProductReview, getTopProducts };