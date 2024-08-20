// models/Product.js
const mongoose = require('../database');

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  images: [{ type: String }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  variants: {
    colors: [{ type: String }],
    sizes: [{ type: String }],
  },
});

module.exports = mongoose.model('Product', ProductSchema);
