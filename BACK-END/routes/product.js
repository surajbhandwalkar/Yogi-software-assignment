// routes/product.js
const express = require('express');
const Product = require('../models/Product');
const Category = require('../models/Category');
const router = express.Router();

// Add Product
router.post('/product', async (req, res) => {
  const { title, description, images, category, variants } = req.body;
  const product = new Product({ title, description, images, category, variants });
  await product.save();
  res.json(product);
});

// Update Product
router.put('/product/:id', async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedProduct);
});

// Delete Product
router.delete('/product/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
});

module.exports = router;
