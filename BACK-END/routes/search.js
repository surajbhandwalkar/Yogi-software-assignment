// routes/search.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get('/search', async (req, res) => {
  const { query } = req.query;
  const products = await Product.find({ title: { $regex: query, $options: 'i' } });
  res.json(products);
});

module.exports = router;
