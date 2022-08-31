const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const helmet = require('helmet');

mongoose.connect('mongodb://localhost:27017/aroundb');

const usersRoute = require('./routes/usersRoute');
const cardsRoute = require('./routes/cardsRoute');
const nonExistRoute = require('./routes/nonExistRoute');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: '630ef8d10a8fc9e2a454474e',
  };
  next();
});

app.use(helmet());
app.use('/', usersRoute);
app.use('/', cardsRoute);
app.use('*', nonExistRoute);

app.listen(PORT);
