const mongoose = require('mongoose');
const { DEFAULT_CIPHERS } = require('tls');

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true, // Automatically generate ObjectId for each product
    },          
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Create the Product model from the schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model for use in other parts of the application
module.exports = Product;

// This code defines a Mongoose schema for a Product model.
// The schema includes fields for name, description, price, category, and inStock status.
// It also enables automatic timestamping for createdAt and updatedAt fields.
// Finally, it exports the Product model for use in other parts of the application.
// This code connects to a MongoDB database using Mongoose.
// It uses the connection string stored in the environment variable MONGO_URI.
// If the connection is successful, it logs a success message; if it fails, it logs the error and exits the process