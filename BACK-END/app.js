// app.js
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin');
const searchRoutes = require('./routes/search');

const app = express();
app.use(bodyParser.json());

app.use('/api', productRoutes);
app.use('/api', adminRoutes);
app.use('/api', searchRoutes);

// Frontend routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  

app.listen(3000, () =>{

 console.log('Server running on port 3000')
});


















// // app.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// // Connect to MongoDB (replace with your actual MongoDB connection string)
// mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true });

// // Define your Product schema (adjust fields as needed)
// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   category: String,
//   subcategories: [String],
//   variants: [{ color: String, size: String }]
// });

// const Product = mongoose.model('Product', productSchema);

// // Define your routes (create, read, update, delete)

// // Create a new product
// app.post('/products', async (req, res) => {
//   try {
//     const newProduct = new Product(req.body);
//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating product' });
//   }
// });

// // Get all products
// app.get('/products', async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching products' });
//   }
// });

// // Update a product by ID
// app.put('/products/:id', async (req, res) => {
//   try {
//     await Product.findByIdAndUpdate(req.params.id, req.body);
//     res.sendStatus(204);
//   } catch (error) {
//     res.status(500).json({ error: 'Error updating product' });
//   }
// });

// // Delete a product by ID
// app.delete('/products/:id', async (req, res) => {
//   try {
//     await Product.findByIdAndRemove(req.params.id);
//     res.sendStatus(204);
//   } catch (error) {
//     res.status(500).json({ error: 'Error deleting product' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
