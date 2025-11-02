const mongoose = require('mongoose');

const connectDB = (url) => {
  mongoose.connect(url);
  const connection = mongoose.connection;
  connection.on('error', () => {
    console.log('Error connecting to database');
  });
  connection.on('connected', () => {
    console.log('MongoDB connection successfully');
  });
  try {
  } catch (error) {
    console.log('error', error);
  }
};
module.exports = connectDB;
