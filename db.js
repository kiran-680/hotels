const mongoose = require("mongoose");

// Define MongoDB Connection URL
const mongoURL = "mongodb://localhost:27017/hotels";

// Connect to MongoDB with specified options
mongoose.connect(mongoURL)

// Accessing the Connection Object
const db = mongoose.connection;

// Event listener for successful connection
db.once('open', () => {
    console.log('MongoDB connection established successfully');
});

// Event listener for connection errors
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

// Export the database connection for reuse in other modules
module.exports = db;
