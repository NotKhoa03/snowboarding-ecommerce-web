import express from 'express';
const router = express.Router();
import { getProductById, getProducts, createProduct, updateProduct, deleteProduct, createProductReview } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';


//Used controller file to keep the code clean and modular

// routes to /api/products
router.route('/').get(getProducts).post(protect, admin, createProduct);

router.route('/:id').get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);

router.route('/:id/reviews').post(protect, createProductReview);



export default router;