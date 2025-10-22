const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB using Mongoose
// The connection string is stored in the environment variable MONGO_URI
// If the connection is successful, it logs a success message; if it fails, it logs the error and exits the process 

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process with failure  
    }
    }

module.exports = connectDB;

// This code connects to a MongoDB database using Mongoose.
// It uses the connection string stored in the environment variable MONGO_URI.
// If the connection is successful, it logs a success message; if it fails, it logs the error and exits the process.    