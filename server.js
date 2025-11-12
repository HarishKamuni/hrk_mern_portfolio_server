const express = require('express');
const connectDB = require('./config/dbConfig');
require('dotenv').config();

const app = express();
const portfolioRoute = require('./routes/portfolioRoute.js');

app.use(express.json());

app.use('/api/portfolio', portfolioRoute);

const port = process.env.PORT || 5000;


const start = () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server listening at port ${port}`);
    });
  } catch (error) {
    console.log('');
  }
};

start();
