const express = require('express');
const { createProduct, getProductsByUser, deleteProduct } = require('../controllers/productController');

const router = express.Router();

router.post('/products', createProduct);                  // Create a product
router.get('/products/user/:userId', getProductsByUser);  // Get products by user
router.delete('/products/:id', deleteProduct);            // Delete a product

module.exports = router;
