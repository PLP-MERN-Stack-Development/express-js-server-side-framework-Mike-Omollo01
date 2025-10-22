const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products); 
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
});

module.exports = router;

// Get a specific product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
        
    } catch (error) {   
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }

});

// Create a new product
router.post('/', async (req, res) => {
    const { name, description, price, category, inStock } = req.body;
    const newProduct = new Product({ name, description, price, category, inStock });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }
});

// Update a product by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
});

module.exports = router;

// This code defines routes for managing products in an Express application.
// It includes routes to get all products, get a specific product by ID, create a new product, update a product by ID, and delete a product by ID.
// Each route handles errors and returns appropriate HTTP status codes and messages.    

    
