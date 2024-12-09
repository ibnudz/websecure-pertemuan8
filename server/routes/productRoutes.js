const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const sanitizeInput = require('../middleware/sanitize');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', sanitizeInput, createProduct);
router.put('/:id', sanitizeInput, updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;