import express from 'express';
const router = express.Router();
import { getProductById, getProducts } from '../controllers/productController.js';


//Used controller file to keep the code clean and modular

// routes to /api/products
router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

export default router;