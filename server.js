const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
require('dotenv').config();

const app = express();
const portfolioRoute = require('./routes/portfolioRoute.js');

app.use(express.json());

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://endearing-kangaroo-e2bcbf.netlify.app/',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

app.use('/api/portfolio', portfolioRoute);

const port = process.env.PORT || 5000;

//Heroku configration
// const path = require('path');
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build.index.html'));
//   });
// }

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
