const mongoose = require("mongoose");
require("dotenv").config()


// Define MongoDB Connection URL
const mongoURL = "mongodb://localhost:27017/hotels";

// const mongoDBURL=`mongodb+srv://kirankhadka8848:k1LepC0Ydf7yc7dl@cluster0.rqy3l4v.mongodb.net/
const mongodbURL_LOCAL=process.env.MONGODB_URL_LOCAL

const mongoDBURL=process.env.MONGODB_URL


// Connect to MongoDB with specified options
mongoose.connect(mongoDBURL)

// Accessing the Connection Object
const db = mongoose.connection;

// Event listener for successful connection
db.once('open', () => {
    console.log('MongoDB connection established successfully');
});

// Event listener for connection errors
db.on('error', (error) => {
    console.error('MongoDB Connection Error:', error);
});

// Export the database connection for reuse in other modules :-
module.exports =db;


